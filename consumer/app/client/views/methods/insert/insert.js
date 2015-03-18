//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


var pageSession = new ReactiveDict();

Template.MethodsInsert.rendered = function() {
	
};

Template.MethodsInsert.events({
	
});

Template.MethodsInsert.helpers({
	
});

Template.MethodsInsertInsertForm.rendered = function() {
	

	pageSession.set("methodsInsertInsertFormInfoMessage", "");
	pageSession.set("methodsInsertInsertFormErrorMessage", "");

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

Template.MethodsInsertInsertForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("methodsInsertInsertFormInfoMessage", "");
		pageSession.set("methodsInsertInsertFormErrorMessage", "");
		
		var self = this;

		function submitAction(msg) {
			if(!t.find("#form-cancel-button")) {
				var message = msg || "Saved.";
				pageSession.set("methodsInsertInsertFormInfoMessage", message);
			}

			Router.go("methods.details", {methodId: newId});
		}

		function errorAction(msg) {
			var message = msg || "Error.";
			pageSession.set("methodsInsertInsertFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				newId = Methods.insert(values, function(e) { if(e) errorAction(e.message); else submitAction(); });
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		Router.go("methods", {});
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

Template.MethodsInsertInsertForm.helpers({
	"infoMessage": function() {
		return pageSession.get("methodsInsertInsertFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("methodsInsertInsertFormErrorMessage");
	}
	
});
