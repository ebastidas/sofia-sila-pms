//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


var pageSession = new ReactiveDict();

Template.MethodsDetailsCommands.rendered = function() {
	
};

Template.MethodsDetailsCommands.events({
	
});

Template.MethodsDetailsCommands.helpers({
	
});

var MethodsDetailsCommandsViewItems = function(cursor) {
	if(!cursor) {
		return [];
	}

	var searchString = pageSession.get("MethodsDetailsCommandsViewSearchString");
	var sortBy = pageSession.get("MethodsDetailsCommandsViewSortBy");
	var sortAscending = pageSession.get("MethodsDetailsCommandsViewSortAscending");
	if(typeof(sortAscending) == "undefined") sortAscending = true;

	var raw = cursor.fetch();

	// filter
	var filtered = [];
	if(!searchString || searchString == "") {
		filtered = raw;
	} else {
		searchString = searchString.replace(".", "\\.");
		var regEx = new RegExp(searchString, "i");
		var searchFields = ["commandId", "requestId", "commandName", "command_parameters", "status", "modifiedAt", "statusMessage"];
		filtered = _.filter(raw, function(item) {
			var match = false;
			_.each(searchFields, function(field) {
				var value = (getPropertyValue(field, item) || "") + "";

				match = match || (value && value.match(regEx));
				if(match) {
					return false;
				}
			})
			return match;
		});
	}

	// sort
	if(sortBy) {
		filtered = _.sortBy(filtered, sortBy);

		// descending?
		if(!sortAscending) {
			filtered = filtered.reverse();
		}
	}

	return filtered;
};

var MethodsDetailsCommandsViewExport = function(cursor, fileType) {
	var data = MethodsDetailsCommandsViewItems(cursor);
	var exportFields = ["commandId", "requestId", "commandName", "command_parameters", "status", "modifiedAt", "statusMessage"];

	var str = convertArrayOfObjects(data, exportFields, fileType);

	var filename = "export." + fileType;

	downloadLocalResource(str, filename, "application/octet-stream");
};

var runCommand = function(commandId, url, commandName, args){

	//console.log("---3.runCommand.commandId--" + commandId);

	Meteor.call('connectDeviceSoap', url, commandName, args, function (error,response) {
  		// identify the error
  		if (!error) {
			//TODO: check if device is locked and can't get the information.
			var newStatus="-", newStatusMessage="-";
			
	    	//console.log(response[commandName + "Result"].returnCode);
			newStatus = response[commandName + "Result"].returnCode; 
			newStatusMessage = response[commandName + "Result"].message;

			if (newStatus==1) {
				newStatusMessage = "success"; // workaround empty message in the simulator. TODO: delete
			}
			else if (newStatus==2) {
				newStatusMessage += " (waiting/running...)"; // workaround for not knowing if the command is running or waiting in the queue. TODO: check via getStatus periodically
			}
			else if (newStatus==3){
				//Asynchronous command has finished
			}
			else{
				//TODO: catch all other status. Now change status of the method to "In Error"
				var mc = MethodCommands.findOne({_id:commandId});
				Methods.update({ _id: mc.methodId }, { "$set": {"status": "In Error"}});
			}
			
			MethodCommands.update({ _id: commandId }, { "$set": {"status": newStatus, "statusMessage": newStatusMessage}});
		}
		else
		{
	    		// show a nice error message
	    		console.log("error soap");
			MethodCommands.update({ _id: commandId }, { "$set": {"status":"404", "statusMessage": "connection error"}});
		}
	});

}


var MethodsDetailsCommandsRun = function(cursor, methodId) {

	var commands = MethodsDetailsCommandsViewItems(cursor);

	
	//1. queue all the commands -> set Status to 'queued' to all commands. //TODO: Issue. Find better solution for async commands, this will stop the client until all the commands finish 
	//2. call each command sequentially: connectDeviceSoap

	//TODO: add lock functionality

	var meth = Methods.findOne({_id : methodId});
	var dev = Devices.findOne({_id : meth.deviceId});

	var firstCommandFlag = true;
	var previousCommandId; 
	var previousCommandName; //BUG. TODO: delete. This is a Workaround for the bug in HSR bug by not allowing to call multiple sync (getStatus) commands in parallell (try calling getStatus at the same time sequentially to reproduce the error). This line gives some interval of time so the simulator can process. Delete this workaround for a better simulator or a device that allows parallel command calls/execution.

	Methods.update({ _id: methodId }, { "$set": {"date": new Date()}});
	Methods.update({ _id: methodId }, { "$set": {"status": "Running..."}});

	_.each(commands, function(c){	
		MethodCommands.update({ _id: c._id }, { "$set": {"status": "-", "statusMessage":"Queued"}});

		var params = getparametersAsJSON(c.command_parameters);

		if(!params){
			params = '"requestId":"'+c.requestId+'"';
		}else{
			params += ',"requestId":"'+c.requestId+'"';
		}

		if(c.commandName=="Reset"){
			params += ',"eventReceiverURI":"'+ EVENT_RECEIVER_URI +'"'; //DEPLOY: change this in different server
			params += ',"deviceId":"'+dev._id+'","simulationMode":"false"';
		}
		if(c.commandName=="LockDevice"){
			params += ',"eventReceiverURI":"'+Session.get("eventReceiverURI")+'"'; //DEPLOY: change this in different server
			params += ',"lockId":"123"'; //TODO: check lockId if device has been locked, and add to every device.
		}
		
		var argsString = '{' + params + '}'; // TODO: add dynamic parameters for all the commands
		
		var args = JSON.parse(argsString);

		if(firstCommandFlag)
		{
			//run immediately
			firstCommandFlag = false;	
			runCommand(c._id, dev.url, c.commandName, args);

			if(c.commandName == "GetStatus" || c.commandName == "GetDeviceIdentification"){
				previousCommandName = "syncCommand";
			}
			else{
				previousCommandName = "";
			}

		}
		else{
			//Add observeChanges to previous command
			//Defer the execution of the next command until the previous command has completely finished: code 1 (sync commands), or 3 (async commands)

			var query = MethodCommands.find({_id:previousCommandId});


			var handle = query.observeChanges({
			  changed: function (id, method_command) {
			    if(method_command.status){

	    	console.log(id + "--" + method_command.status);
					if (method_command.status == 1 || method_command.status == 3 ){ //&& status is 1 (sync finished) || 3 (async finished)
						handle.stop();

						if(previousCommandName == "syncCommand" ){
							setTimeout(function () {runCommand(c._id, dev.url, c.commandName, args);}, 1300);// BUG. TODO:delete
						}
						else{
							runCommand(c._id, dev.url, c.commandName, args);
						}

						if(c.commandName == "GetStatus" || c.commandName == "GetDeviceIdentification"){ // or other sync command. BUG. TODO:delete
							previousCommandName = "syncCommand";
						}
						else{
							previousCommandName = "";
						}
					}else{
						Methods.update({ _id: methodId }, { "$set": {"status": "In Error"}});
					}
			    }
			  }
			});
			
			// Stop listening after some time. //TODO: check this for long executions of methods
			//setTimeout(function () {handle.stop();}, 86400000);
		}
		previousCommandId = c._id;
	});



	//TODO: uncomment this this for async error messages
	///////////////////
	//Hear for the last command to complete
	var lastCommandId = _.last(commands)._id;
	var queryLastCommand = MethodCommands.find({_id:lastCommandId});
	var handleLastCommand = queryLastCommand.observeChanges({
	  changed: function (id, method_command) {
	    if(method_command.status){
	    	console.log(id + "--" + method_command.status);
			if (method_command.status == 1 || method_command.status == 3 ){ //&& status is 1 (sync finished) || 3 (async finished)
				handleLastCommand.stop();
				//check for last command and change the status of the method
				Methods.update({ _id: methodId }, { "$set": {"status": "Execution completed"}});
				
			}
			//TODO: check and uncomment this this for async error messages
			/*
			else{
				console.log("here");
				Methods.update({ _id: methodId }, { "$set": {"status": "In Error"}});
			}
			*/
	    }
	  }
	});
	// Stop listening after some time. //TODO: check this for long executions of methods
	//setTimeout(function () {handle.stop();}, 86400000);



};



Template.MethodsDetailsCommandsView.rendered = function() {
	pageSession.set("MethodsDetailsCommandsViewStyle", "table");
	
};

Template.MethodsDetailsCommandsView.events({
	"submit #dataview-controls": function(e, t) {
		return false;
	},

	"click #dataview-search-button": function(e, t) {
		e.preventDefault();
		var form = $(e.currentTarget).parent();
		if(form) {
			var searchInput = form.find("#dataview-search-input");
			if(searchInput) {
				searchInput.focus();
				var searchString = searchInput.val();
				pageSession.set("MethodsDetailsCommandsViewSearchString", searchString);
			}

		}
		return false;
	},

	"keydown #dataview-search-input": function(e, t) {
		if(e.which === 13)
		{
			e.preventDefault();
			var form = $(e.currentTarget).parent();
			if(form) {
				var searchInput = form.find("#dataview-search-input");
				if(searchInput) {
					var searchString = searchInput.val();
					pageSession.set("MethodsDetailsCommandsViewSearchString", searchString);
				}

			}
			return false;
		}

		if(e.which === 27)
		{
			e.preventDefault();
			var form = $(e.currentTarget).parent();
			if(form) {
				var searchInput = form.find("#dataview-search-input");
				if(searchInput) {
					searchInput.val("");
					pageSession.set("MethodsDetailsCommandsViewSearchString", "");
				}

			}
			return false;
		}

		return true;
	},

	"click #dataview-insert-button": function(e, t) {
		e.preventDefault();
		Router.go("methods.details.insert", {methodId: this.params.methodId});
	},

	"click #dataview-export-default": function(e, t) {
		e.preventDefault();
		MethodsDetailsCommandsViewExport(this.method_commands, "csv");
	},

	"click #dataview-export-csv": function(e, t) {
		e.preventDefault();
		MethodsDetailsCommandsViewExport(this.method_commands, "csv");
	},

	"click #dataview-export-tsv": function(e, t) {
		e.preventDefault();
		MethodsDetailsCommandsViewExport(this.method_commands, "tsv");
	},

	"click #dataview-export-json": function(e, t) {
		e.preventDefault();
		MethodsDetailsCommandsViewExport(this.method_commands, "json");
	},

	"click #dataview-run-button": function(e, t) {
		e.preventDefault();
		Methods.update({ _id: this.params.methodId }, { "$set": {"status":"Running"}});



/*

	var myJobs = JobCollection('myJobQueue1');
  	Meteor.subscribe('allJobs1');

  // Because of the server settings, the code below will
  // only work if the client is authenticated.
  // On the server, all of it would run unconditionally.

  // Create a job:
  var job = myJobs.createJob('sendEmail', // type of job
    // Job data that you define, including anything the job
    // needs to complete. May contain links to files, etc...
    {
      address: 'bozo@clowns.com',
      subject: 'Critical rainbow hair shortage',
      message: 'LOL; JK, KThxBye.'
    }
  );

console.log(job);

  // Set some properties of the job and then submit it
  job.save();               // Commit it to the server




var workers = Job.processJobs('myJobQueue1', 'sendEmail',
      function (job, cb) {
        // This will only be called if a
        // 'sendEmail' job is obtained
        var email = job.data; // Only one email per job
        sendEmail(email.address, email.subject, email.message,
          function(err) {
            if (err) {
            	console.log("job error");
              job.log("Sending failed with error" + err,
                {level: 'warning'});
              job.fail("" + err);
            } else {
            	console.log("job done");
              job.done();
            }
            // Be sure to invoke the callback
            // when work on this job has finished
            cb();
          }
        );
      }
    );


*/

//UNCOMMENT NEXT LINE
		MethodsDetailsCommandsRun(this.method_commands, this.params.methodId);
		//Router.go("methods.details.insert", {methodId: this.params.methodId});

	}

	
});

Template.MethodsDetailsCommandsView.helpers({
	"isEmpty": function() {
		return !this.method_commands || this.method_commands.count() == 0;
	},
	"isNotEmpty": function() {
		return this.method_commands && this.method_commands.count() > 0;
	},
	"isNotFound": function() {
		return this.method_commands && pageSession.get("MethodsDetailsCommandsViewSearchString") && MethodsDetailsCommandsViewItems(this.method_commands).length == 0;
	},
	"searchString": function() {
		return pageSession.get("MethodsDetailsCommandsViewSearchString");
	},
	"viewAsTable": function() {
		return pageSession.get("MethodsDetailsCommandsViewStyle") == "table";
	},
	"viewAsList": function() {
		return pageSession.get("MethodsDetailsCommandsViewStyle") == "list";
	},
	"viewAsGallery": function() {
		return pageSession.get("MethodsDetailsCommandsViewStyle") == "gallery";
	}

	
});


Template.MethodsDetailsCommandsViewTable.rendered = function() {
	
};

Template.MethodsDetailsCommandsViewTable.events({
	"click .th-sortable": function(e, t) {
		e.preventDefault();
		var oldSortBy = pageSession.get("MethodsDetailsCommandsViewSortBy");
		var newSortBy = $(e.target).attr("data-sort");

		pageSession.set("MethodsDetailsCommandsViewSortBy", newSortBy);
		if(oldSortBy == newSortBy) {
			var sortAscending = pageSession.get("MethodsDetailsCommandsViewSortAscending") || false;
			pageSession.set("MethodsDetailsCommandsViewSortAscending", !sortAscending);
		} else {
			pageSession.set("MethodsDetailsCommandsViewSortAscending", true);
		}
	}
});

Template.MethodsDetailsCommandsViewTable.helpers({
	"tableItems": function() {
		return MethodsDetailsCommandsViewItems(this.method_commands);
	}
});


Template.MethodsDetailsCommandsViewTableItems.rendered = function() {
	
};

Template.MethodsDetailsCommandsViewTableItems.events({
	"click td": function(e, t) {
		e.preventDefault();
		/**/
		return false;
	},

	"click #delete-button": function(e, t) {
		e.preventDefault();
		var me = this;
		bootbox.dialog({
			message: "Delete? Are you sure?",
			title: "Delete",
			animate: false,
			buttons: {
				success: {
					label: "Yes",
					className: "btn-success",
					callback: function() {
						MethodCommands.remove({ _id: me._id });
					}
				},
				danger: {
					label: "No",
					className: "btn-default"
				}
			}
		});
		return false;
	},
	"click #edit-button": function(e, t) {
		e.preventDefault();
		Router.go("methods.details.edit", {methodId: UI._parentData(1).params.methodId, commandId: this._id});
		return false;
	}
});

Template.MethodsDetailsCommandsViewTableItems.helpers({
	"isCommandAccepted": function() {
		return (this.status != '-');
	}
});
