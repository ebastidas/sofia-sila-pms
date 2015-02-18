Devices.allow({
	insert: function (userId, doc) {
		return true;
	},

	update: function (userId, doc, fields, modifier) {
		return userId && doc.ownerId == userId;
	},

	remove: function (userId, doc) {
		return userId && doc.ownerId == userId;
	}
});

Devices.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;

	
	if(!doc.ownerId) doc.ownerId = userId;
if(!doc.status) doc.status =  'UNKNOWN';

});

Devices.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Devices.before.remove(function(userId, doc) {
	
});

Devices.after.insert(function(userId, doc) {

	var url = doc.url;
	var command = "GetDeviceIdentification";
	var args = {"requestId": "1"};

	Meteor.call('connectDeviceSoap', url, command, args, function (error,response) {
  		// identify the error
  		if (!error) {
			Devices.update({ _id: doc._id }, { "$set": {"status":"Connected", 
			"name": response.deviceDescription.DeviceManufacturer + " - " + response.deviceDescription.DeviceName, 
			"silaDeviceClassId": response.deviceDescription.SiLADeviceClass, 
			"silaDeviceClassVersion": response.deviceDescription.SiLADeviceClassVersion}		
			/*TODO: Add all the info from the wsdl file - serial number, etc.*/
			});
		  		
		}
		else
		{
	    		// show a nice error message
	    		console.log("error soap");
			Devices.update({ _id: doc._id }, { "$set": {"status":"Unable to Connect", 
				"name": "UNKNOWN", 
				"silaDeviceClassId": "UNKNOWN", 
				"silaDeviceClassVersion": "UNKNOWN"}
			});

		}
	});
			
});

Devices.after.update(function(userId, doc, fieldNames, modifier, options) {
	//TODO: Try to connect again after update the URL
});

Devices.after.remove(function(userId, doc) {
	
});




