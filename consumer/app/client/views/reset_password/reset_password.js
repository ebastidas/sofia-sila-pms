//=========================================================================
// Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//
// This file is part of SOFIA.
//
// SOFIA is free software: you can redistribute it and/or modify it under 
// the terms of the GNU Lesser General Public License as published by the 
// Free Software Foundation, either version 3 of the License, or (at your 
// option) any later version.
//
// SOFIA is distributed in the hope that it will be useful, but WITHOUT 
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or 
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public 
// License for more details.
//
// You should have received a copy of the GNU Lesser General Public License 
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

Template.ResetPassword.rendered = function() {
	
};

Template.ResetPassword.events({
	// change password
	'submit #reset_password_form' : function(e, t) {
		e.preventDefault();

		var submit_button = $(t.find(":submit"));
		var new_password = t.find('#new_password').value;
		var new_password_confirm = t.find('#new_password_confirm').value;

		// check password
		var min_password_len = 6;
		if(!isValidPassword(new_password, min_password_len))
		{
			pageSession.set("errorMessage", "Your password must be at least " + min_password_len + " characters long.");
			t.find('#new_password').focus();
			return false;						
		}

		if(new_password != new_password_confirm)
		{
			pageSession.set("errorMessage", "Your password and confirm password doesn't match.");
			t.find('#new_password_confirm').focus();
			return false;
		}

		submit_button.button("loading");
		Accounts.resetPassword(this.params.resetPasswordToken, new_password, function(err) {
			submit_button.button("reset");
			if (err)
				pageSession.set("errorMessage", err.message);
			else
				pageSession.set("errorMessage", "");
		});

		return false; 
	}
	
});

Template.ResetPassword.helpers({
	errorMessage: function() {
		return pageSession.get("errorMessage");
	}
	
});
