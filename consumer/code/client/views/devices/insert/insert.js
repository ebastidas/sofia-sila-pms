var pageSession = new ReactiveDict();

Template.DevicesInsert.rendered = function() {
	
};

Template.DevicesInsert.events({
	
});

Template.DevicesInsert.helpers({
	
});

Template.DevicesInsertInsertForm.rendered = function() {
	

	pageSession.set("devicesInsertInsertFormInfoMessage", "");
	pageSession.set("devicesInsertInsertFormErrorMessage", "");

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

Template.DevicesInsertInsertForm.events({
	"submit": function(e, t) {
		e.preventDefault();
		pageSession.set("devicesInsertInsertFormInfoMessage", "Connecting...");
		pageSession.set("devicesInsertInsertFormErrorMessage", "");
		
		var self = this;

		function submitAction(msg) {
			if(!t.find("#form-cancel-button")) {
				var message = msg || "Saved.";
				pageSession.set("devicesInsertInsertFormInfoMessage", message);
			}

			Router.go("devices", {});
		}

		function errorAction(msg) {
			var message = msg || "Error.";
			pageSession.set("devicesInsertInsertFormErrorMessage", message);
		}

		validateForm(
			$(e.target),
			function(fieldName, fieldValue) {

			},
			function(msg) {

			},
			function(values) {
				

				newId = Devices.insert(values, function(e) { if(e) errorAction(e.message); else submitAction(); });
			}
		);

		return false;
	},
	"click #form-cancel-button": function(e, t) {
		e.preventDefault();

		

		Router.go("devices", {});
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

Template.DevicesInsertInsertForm.helpers({
	"infoMessage": function() {
		return pageSession.get("devicesInsertInsertFormInfoMessage");
	},
	"errorMessage": function() {
		return pageSession.get("devicesInsertInsertFormErrorMessage");
	}
	
});
