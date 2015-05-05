//=========================================================================
// Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//
// This file is part of SOFIA.
//
// SOFIA is free software: you can redistribute it and/or modify it under 
// the terms of the GNU General Public License as published by the 
// Free Software Foundation, either version 3 of the License, or (at your 
// option) any later version.
//
// SOFIA is distributed in the hope that it will be useful, but WITHOUT 
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or 
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public 
// License for more details.
//
// You should have received a copy of the GNU General Public License 
// along with SOFIA. If not, see <http://www.gnu.org/licenses/>.
//
//======================================================
// Copyright details
//======================================================
//   Company: wega Informatik AG
//   Address: Aeschengraben 20, 4051 Basel, Switzerland
//   Website: http://www.wega-it.com
//   Author: Erick Bastidas
//   Email: ebastidas3@gmail.com
//=========================================================================


var pageSession = new ReactiveDict();

Template.ExperimentsDetailsCommands.rendered = function() {
	
};

Template.ExperimentsDetailsCommands.events({
	
});

Template.ExperimentsDetailsCommands.helpers({
	
});

var ExperimentsDetailsCommandsViewItems = function(cursor) {
	if(!cursor) {
		return [];
	}

	var searchString = pageSession.get("ExperimentsDetailsCommandsViewSearchString");
	var sortBy = pageSession.get("ExperimentsDetailsCommandsViewSortBy");
	var sortAscending = pageSession.get("ExperimentsDetailsCommandsViewSortAscending");
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

var ExperimentsDetailsCommandsViewExport = function(cursor, fileType) {
	var data = ExperimentsDetailsCommandsViewItems(cursor);
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
				//TODO: catch all other status. Now change status of the experiment to "In Error"
				var mc = ExperimentCommands.findOne({_id:commandId});
				Experiments.update({ _id: mc.experimentId }, { "$set": {"status": "In Error"}});
			}
			
			ExperimentCommands.update({ _id: commandId }, { "$set": {"status": newStatus, "statusMessage": newStatusMessage}});
		}
		else
		{
	    		// show a nice error message
	    		console.log("error soap");
			ExperimentCommands.update({ _id: commandId }, { "$set": {"status":"404", "statusMessage": "connection error"}});
		}
	});

}


var ExperimentsDetailsCommandsRun = function(cursor, experimentId) {

	var commands = ExperimentsDetailsCommandsViewItems(cursor);

	
	//1. queue all the commands -> set Status to 'queued' to all commands. //TODO: Issue. Find better solution for async commands, this will stop the client until all the commands finish 
	//2. call each command sequentially: connectDeviceSoap

	//TODO: add lock functionality

	var exp = Experiments.findOne({_id : experimentId});
	var dev = Devices.findOne({_id : exp.deviceId});

	var firstCommandFlag = true;
	var previousCommandId; 
	var previousCommandName; //BUG. TODO: delete. This is a Workaround for the bug in HSR bug by not allowing to call multiple sync (getStatus) commands in parallell (try calling getStatus at the same time sequentially to reproduce the error). This line gives some interval of time so the simulator can process. Delete this workaround for a better simulator or a device that allows parallel command calls/execution.

	Experiments.update({ _id: experimentId }, { "$set": {"date": new Date()}});
	Experiments.update({ _id: experimentId }, { "$set": {"status": "Running..."}});

	_.each(commands, function(c){	
		ExperimentCommands.update({ _id: c._id }, { "$set": {"status": "-", "statusMessage":"Queued"}});

		var params = getparametersAsJSON(c.command_parameters);

		if(!params){
			params = '"requestId":"'+c.requestId+'"';
		}else{
			params += ',"requestId":"'+c.requestId+'"';
		}

		if(c.commandName=="Reset"){
			params += ',"eventReceiverURI":"http://'+ Meteor.settings.public.sofia_IP + ':' + Meteor.settings.public.sofia_event_receiver_port +'/sila-event-receiver?wsdl"'; //DEPLOY: change this in different server
			params += ',"deviceId":"'+dev._id+'","simulationMode":"false"';
		}
		if(c.commandName=="LockDevice"){
			params += ',"eventReceiverURI":"http://'+ Meteor.settings.public.sofia_IP + ':' + Meteor.settings.public.sofia_event_receiver_port +'/sila-event-receiver?wsdl"'; //DEPLOY: change this in different server
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

			var query = ExperimentCommands.find({_id:previousCommandId});


			var handle = query.observeChanges({
			  changed: function (id, experiment_command) {
			    if(experiment_command.status){

					if (experiment_command.status == 1 || experiment_command.status == 3 ){ //&& status is 1 (sync finished) || 3 (async finished)
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
						Experiments.update({ _id: experimentId }, { "$set": {"status": "In Error"}});
					}
			    }
			  }
			});
			
			// Stop listening after some time. //TODO: check this for long executions of experiments
			//setTimeout(function () {handle.stop();}, 86400000);
		}
		previousCommandId = c._id;
	});



	//TODO: uncomment this this for async error messages
	///////////////////
	//Hear for the last command to complete
	var lastCommandId = _.last(commands)._id;
	var queryLastCommand = ExperimentCommands.find({_id:lastCommandId});
	var handleLastCommand = queryLastCommand.observeChanges({
	  changed: function (id, experiment_command) {
	    if(experiment_command.status){
	    	if (experiment_command.status == 1 || experiment_command.status == 3 ){ //&& status is 1 (sync finished) || 3 (async finished)
				handleLastCommand.stop();
				//check for last command and change the status of the experiment
				Experiments.update({ _id: experimentId }, { "$set": {"status": "Execution completed"}});
				
			}
			//TODO: check and uncomment this this for async error messages
			/*
			else{
				console.log("here");
				Experiments.update({ _id: experimentId }, { "$set": {"status": "In Error"}});
			}
			*/
	    }
	  }
	});
	// Stop listening after some time. //TODO: check this for long executions of experiments
	//setTimeout(function () {handle.stop();}, 86400000);



};



Template.ExperimentsDetailsCommandsView.rendered = function() {
	pageSession.set("ExperimentsDetailsCommandsViewStyle", "table");
	
};

Template.ExperimentsDetailsCommandsView.events({
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
				pageSession.set("ExperimentsDetailsCommandsViewSearchString", searchString);
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
					pageSession.set("ExperimentsDetailsCommandsViewSearchString", searchString);
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
					pageSession.set("ExperimentsDetailsCommandsViewSearchString", "");
				}

			}
			return false;
		}

		return true;
	},

	"click #dataview-insert-button": function(e, t) {
		e.preventDefault();

		var experimentOwnerId = Experiments.findOne({_id:this.params.experimentId},{}).ownerId;

		if(experimentOwnerId == Meteor.userId())
		{
			Router.go("experiments.details.insert", {experimentId: this.params.experimentId});
		}
		else{
			bootbox.dialog({
			message: "Only the owner of the experiment can add commands. Create your own experiment to add commands.",
			title: "Permission denied",
			animate: false,
			buttons: {
				success: {
					label: "OK",
					className: "btn-success",
					callback: function() {
					}
				}
			}
			});
			return false;
		}

	},

	"click #dataview-export-default": function(e, t) {
		e.preventDefault();
		ExperimentsDetailsCommandsViewExport(this.experiment_commands, "csv");
	},

	"click #dataview-export-csv": function(e, t) {
		e.preventDefault();
		ExperimentsDetailsCommandsViewExport(this.experiment_commands, "csv");
	},

	"click #dataview-export-tsv": function(e, t) {
		e.preventDefault();
		ExperimentsDetailsCommandsViewExport(this.experiment_commands, "tsv");
	},

	"click #dataview-export-json": function(e, t) {
		e.preventDefault();
		ExperimentsDetailsCommandsViewExport(this.experiment_commands, "json");
	},

	"click #dataview-run-button": function(e, t) {
		e.preventDefault();

		var exp = Experiments.findOne({_id : this.params.experimentId});
		var dev = Devices.findOne({_id : exp.deviceId});

		if(dev){
			Experiments.update({ _id: this.params.experimentId }, { "$set": {"status":"Running"}});

			ExperimentsDetailsCommandsRun(this.experiment_commands, this.params.experimentId);
		}else{
			bootbox.dialog({
			message: "The device attached to this experiment is not shared with you. Ask the owner of the device to share it before you can run this experiment.",
			title: "Permission denied",
			animate: false,
			buttons: {
				success: {
					label: "OK",
					className: "btn-success",
					callback: function() {
					}
				}
			}
			});
			return false;

		}





		/*

		//RUN EXPERIMENT IN THE BACKGROUND AS A JOB

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


	}

	
});

Template.ExperimentsDetailsCommandsView.helpers({
	"isEmpty": function() {
		return !this.experiment_commands || this.experiment_commands.count() == 0;
	},
	"isNotEmpty": function() {
		return this.experiment_commands && this.experiment_commands.count() > 0;
	},
	"isNotFound": function() {
		return this.experiment_commands && pageSession.get("ExperimentsDetailsCommandsViewSearchString") && ExperimentsDetailsCommandsViewItems(this.experiment_commands).length == 0;
	},
	"searchString": function() {
		return pageSession.get("ExperimentsDetailsCommandsViewSearchString");
	},
	"viewAsTable": function() {
		return pageSession.get("ExperimentsDetailsCommandsViewStyle") == "table";
	},
	"viewAsList": function() {
		return pageSession.get("ExperimentsDetailsCommandsViewStyle") == "list";
	},
	"viewAsGallery": function() {
		return pageSession.get("ExperimentsDetailsCommandsViewStyle") == "gallery";
	}

	
});


Template.ExperimentsDetailsCommandsViewTable.rendered = function() {
	
};

Template.ExperimentsDetailsCommandsViewTable.events({
	"click .th-sortable": function(e, t) {
		e.preventDefault();
		var oldSortBy = pageSession.get("ExperimentsDetailsCommandsViewSortBy");
		var newSortBy = $(e.target).attr("data-sort");

		pageSession.set("ExperimentsDetailsCommandsViewSortBy", newSortBy);
		if(oldSortBy == newSortBy) {
			var sortAscending = pageSession.get("ExperimentsDetailsCommandsViewSortAscending") || false;
			pageSession.set("ExperimentsDetailsCommandsViewSortAscending", !sortAscending);
		} else {
			pageSession.set("ExperimentsDetailsCommandsViewSortAscending", true);
		}
	}
});

Template.ExperimentsDetailsCommandsViewTable.helpers({
	"tableItems": function() {
		return ExperimentsDetailsCommandsViewItems(this.experiment_commands);
	}
});


Template.ExperimentsDetailsCommandsViewTableItems.rendered = function() {
	
};

Template.ExperimentsDetailsCommandsViewTableItems.events({
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
						ExperimentCommands.remove({ _id: me._id });
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
		Router.go("experiments.details.edit", {experimentId: UI._parentData(1).params.experimentId, commandId: this._id});
		return false;
	}
});

Template.ExperimentsDetailsCommandsViewTableItems.helpers({
	"isCommandAccepted": function() {
		return (this.status != '-');
	},
	"isOwner": function() {
		return (this.ownerId === Meteor.userId());
	}
});
