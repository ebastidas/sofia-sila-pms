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


Devices.allow({
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

Devices.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;

	
	if(!doc.ownerId) doc.ownerId = userId;
	if(!doc.status) doc.status =  'UNKNOWN';
	if(!doc.name) doc.name = 'UNKNOWN'; 
	if(!doc.silaDeviceClassId) doc.silaDeviceClassId = 'UNKNOWN'; 
	if(!doc.silaDeviceClassVersion) doc.silaDeviceClassVersion = 'UNKNOWN';

});

Devices.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Devices.before.remove(function(userId, doc) {
	//TODO: Check running (or non running) experiments. Alert this to the user before delete a device.
});

Devices.after.insert(function(userId, doc) {
	var url = doc.url;
	var currentStatus = '-';
	var command = "GetStatus";
	var args = {"requestId": "1"}; // TODO: SiLA issue

	Meteor.call('connectDeviceSoap', url, command, args, function (error,response) {
  		// identify the error
  		if (!error) {
			currentStatus = response.state + " (at: " + response.currentTime + ")";
		}
		else
		{
	    	// show a nice error message
	    	console.log("error soap");
		}
	});

	var command = "GetDeviceIdentification";
	var args = {"requestId": "1"}; // TODO: SiLA issue
	Meteor.call('connectDeviceSoap', url, command, args, function (error,response) {
  		// identify the error
  		if (!error) {
			//TODO: check if device is locked and can't get the information. This returns a error response from the device that the command GetDeviceIdentification can't execute because it's locked to another pms
			Devices.update({ _id: doc._id }, { "$set": {"status":currentStatus, 
				"name":  response.deviceDescription.DeviceManufacturer + " - " + response.deviceDescription.DeviceName + " (id: " + doc._id + ")",
				"silaInterfaceVersion" : response.deviceDescription.SiLAInterfaceVersion,
				"silaDeviceClassId": response.deviceDescription.SiLADeviceClass, 
				"silaDeviceClassVersion": response.deviceDescription.SiLADeviceClassVersion,
				"deviceManufacturer" : response.deviceDescription.DeviceManufacturer,
				"deviceName" : response.deviceDescription.DeviceName,
				"deviceSerialNumber" : response.deviceDescription.DeviceSerialNumber,
				"deviceFirmwareVersion" : response.deviceDescription.DeviceFirmwareVersion}		
			});
		}
		else
		{
	    	// show a nice error message
	    	console.log("error soap");
			Devices.update({ _id: doc._id }, { "$set": {"status":"Unable to Connect", 
				"name": "-", 
				"silaInterfaceVersion" : "-",
				"silaDeviceClassId": "-", 
				"silaDeviceClassVersion": "-",
				"deviceManufacturer" : "-",
				"deviceName" : "-",
				"deviceSerialNumber" : "-",
				"deviceFirmwareVersion" : "-"}
			});
		}
	});
});

Devices.after.update(function(userId, doc, fieldNames, modifier, options) {
	//TODO: Try to connect again after update ONLY the URL 
});

Devices.after.remove(function(userId, doc) {
	
});




