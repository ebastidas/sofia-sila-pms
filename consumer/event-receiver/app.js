//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


  //////browser debugger in http://0.0.0.0:50500
  //var nomo = require('node-monkey').start({host:'0.0.0.0', port: 8081});
  ///////////
  
  // Connection URL
  var url = 'mongodb://127.0.0.1:3001/meteor'; //DEPLOY: get relative IP

  var wsdlIP = '0.0.0.0'; // DEPLOY: change to fixed wsdlIP if necesary (192.168.137.11) and also in the wsdl (xml) file
  var fileName= 'SiLA_example_EventReceiver.xml';
  var port = 8082; // DEPLOY: check if port is free
  var path = '/pms'; // path to web service

  var http = require('http');
  var soap = require('soap');


  var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

  var updateStatus = function(db, args, callback) {
  // Get the documents collection
  var collection = db.collection('method_commands');
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

  server.listen(port, wsdlIP);
  soap.listen(server, path, myService, xml);

  console.log('SiLA event reciever listening in: http://' + wsdlIP + ":" + port);
