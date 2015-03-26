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


Experiments.allow({
	insert: function (userId, doc) {
		return true;
	},

	update: function (userId, doc, fields, modifier) {
		if (doc.private)
			return userId && doc.ownerId == userId;
		else
			return userId;//BUG: Security hole, Here we allow everyone to update the device details. you can check the id of a device clicking on the details of it, like: http://sofia.com/devices/details/6Mk3HdS9BmkotAFPy, and then go to:http://sofia.com/devices/edit/6Mk3HdS9BmkotAFPy, and edit it without permission
	},

	remove: function (userId, doc) {
		return userId && doc.ownerId == userId;
	}
});

Experiments.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;

	
	if(!doc.ownerId) doc.ownerId = userId;
	if(!doc.status) doc.status =  '-';
});

Experiments.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Experiments.before.remove(function(userId, doc) {
	//TODO: Remove the experiment_commands of this experiment, check possible running commands
});

Experiments.after.insert(function(userId, doc) {
	
});

Experiments.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Experiments.after.remove(function(userId, doc) {

});
