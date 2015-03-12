var pageSession = new ReactiveDict();

Template.MethodsDetailsInsert.rendered = function() {
	
};

Template.MethodsDetailsInsert.events({
	
});

Template.MethodsDetailsInsert.helpers({
	
});

Template.MethodsDetailsInsertInsertForm.rendered = function() {
	

	pageSession.set("methodsDetailsInsertInsertFormInfoMessage", "");
	pageSession.set("methodsDetailsInsertInsertFormErrorMessage", "");

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

Template.MethodsDetailsInsertInsertForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("methodsDetailsInsertInsertFormInfoMessage", "");
		pageSession.set("methodsDetailsInsertInsertFormErrorMessage", "");
		
		var self = this;

		function submitAction(msg) {
			if(!t.find("#form-cancel-button")) {
				var message = msg || "Saved.";
				pageSession.set("methodsDetailsInsertInsertFormInfoMessage", message);
			}

			Router.go("methods.details", {methodId: self.params.methodId});
		}

		function errorAction(msg) {
			var message = msg || "Error.";
			pageSession.set("methodsDetailsInsertInsertFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				values.methodId = self.params.methodId;

				newId = MethodCommands.insert(values, function(e) { if(e) errorAction(e.message); else submitAction(); });
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

Template.MethodsDetailsInsertInsertForm.helpers({
	"infoMessage": function() {
		return pageSession.get("methodsDetailsInsertInsertFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("methodsDetailsInsertInsertFormErrorMessage");
	}
	
});
