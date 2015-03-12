var pageSession = new ReactiveDict();

Template.MethodsEdit.rendered = function() {
	
};

Template.MethodsEdit.events({
	
});

Template.MethodsEdit.helpers({
	
});

Template.MethodsEditEditForm.rendered = function() {
	

	pageSession.set("methodsEditEditFormInfoMessage", "");
	pageSession.set("methodsEditEditFormErrorMessage", "");

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

Template.MethodsEditEditForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("methodsEditEditFormInfoMessage", "");
		pageSession.set("methodsEditEditFormErrorMessage", "");
		
		var self = this;

		function submitAction(msg) {
			if(!t.find("#form-cancel-button")) {
				var message = msg || "Saved.";
				pageSession.set("methodsEditEditFormInfoMessage", message);
			}

			Router.go("methods", {});
		}

		function errorAction(msg) {
			var message = msg || "Error.";
			pageSession.set("methodsEditEditFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				Methods.update({ _id: t.data.method._id }, { $set: values }, function(e) { if(e) errorAction(e.message); else submitAction(); });
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

Template.MethodsEditEditForm.helpers({
	"infoMessage": function() {
		return pageSession.get("methodsEditEditFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("methodsEditEditFormErrorMessage");
	}
	
});
