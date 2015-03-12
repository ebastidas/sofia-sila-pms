var pageSession = new ReactiveDict();

Template.Methods.rendered = function() {
	
};

Template.Methods.events({
	
});

Template.Methods.helpers({
	
});

var MethodsViewItems = function(cursor) {
	if(!cursor) {
		return [];
	}

	var searchString = pageSession.get("MethodsViewSearchString");
	var sortBy = pageSession.get("MethodsViewSortBy");
	var sortAscending = pageSession.get("MethodsViewSortAscending");
	if(typeof(sortAscending) == "undefined") sortAscending = true;

	var raw = cursor.fetch();

	// filter
	var filtered = [];
	if(!searchString || searchString == "") {
		filtered = raw;
	} else {
		searchString = searchString.replace(".", "\\.");
		var regEx = new RegExp(searchString, "i");
		var searchFields = ["methodNumber", "status", "date", "deviceId", "deviceName"];
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

var MethodsViewExport = function(cursor, fileType) {
	var data = MethodsViewItems(cursor);
	var exportFields = ["methodNumber", "status", "date", "deviceName"];

	var str = convertArrayOfObjects(data, exportFields, fileType);

	var filename = "export." + fileType;

	downloadLocalResource(str, filename, "application/octet-stream");
}


Template.MethodsView.rendered = function() {
	pageSession.set("MethodsViewStyle", "table");
	
};

Template.MethodsView.events({
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
				pageSession.set("MethodsViewSearchString", searchString);
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
					pageSession.set("MethodsViewSearchString", searchString);
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
					pageSession.set("MethodsViewSearchString", "");
				}

			}
			return false;
		}

		return true;
	},

	"click #dataview-insert-button": function(e, t) {
		e.preventDefault();
		Router.go("methods.insert", {});
	},

	"click #dataview-export-default": function(e, t) {
		e.preventDefault();
		MethodsViewExport(this.method_list, "csv");
	},

	"click #dataview-export-csv": function(e, t) {
		e.preventDefault();
		MethodsViewExport(this.method_list, "csv");
	},

	"click #dataview-export-tsv": function(e, t) {
		e.preventDefault();
		MethodsViewExport(this.method_list, "tsv");
	},

	"click #dataview-export-json": function(e, t) {
		e.preventDefault();
		MethodsViewExport(this.method_list, "json");
	}

	
});

Template.MethodsView.helpers({
	"isEmpty": function() {
		return !this.method_list || this.method_list.count() == 0;
	},
	"isNotEmpty": function() {
		return this.method_list && this.method_list.count() > 0;
	},
	"isNotFound": function() {
		return this.method_list && pageSession.get("MethodsViewSearchString") && MethodsViewItems(this.method_list).length == 0;
	},
	"searchString": function() {
		return pageSession.get("MethodsViewSearchString");
	},
	"viewAsTable": function() {
		return pageSession.get("MethodsViewStyle") == "table";
	},
	"viewAsList": function() {
		return pageSession.get("MethodsViewStyle") == "list";
	},
	"viewAsGallery": function() {
		return pageSession.get("MethodsViewStyle") == "gallery";
	}

	
});


Template.MethodsViewTable.rendered = function() {
	
};

Template.MethodsViewTable.events({
	"click .th-sortable": function(e, t) {
		e.preventDefault();
		var oldSortBy = pageSession.get("MethodsViewSortBy");
		var newSortBy = $(e.target).attr("data-sort");

		pageSession.set("MethodsViewSortBy", newSortBy);
		if(oldSortBy == newSortBy) {
			var sortAscending = pageSession.get("MethodsViewSortAscending") || false;
			pageSession.set("MethodsViewSortAscending", !sortAscending);
		} else {
			pageSession.set("MethodsViewSortAscending", true);
		}
	}
});

Template.MethodsViewTable.helpers({
	"tableItems": function() {
		return MethodsViewItems(this.method_list);
	}
});


Template.MethodsViewTableItems.rendered = function() {
	
};

Template.MethodsViewTableItems.events({
	"click td": function(e, t) {
		e.preventDefault();
		Router.go("methods.details", {methodId: this._id});
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
						Methods.remove({ _id: me._id });
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
		Router.go("methods.edit", {methodId: this._id});
		return false;
	},
	"click #share-button": function(e, t) {
		e.preventDefault();
		var me =this;
		var newValue = !me.private;
		Methods.update({ _id: this._id }, { "$set": {"private":newValue}});				
		return false;
	}
});

Template.MethodsViewTableItems.helpers({
	"isOwner": function() {
		return (this.ownerId === Meteor.userId());
	}
});
