var pageSession = new ReactiveDict();

Template.MethodsDetailsEdit.rendered = function() {
	
};

Template.MethodsDetailsEdit.events({
	
});

Template.MethodsDetailsEdit.helpers({
	
});

Template.MethodsDetailsEditEditForm.rendered = function() {
	

	pageSession.set("methodsDetailsEditEditFormInfoMessage", "");
	pageSession.set("methodsDetailsEditEditFormErrorMessage", "");

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

Template.MethodsDetailsEditEditForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("methodsDetailsEditEditFormInfoMessage", "");
		pageSession.set("methodsDetailsEditEditFormErrorMessage", "");
		
		var self = this;

		function submitAction(msg) {
			if(!t.find("#form-cancel-button")) {
				var message = msg || "Saved.";
				pageSession.set("methodsDetailsEditEditFormInfoMessage", message);
			}

			Router.go("methods.details", {methodId: self.params.methodId});
		}

		function errorAction(msg) {
			var message = msg || "Error.";
			pageSession.set("methodsDetailsEditEditFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				MethodCommands.update({ _id: t.data.method_command._id }, { $set: values }, function(e) { if(e) errorAction(e.message); else submitAction(); });
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		Router.go("methods.details", {methodId: this.params.methodId});
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

Template.MethodsDetailsEditEditForm.helpers({
	"infoMessage": function() {
		return pageSession.get("methodsDetailsEditEditFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("methodsDetailsEditEditFormErrorMessage");
	}
	
});
