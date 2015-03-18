//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


Meteor.publish("methods", function() {
	return Methods.find({$or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {});
});

Meteor.publish("method_list", function() {
	return Methods.find({$or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {transform:function(doc) { var device = Devices.findOne({_id: doc.deviceId }); if(device) doc.deviceName = device.name; return doc; },sort:{methodNumber:-1}});
});

Meteor.publish("methods_empty", function() {
	return Methods.find({_id:null,$or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {});
});

Meteor.publish("method_details", function(methodId) {
	return Methods.find({_id:methodId,$or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {transform:function(doc) { var device = Devices.findOne({_id: doc.deviceId }); if(device) doc.deviceName = device.name; return doc; }});
});

Meteor.publish("method", function(methodId) {
	return Methods.find({_id:methodId,$or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {});
});

