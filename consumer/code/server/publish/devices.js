Meteor.publish("device_list", function() {
	return Devices.find({}, {});
});

Meteor.publish("devices_empty", function() {
	return Devices.find({_id:null}, {});
});

Meteor.publish("device_details", function(deviceId) {
	return Devices.find({_id:deviceId}, {});
});

Meteor.publish("device", function(deviceId) {
	return Devices.find({_id:deviceId}, {});
});

Meteor.publish("devices", function() {
	return Devices.find({}, {});
});

