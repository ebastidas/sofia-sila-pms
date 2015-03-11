Meteor.publish("device_list", function() {
	return Devices.find({$or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {}); //TODO: {transform:function(doc) { var user = Meteor.users.findOne({_id: doc.ownerId }); if(user) doc.ownerId = user.profile.name; return doc; },sort:{createdAt:1}});
});

Meteor.publish("devices_empty", function() {
	return Devices.find({_id:null, $or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {});
});

Meteor.publish("device_details", function(deviceId) {
	return Devices.find({_id:deviceId, $or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {});
});

Meteor.publish("device", function(deviceId) {
	return Devices.find({_id:deviceId, $or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {});
});

Meteor.publish("devices", function() {
	return Devices.find({$or: [{ private: {$ne: true} },{ ownerId: this.userId }]}, {});
});