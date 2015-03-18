//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


var pageSession = new ReactiveDict();

Template.DevicesDetails.rendered = function() {
	
};

Template.DevicesDetails.events({
	
});

Template.DevicesDetails.helpers({
	
});

Template.DevicesDetailsDetailsForm.rendered = function() {
	

	pageSession.set("devicesDetailsDetailsFormInfoMessage", "");
	pageSession.set("devicesDetailsDetailsFormErrorMessage", "");

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

Template.DevicesDetailsDetailsForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("devicesDetailsDetailsFormInfoMessage", "");
		pageSession.set("devicesDetailsDetailsFormErrorMessage", "");
		
		var self = this;

		function submitAction(msg) {
			if(!t.find("#form-cancel-button")) {
				var message = msg || "Saved.";
				pageSession.set("devicesDetailsDetailsFormInfoMessage", message);
			}

			/*SUBMIT_REDIRECT*/
		}

		function errorAction(msg) {
			var message = msg || "Error.";
			pageSession.set("devicesDetailsDetailsFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		/*CANCEL_REDIRECT*/
	},
	"click #form-close-button": function(e, t) {
		e.preventDefault();

		Router.go("devices", {});
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		Router.go("devices", {});
	}

	
});

Template.DevicesDetailsDetailsForm.helpers({
	"infoMessage": function() {
		return pageSession.get("devicesDetailsDetailsFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("devicesDetailsDetailsFormErrorMessage");
	}
	
});
