Meteor.publish("methods", function() {
	return Methods.find({ownerId:this.userId}, {});
});

Meteor.publish("method_list", function() {
	return Methods.find({ownerId:this.userId}, {transform:function(doc) { var device = Devices.findOne({_id: doc.deviceId }); if(device) doc.deviceName = device.name; return doc; },sort:{methodNumber:-1}});
});

Meteor.publish("methods_empty", function() {
	return Methods.find({_id:null,ownerId:this.userId}, {});
});

Meteor.publish("method_details", function(methodId) {
	return Methods.find({_id:methodId,ownerId:this.userId}, {transform:function(doc) { var device = Devices.findOne({_id: doc.deviceId }); if(device) doc.deviceName = device.name; return doc; }});
});

Meteor.publish("method", function(methodId) {
	return Methods.find({_id:methodId,ownerId:this.userId}, {});
});

