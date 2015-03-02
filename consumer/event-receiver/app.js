var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var updateDocument = function(db, args, callback) {
  // Get the documents collection
  var collection = db.collection('method_commands');
  var newStatus = "(" + args.returnValue.returnCode + ") " + args.returnValue.message;
  collection.update({ "requestId" : args.requestId.toString() }
    , { $set: { "status" : newStatus } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the command " + reqId);
    callback(result);
  });  
}

// Connection URL
var url = 'mongodb://127.0.0.1:3001/meteor'; //TODO: get relative IP


//////browser debugger in http://0.0.0.0:50500
//var nomo = require('node-monkey').start({host:'0.0.0.0', port: 8081});
///////////

var http = require('http');
var soap = require('soap');

var fileName= 'SiLA_example_EventReceiver.xml';
var ip = '0.0.0.0'; // change to fixed ip if necesary (192.168.137.11) and also in the wsdl (xml) file
var port = 8082;
var path = '/pms'; // path to web service

var myService = {
      EventReceiver: { //Service name
          EventReceiverSoap: { // Port name
              ResponseEvent: function(args) {// Operation name
                var currentdate = new Date(); console.log("===Log Time - " + (currentdate.getHours()<10?'0':'') + currentdate.getHours() + ":" + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes() + ":" + (currentdate.getSeconds()<10?'0':'') + currentdate.getSeconds() + "===");
               //console.log(args);

		// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
    updateDocument(db, args, function() {
      db.close();
    });
});
                  return {
                      ResponseEventResult: { returnCode: 1, message: 'default message... TODO', duration: 'PT1S', deviceClass: 0 }
                  };
              },
		DataEvent: function(args) {// Operation name
		  var currentdate = new Date();  console.log("===Log Time - " + (currentdate.getHours()<10?'0':'') + currentdate.getHours() + ":" + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes() + ":" + (currentdate.getSeconds()<10?'0':'') + currentdate.getSeconds() + "===");
      console.log(args);
                  return {
                      DataEventResult: { returnCode: 1, message: 'default message... TODO', duration: 'PT1S', deviceClass: 0 }
                  };
              },
		ErrorEvent: function(args) {// Operation name
		  console.log(args);var currentdate = new Date(); console.log("===Log Time - " + (currentdate.getHours()<10?'0':'') + currentdate.getHours() + ":" + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes() + ":" + (currentdate.getSeconds()<10?'0':'') + currentdate.getSeconds() + "===");
                  return {
                      ErrorEventResult: { returnCode: 1, message: 'default message... TODO', duration: 'PT1S', deviceClass: 0 }
                  };
              },
		StatusEvent: function(args) {// Operation name
		  var currentdate = new Date(); console.log("===Log Time - " + (currentdate.getHours()<10?'0':'') + currentdate.getHours() + ":" + (currentdate.getMinutes()<10?'0':'') + currentdate.getMinutes() + ":" + (currentdate.getSeconds()<10?'0':'') + currentdate.getSeconds() + "===");
      console.log(args);
                  return {
                      StatusEventResult: { returnCode: 1, message: 'default message... TODO', duration: 'PT1S', deviceClass: 0 }
                  };
              }          
          }
      }
  }

var xml = require('fs').readFileSync(fileName, 'utf8');
var server = http.createServer(function(request,response) {
  	response.end("404: Not Found: "+request.url);
	soap.listen(this, path, myService, xml);
});

server.listen(port, ip);

console.log('SiLA event reciever listening in: http://' + ip + ":" + port);
