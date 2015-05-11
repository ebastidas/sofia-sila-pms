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

var fs = require('fs');
var http = require('http');
var soap = require('soap');
var MongoClient = require('mongodb').MongoClient
, assert = require('assert');



var meteorSettingsFilename = __dirname + '/../app/settings.json';
var file_content = fs.readFileSync(meteorSettingsFilename);
var content = JSON.parse(file_content);
var sofiaIP = content.public.sofia_IP;
var mongoIP = content.public.mongo_IP;
var mongoPort = content.public.mongo_port;
var sofiaEventReceiverPort = content.public.sofia_event_receiver_port;


var url = 'mongodb://'+mongoIP+':'+mongoPort+'/meteor';
var fileName= __dirname + '/SiLA_example_EventReceiver.xml';
var path = '/sofia'; // path to web service



var updateStatus = function(db, args, callback) {
// Get the documents collection
var collection = db.collection('experiment_commands');
var newStatus = args.returnValue.returnCode; 
var newStatusMessage = args.returnValue.message;
collection.update({ "requestId" : args.requestId.toString() }
	, { $set: { "status" : newStatus, "statusMessage": newStatusMessage } }, function(err, result) {
		assert.equal(err, null);
//assert.equal(1, result.result.n);
//console.log("Updated the command " + args.requestId.toString());
callback(result);
});  
}

var myService = {
EventReceiver: { //Service name
EventReceiverSoap: { // Port name
ResponseEvent: function(args) {// Operation name
//var currentdate = new Date(); console.log("===Log Time - " + (currentdate.getHours()<10?'0':'') + currentdate.getHours() + ":" + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes() + ":" + (currentdate.getSeconds()<10?'0':'') + currentdate.getSeconds() + "===");
//console.log(args);

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	updateStatus(db, args, function() {
		db.close();
	});
});
var result = {
	ResponseEventResult: { returnCode: 1, message: 'default message... TODO', duration: 'PT1S', deviceClass: 0 }
};
return result;
},
DataEvent: function(args) {// Operation name
//var currentdate = new Date();  console.log("===Log Time - " + (currentdate.getHours()<10?'0':'') + currentdate.getHours() + ":" + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes() + ":" + (currentdate.getSeconds()<10?'0':'') + currentdate.getSeconds() + "===");
//console.log(args);
//TODO: update db
var result = {
	DataEventResult: { returnCode: 1, message: 'default message... TODO', duration: 'PT1S', deviceClass: 0 }
};
return result;
},
ErrorEvent: function(args) {// Operation name
//console.log(args);var currentdate = new Date(); console.log("===Log Time - " + (currentdate.getHours()<10?'0':'') + currentdate.getHours() + ":" + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes() + ":" + (currentdate.getSeconds()<10?'0':'') + currentdate.getSeconds() + "===");
var result = {
	ErrorEventResult: { returnCode: 1, message: 'default message... TODO', duration: 'PT1S', deviceClass: 0 }
};
return result;
},
StatusEvent: function(args) {// Operation name
//var currentdate = new Date(); console.log("===Log Time - " + (currentdate.getHours()<10?'0':'') + currentdate.getHours() + ":" + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes() + ":" + (currentdate.getSeconds()<10?'0':'') + currentdate.getSeconds() + "===");
//console.log(args);
var result = {
	StatusEventResult: { returnCode: 1, message: 'default message... TODO', duration: 'PT1S', deviceClass: 0 }
};
return result;
}          
}
}
}

var xml = require('fs').readFileSync(fileName, 'utf8');
var server = http.createServer(function(request,response) {
	response.end("404: Not Found: "+request.url);
});

server.listen(sofiaEventReceiverPort, sofiaIP);
soap.listen(server, path, myService, xml);

console.log('SOFIA SiLA Event Reciever listening in: http://' + sofiaIP + ":" + sofiaEventReceiverPort + path + '?wsdl');
