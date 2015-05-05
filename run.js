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


//////////////////////////////////////////////////////////////////
//environmental variables:
//SOFIA_IP (default = 127.0.0.1)  //Meteor app
//SOFIA_PORT (default = 3000)   // Meteor app
//MONGO_IP (default = 127.0.0.1)  //Meteor mongo
//MONGO_PORT (default = 3001)   //Meteor mongo
//SOFIA_EVENT_RECEIVER_PORT (default = 3002)  //Nodejs app
//////////////////////////////////////////////////////////////////

console.log("...Starting SOFIA...");


var fs = require('fs');
var sys = require('sys')
var exec = require('child_process').exec;
var spawn = require('child_process').spawnSync;

var child;
var command;
var args;



//////////////////////////////////////////////////////////////////
//check environmental variables or load default values
var sofiaIP = process.env.SOFIA_IP;
if(!sofiaIP)
{
  sofiaIP = '127.0.0.1';
}

var sofiaPort = process.env.SOFIA_PORT;
if(!sofiaPort)
{
  sofiaPort = '3000'; //by default meteor app starts in port 3000
}

var mongoIP = process.env.MONGO_IP;
if(!mongoIP)
{
  mongoIP = '127.0.0.1';
}

var mongoPort = process.env.MONGO_PORT;
if(!mongoPort)
{
  var mongoPort = (parseInt(sofiaPort)+1).toString(); // mongodb will start in port 3001 (if meteor start in 3000) or METEOR_PORT+1 
}

var sofiaEventReceiverPort = process.env.SOFIA_EVENT_RECEIVER_PORT;
if(!sofiaEventReceiverPort)
{
    sofiaEventReceiverPort = (parseInt(sofiaPort)+2).toString(); //is SOFIA port is noby default starts in port 3002 or METEOR_PORT+2
}
//////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
//edit setting.json to set the IP of the running instance of SOFIA
var meteorSettingsFilename = __dirname + '/consumer/app/settings.json';
var file_content = fs.readFileSync(meteorSettingsFilename);
var content = JSON.parse(file_content);
content.public.sofia_IP = sofiaIP;
content.public.sofia_port = sofiaPort;
content.public.mongo_IP = mongoIP;
content.public.mongo_port = mongoPort;
content.public.sofia_event_receiver_port = sofiaEventReceiverPort;
fs.writeFileSync(meteorSettingsFilename, JSON.stringify(content, null, '\t'));
//////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////
//edit Event Receiver wsdl file
var wsdlFilename = __dirname + '/consumer/event-receiver/SiLA_example_EventReceiver.xml';
var file_content = fs.readFileSync(wsdlFilename,'utf8');
var reg = /soap:address location=[\s\S]*sila-event-receiver/;
var newAddress = 'soap:address location="http://' + sofiaIP + ':' + sofiaEventReceiverPort + '/sila-event-receiver';
var newWSDL = file_content.replace(reg, newAddress);
fs.writeFileSync(wsdlFilename, newWSDL,'utf8');
//////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
//install packages in Event Receiver app
  command = "npm";
  child = spawn(command, [ 'install', '--prefix', __dirname + '/consumer/event-receiver', '-save']);
  
  if(child.status!==0)
  {
    console.log("SOFIA failed to install node modules. Check if npm is installed.");
    process.exit();
  }


//run event-receiver
 command = "nodejs " + __dirname + "/consumer/event-receiver/app.js";
 child = exec(command, function (error, stdout, stderr) {
  //sys.print('stdout: ' + stdout);
  //sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log("SOFIA failed to start the SiLA Event Receiver. Check if port " + sofiaEventReceiverPort + " is free.");
    process.exit();
  }
  });
//////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////
//run meteor app
command = "cd " + __dirname + "/consumer/app; meteor --settings settings.json --port " + sofiaPort;
child = exec(command, function (error, stdout, stderr) {
  //sys.print('stdout: ' + stdout);
  //sys.print('stderr: ' + stderr);
  if (error !== null) {
    console.log("SOFIA failed to start at http://"+sofiaIP+":"+ sofiaPort+ ". Check if ports " + sofiaPort + " and " + mongoPort + " are available.");
    process.exit();
  }
});
//////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////
console.log("SOFIA running at http://"+sofiaIP+":"+ sofiaPort);
//////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
//////in browser debugger in http://0.0.0.0:50500
//var nomo = require('node-monkey').start({host:'0.0.0.0', port: 8081});
//////////////////////////////////////////////////////////////////
