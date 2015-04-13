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

pageSession.set("errorMessage", "");
pageSession.set("infoMessage", "");

Template.UserSettingsChangePass.rendered = function() {
	
	$("input[autofocus]").focus();
};

Template.UserSettingsChangePass.created = function() {
	pageSession.set("errorMessage", "");	
	pageSession.set("infoMessage", "");	
};

Template.UserSettingsChangePass.events({
	'submit #change_pass_form' : function(e, t) {
		e.preventDefault();

		pageSession.set("errorMessage", "");
		pageSession.set("infoMessage", "");

		var submit_button = $(t.find(":submit"));

		var old_password = t.find('#old_password').value;
		var new_password = t.find('#new_password').value;
		var confirm_pass = t.find('#confirm_pass').value;

		if(old_password == "")
		{
			pageSession.set("errorMessage", "Please enter your old password.");
			t.find('#old_password').focus();
			return false;
		}
		if(new_password == "")
		{
			pageSession.set("errorMessage", "Please enter your new password.");
			t.find('#new_password').focus();
			return false;
		}
		if(confirm_pass == "")
		{
			pageSession.set("errorMessage", "Please confirm your new password.");
			t.find('#confirm_pass').focus();
			return false;
		}

		// check new password
		if(new_password != confirm_pass)
		{
			pageSession.set("errorMessage", "Your new password and confirm password doesn't match.");
			t.find('#new_password').focus();
			return false;
		}

		submit_button.button("loading");
		Accounts.changePassword(old_password, new_password, function(err) {
			submit_button.button("reset");
			if (err) {
				pageSession.set("errorMessage", err.message);
				return false;
			} else {
				pageSession.set("errorMessage", "");
				pageSession.set("infoMessage", "Your new password is set.");
				t.find('#old_password').value = "";
				t.find('#new_password').value = "";
				t.find('#confirm_pass').value = "";
				t.find('#old_password').focus();
			}
		});
		return false; 
	}
	
});

Template.UserSettingsChangePass.helpers({
	errorMessage: function() {
		return pageSession.get("errorMessage");
	},
	infoMessage: function() {
		return pageSession.get("infoMessage");
	}
	
});
