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

Template.Devices.rendered = function() {
	
};

Template.Devices.events({
	
});

Template.Devices.helpers({
	
});

//
// SHOW THE LIST OF DEVICES
// Search, filter, and sort implementation, then show the items from the collection
//
var DevicesViewItems = function(cursor) {
	if(!cursor) {
		return [];
	}

	var searchString = pageSession.get("DevicesViewSearchString");
	var sortBy = pageSession.get("DevicesViewSortBy");
	var sortAscending = pageSession.get("DevicesViewSortAscending");
	if(typeof(sortAscending) == "undefined") sortAscending = true;

	var raw = cursor.fetch();

	// filter
	var filtered = [];
	if(!searchString || searchString == "") {
		filtered = raw;
	} else {
		searchString = searchString.replace(".", "\\.");
		var regEx = new RegExp(searchString, "i");
		var searchFields = ["owner","silaDeviceClassId", "silaDeviceClassVersion", "name", "url", "status", "note"];
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

//
// EXPORT TABLE ITEMS
// Export and download the shown items from the collection to a local file
//
var DevicesViewExport = function(cursor, fileType) {
	var data = DevicesViewItems(cursor);
	var exportFields = ["owner","silaDeviceClassId", "silaDeviceClassVersion", "name", "url", "status", "note"];

	var str = convertArrayOfObjects(data, exportFields, fileType);

	var filename = "export." + fileType;

	downloadLocalResource(str, filename, "application/octet-stream");
}


Template.DevicesView.rendered = function() {
	pageSession.set("DevicesViewStyle", "table");
	
};

Template.DevicesView.events({
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
				pageSession.set("DevicesViewSearchString", searchString);
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
					pageSession.set("DevicesViewSearchString", searchString);
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
					pageSession.set("DevicesViewSearchString", "");
				}

			}
			return false;
		}

		return true;
	},

	"click #dataview-insert-button": function(e, t) {
		e.preventDefault();
		Router.go("devices.insert", {});
	},

	"click #dataview-export-default": function(e, t) {
		e.preventDefault();
		DevicesViewExport(this.device_list, "csv");
	},

	"click #dataview-export-csv": function(e, t) {
		e.preventDefault();
		DevicesViewExport(this.device_list, "csv");
	},

	"click #dataview-export-tsv": function(e, t) {
		e.preventDefault();
		DevicesViewExport(this.device_list, "tsv");
	},

	"click #dataview-export-json": function(e, t) {
		e.preventDefault();
		DevicesViewExport(this.device_list, "json");
	}

	
});

Template.DevicesView.helpers({
	"isEmpty": function() {
		return !this.device_list || this.device_list.count() == 0;
	},
	"isNotEmpty": function() {
		return this.device_list && this.device_list.count() > 0;
	},
	"isNotFound": function() {
		return this.device_list && pageSession.get("DevicesViewSearchString") && DevicesViewItems(this.device_list).length == 0;
	},
	"searchString": function() {
		return pageSession.get("DevicesViewSearchString");
	},
	"viewAsTable": function() {
		return pageSession.get("DevicesViewStyle") == "table";
	},
	"viewAsList": function() {
		return pageSession.get("DevicesViewStyle") == "list";
	},
	"viewAsGallery": function() {
		return pageSession.get("DevicesViewStyle") == "gallery";
	}

	
});


Template.DevicesViewTable.rendered = function() {
	
};

Template.DevicesViewTable.events({
	"click .th-sortable": function(e, t) {
		e.preventDefault();
		var oldSortBy = pageSession.get("DevicesViewSortBy");
		var newSortBy = $(e.target).attr("data-sort");

		pageSession.set("DevicesViewSortBy", newSortBy);
		if(oldSortBy == newSortBy) {
			var sortAscending = pageSession.get("DevicesViewSortAscending") || false;
			pageSession.set("DevicesViewSortAscending", !sortAscending);
		} else {
			pageSession.set("DevicesViewSortAscending", true);
		}
	}
});

Template.DevicesViewTable.helpers({
	"tableItems": function() {
		return DevicesViewItems(this.device_list);
	}
});


Template.DevicesViewTableItems.rendered = function() {
	
};

Template.DevicesViewTableItems.events({
	"click td": function(e, t) {
		e.preventDefault();
		Router.go("devices.details", {deviceId: this._id});
		return false;
	},
	"click #delete-button": function(e, t) {
		e.preventDefault();
		var me = this;
		bootbox.dialog({
			message: "Delete? Are you sure? Experiments attached to this device might not run anymore",
			title: "Delete",
			animate: false,
			buttons: {
				success: {
					label: "Yes",
					className: "btn-success",
					callback: function() {
						Devices.remove({ _id: me._id });
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
		Router.go("devices.edit", {deviceId: this._id});
		return false;
	},
	"click #lock-button": function(e, t) {
		e.preventDefault();
		var me = this;
		bootbox.dialog({
			message: "Lock? [Under development...]", //TODO
			title: "Lock",
			animate: false,
			buttons: {
				success: {
					label: "Yes",
					className: "btn-success",
					callback: function() {
						//TODO
						//Devices.remove({ _id: me._id });
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
	"click #status-button": function(e, t) {
		e.preventDefault();
		var me =this;
		var url = me.url;
		var command = "GetStatus";
		var args = {"requestId": "1"}; //TODO: This id should be unique in every request according to SiLA. This has to be fixed by the standard, as it doesn't make sense to create a unique requestId for each getStatus (sync) command.

		Meteor.call('connectDeviceSoap', url, command, args, function (error,response) {
	  		if (!error) {
				Devices.update({ _id: me._id }, { "$set": {"status":response.state + " (at: " + response.currentTime + ")"}});//BUG: Users who are not the owner of the device cannot update a shared (seen by them) device as they are not the Owner, change this
			}
			else
			{
				Devices.update({ _id: this._id }, { "$set": {"status":"Unable to connect"}});
				bootbox.dialog({
					message: "Error: Unable to connect. Check if the device is on.",
					title: "Error",
					animate: false,
					buttons: {
						success: {
							label: "OK",
							className: "btn-success",
							callback: function() {
								//TODO
							}
						}
					}
				});
	    		console.log("error soap");					
			}
		});		
		return false;
	},
	"click #share-button": function(e, t) {
		e.preventDefault();
		var me =this;
		var newValue = !me.private;
		Devices.update({ _id: this._id }, { "$set": {"private":newValue}});				
		return false;
	}
});

Template.DevicesViewTableItems.helpers({
	"isOwner": function() {
		return (this.ownerId === Meteor.userId());
	}
});
