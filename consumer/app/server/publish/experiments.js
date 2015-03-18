//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


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

