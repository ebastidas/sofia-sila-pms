//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


var pageSession = new ReactiveDict();

Template.ExperimentsDetailsInsert.rendered = function() {
	
};

Template.ExperimentsDetailsInsert.events({
	
});

Template.ExperimentsDetailsInsert.helpers({
	
});

Template.ExperimentsDetailsInsertInsertForm.rendered = function() {
	

	pageSession.set("experimentsDetailsInsertInsertFormInfoMessage", "");
	pageSession.set("experimentsDetailsInsertInsertFormErrorMessage", "");

	$(".input-group.date").each(function() {
		var format = $(this).find("input[type='text']").attr("data-format");

		if(format) {
			format = format.toLowerCase();			
		}
		else {
			format = "mm/dd/yyyy";
		}

		$(this).datepicker({
			autoclose: true,
			todayHighlight: true,
			todayBtn: true,
			forceParse: false,
			keyboardNavigation: false,
			format: format
		});
	});

	$("input[autofocus]").focus();
};

Template.ExperimentsDetailsInsertInsertForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("experimentsDetailsInsertInsertFormInfoMessage", "");
		pageSession.set("experimentsDetailsInsertInsertFormErrorMessage", "");
		
		var self = this;

		function submitAction(msg) {
			if(!t.find("#form-cancel-button")) {
				var message = msg || "Saved.";
				pageSession.set("experimentsDetailsInsertInsertFormInfoMessage", message);
			}

			Router.go("experiments.details", {experimentId: self.params.experimentId});
		}

		function errorAction(msg) {
			var message = msg || "Error.";
			pageSession.set("experimentsDetailsInsertInsertFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				values.experimentId = self.params.experimentId;

				newId = ExperimentCommands.insert(values, function(e) { if(e) errorAction(e.message); else submitAction(); });
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		Router.go("experiments.details", {experimentId: this.params.experimentId});
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();

		/*CLOSE_REDIRECT*/
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		/*BACK_REDIRECT*/
	}

	
});

Template.ExperimentsDetailsInsertInsertForm.helpers({
	"infoMessage": function() {
		return pageSession.get("experimentsDetailsInsertInsertFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("experimentsDetailsInsertInsertFormErrorMessage");
	}
	
});
