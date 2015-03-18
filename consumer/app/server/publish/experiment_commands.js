//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


Meteor.publish("experiment_commands", function(experimentId) {
	return ExperimentCommands.find({experimentId:experimentId,ownerId:this.userId}, {transform:function(doc) { var command = CommonCommandSet.findOne({_id: doc.commandId }); if(command) doc.commandName = command.name; return doc; },sort:{createdAt:1}});
});

Meteor.publish("experiment_commands_empty", function() {
	return ExperimentCommands.find({_id:null,ownerId:this.userId}, {});
});

Meteor.publish("experiment_command", function(commandId) {
	return ExperimentCommands.find({_id:commandId,ownerId:this.userId}, {});
});

