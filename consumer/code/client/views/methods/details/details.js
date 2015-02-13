var pageSession = new ReactiveDict();

Template.MethodsDetails.rendered = function() {
	
};

Template.MethodsDetails.events({
	
});

Template.MethodsDetails.helpers({
	
});

Template.MethodsDetailsDetailsForm.rendered = function() {
	

	pageSession.set("methodsDetailsDetailsFormInfoMessage", "");
	pageSession.set("methodsDetailsDetailsFormErrorMessage", "");

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

Template.MethodsDetailsDetailsForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("methodsDetailsDetailsFormInfoMessage", "");
		pageSession.set("methodsDetailsDetailsFormErrorMessage", "");
		
		var self = this;

		function submitAction(msg) {
			if(!t.find("#form-cancel-button")) {
				var message = msg || "Saved.";
				pageSession.set("methodsDetailsDetailsFormInfoMessage", message);
			}

			/*SUBMIT_REDIRECT*/
		}

		function errorAction(msg) {
			var message = msg || "Error.";
			pageSession.set("methodsDetailsDetailsFormErrorMessage", message);
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

		/*CLOSE_REDIRECT*/
	},
	"click #form-back-button": function(e, t) {
		e.preventDefault();

		Router.go("methods", {});
	}

	
});

Template.MethodsDetailsDetailsForm.helpers({
	"infoMessage": function() {
		return pageSession.get("methodsDetailsDetailsFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("methodsDetailsDetailsFormErrorMessage");
	}
	
});
