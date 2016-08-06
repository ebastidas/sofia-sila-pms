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

Template.Experiments.rendered = function() {
	
};

Template.Experiments.events({
	
});

Template.Experiments.helpers({
	
});

//
// SHOW THE LIST OF EXPERIMENTS
// Search, filter, and sort implementation, then show the items from the collection
//
var ExperimentsViewItems = function(cursor) {
	if(!cursor) {
		return [];
	}

	var searchString = pageSession.get("ExperimentsViewSearchString");
	var sortBy = pageSession.get("ExperimentsViewSortBy");
	var sortAscending = pageSession.get("ExperimentsViewSortAscending");
	if(typeof(sortAscending) == "undefined") sortAscending = true;

	var raw = cursor.fetch();

	// filter
	var filtered = [];
	if(!searchString || searchString == "") {
		filtered = raw;
	} else {
		searchString = searchString.replace(".", "\\.");
		var regEx = new RegExp(searchString, "i");
		var searchFields = ["experimentNumber", "status", "date", "deviceId", "deviceName"];
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
var ExperimentsViewExport = function(cursor, fileType) {
	var data = ExperimentsViewItems(cursor);
	var exportFields = ["experimentNumber", "status", "date", "deviceName"];

	var str = convertArrayOfObjects(data, exportFields, fileType);

	var filename = "export." + fileType;

	downloadLocalResource(str, filename, "application/octet-stream");
}


Template.ExperimentsView.rendered = function() {
	pageSession.set("ExperimentsViewStyle", "table");
	
};

Template.ExperimentsView.events({
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
				pageSession.set("ExperimentsViewSearchString", searchString);
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
					pageSession.set("ExperimentsViewSearchString", searchString);
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
					pageSession.set("ExperimentsViewSearchString", "");
				}

			}
			return false;
		}

		return true;
	},

	"click #dataview-insert-button": function(e, t) {
		e.preventDefault();
		Router.go("experiments.insert", {});
	},

	"click #dataview-export-default": function(e, t) {
		e.preventDefault();
		ExperimentsViewExport(this.experiment_list, "csv");
	},

	"click #dataview-export-csv": function(e, t) {
		e.preventDefault();
		ExperimentsViewExport(this.experiment_list, "csv");
	},

	"click #dataview-export-tsv": function(e, t) {
		e.preventDefault();
		ExperimentsViewExport(this.experiment_list, "tsv");
	},

	"click #dataview-export-json": function(e, t) {
		e.preventDefault();
		ExperimentsViewExport(this.experiment_list, "json");
	}

	
});

Template.ExperimentsView.helpers({
	"isEmpty": function() {
		return !this.experiment_list || this.experiment_list.count() == 0;
	},
	"isNotEmpty": function() {
		return this.experiment_list && this.experiment_list.count() > 0;
	},
	"isNotFound": function() {
		return this.experiment_list && pageSession.get("ExperimentsViewSearchString") && ExperimentsViewItems(this.experiment_list).length == 0;
	},
	"searchString": function() {
		return pageSession.get("ExperimentsViewSearchString");
	},
	"viewAsTable": function() {
		return pageSession.get("ExperimentsViewStyle") == "table";
	},
	"viewAsList": function() {
		return pageSession.get("ExperimentsViewStyle") == "list";
	},
	"viewAsGallery": function() {
		return pageSession.get("ExperimentsViewStyle") == "gallery";
	}

	
});


Template.ExperimentsViewTable.rendered = function() {
	
};

Template.ExperimentsViewTable.events({
	"click .th-sortable": function(e, t) {
		e.preventDefault();
		var oldSortBy = pageSession.get("ExperimentsViewSortBy");
		var newSortBy = $(e.target).attr("data-sort");

		pageSession.set("ExperimentsViewSortBy", newSortBy);
		if(oldSortBy == newSortBy) {
			var sortAscending = pageSession.get("ExperimentsViewSortAscending") || false;
			pageSession.set("ExperimentsViewSortAscending", !sortAscending);
		} else {
			pageSession.set("ExperimentsViewSortAscending", true);
		}
	}
});

Template.ExperimentsViewTable.helpers({
	"tableItems": function() {
		return ExperimentsViewItems(this.experiment_list);
	}
});


Template.ExperimentsViewTableItems.rendered = function() {
	
};

Template.ExperimentsViewTableItems.events({
	"click td": function(e, t) {
		e.preventDefault();
		Router.go("experiments.details", {experimentId: this._id});
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
						Experiments.remove({ _id: me._id });
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
		Router.go("experiments.edit", {experimentId: this._id});
		return false;
	},
	"click #share-button": function(e, t) {
		e.preventDefault();		
		var me =this;

		var isDevicePrivate = Devices.findOne({_id:me.deviceId},{}).private;

		if(isDevicePrivate){
			bootbox.dialog({
				message: "You first need to share the device attached to this experiment",
				title: "Share your device",
				animate: false,
				buttons: {
					success: {
						label: "Go to Devices",
						className: "btn-success",
						callback: function() {
							Router.go("devices", {});
						}
					},
					danger: {
						label: "No",
						className: "btn-default"
					}
				}
			});
		}
		else{
			var newValue = !me.private;
			Experiments.update({ _id: this._id }, { "$set": {"private":newValue}});
		}
		return false;
	}
});

Template.ExperimentsViewTableItems.helpers({
	"isOwner": function() {
		return (this.ownerId === Meteor.userId());
	}
});
