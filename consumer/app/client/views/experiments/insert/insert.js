//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


var pageSession = new ReactiveDict();

Template.ExperimentsInsert.rendered = function() {
	
};

Template.ExperimentsInsert.events({
	
});

Template.ExperimentsInsert.helpers({
	
});

Template.ExperimentsInsertInsertForm.rendered = function() {
	

	pageSession.set("experimentsInsertInsertFormInfoMessage", "");
	pageSession.set("experimentsInsertInsertFormErrorMessage", "");

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

Template.ExperimentsInsertInsertForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("experimentsInsertInsertFormInfoMessage", "");
		pageSession.set("experimentsInsertInsertFormErrorMessage", "");
		
		var self = this;

		function submitAction(msg) {
			if(!t.find("#form-cancel-button")) {
				var message = msg || "Saved.";
				pageSession.set("experimentsInsertInsertFormInfoMessage", message);
			}

			Router.go("experiments.details", {experimentId: newId});
		}

		function errorAction(msg) {
			var message = msg || "Error.";
			pageSession.set("experimentsInsertInsertFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				newId = Experiments.insert(values, function(e) { if(e) errorAction(e.message); else submitAction(); });
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		Router.go("experiments", {});
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

Template.ExperimentsInsertInsertForm.helpers({
	"infoMessage": function() {
		return pageSession.get("experimentsInsertInsertFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("experimentsInsertInsertFormErrorMessage");
	}
	
});
