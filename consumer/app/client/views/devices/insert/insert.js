//=========================================================================
// Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//
// This file is part of SOFIA.
//
// SOFIA is free software: you can redistribute it and/or modify it under 
// the terms of the GNU General Public License as published by the 
// Free Software Foundation, either version 3 of the License, or (at your 
// option) any later version.
//
// SOFIA is distributed in the hope that it will be useful, but WITHOUT 
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or 
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public 
// License for more details.
//
// You should have received a copy of the GNU General Public License 
// along with SOFIA. If not, see <http://www.gnu.org/licenses/>.
//
//======================================================
// Copyright details
//======================================================
//   Company: wega Informatik AG
//   Address: Aeschengraben 20, 4051 Basel, Switzerland
//   Website: http://www.wega-it.com
//   Author: Erick Bastidas
//   Email: ebastidas3@gmail.com
//=========================================================================


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
//		var newId;
//		var newUrl;


		function submitAction(msg) {
			if(!t.find("#form-cancel-button")) {
				var message = msg || "Saved.";
				pageSession.set("devicesInsertInsertFormInfoMessage", message);
			}

			Router.go("devices", {});
			
/*

//TODO:After a devices is added to db, go back to devices pages, and try to connect in the background

	//var url = 'http://localhost:8080/sila-provider-v0.0.2/services/silaLibPort?wsdl';
	var command = "GetDeviceIdentification";
	var args = {"requestId": "1"};

	Meteor.call('connectDeviceSoap', newUrl, command, args, function (error,response) {
  		// identify the error
  		if (!error) {
			Devices.update({ _id: newId }, { "$set": {"status":"Connected", 
			"name": response.deviceDescription.DeviceManufacturer + " - " + response.deviceDescription.DeviceName, 
			"silaDeviceClassId": response.deviceDescription.SiLADeviceClass, 
			"silaDeviceClassVersion": response.deviceDescription.SiLADeviceClassVersion}		
			//TODO: Add all the info from the wsdl file - serial number, etc.
			});
		  		
		}
		else
		{
	    		// show a nice error message
	    		console.log("error soap");
			Devices.update({ _id: newId }, { "$set": {"status":"Unable to Connect", 
				"name": "UNKNOWN", 
				"silaDeviceClassId": "UNKNOWN", 
				"silaDeviceClassVersion": "UNKNOWN"}
			});

		}
	});

////

*/

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
//				newUrl = values.url;				

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
