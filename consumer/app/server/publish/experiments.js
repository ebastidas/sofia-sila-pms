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


Meteor.publish("experiments", function() {
	return Experiments.find({$or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {});
});

Meteor.publish("experiment_list", function() {
	return Experiments.find({$or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {transform:function(doc) { var device = Devices.findOne({_id: doc.deviceId }); if(device) doc.deviceName = device.name; return doc; },sort:{experimentNumber:-1}});
});

Meteor.publish("experiments_empty", function() {
	return Experiments.find({_id:null,$or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {});
});

Meteor.publish("experiment_details", function(experimentId) {
	return Experiments.find({_id:experimentId,$or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {transform:function(doc) { var device = Devices.findOne({_id: doc.deviceId }); if(device) doc.deviceName = device.name; return doc; }});
});

Meteor.publish("experiment", function(experimentId) {
	return Experiments.find({_id:experimentId,$or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {});
});

