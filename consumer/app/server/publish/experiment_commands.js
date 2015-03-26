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

//TODO: check for ownerId for every command if the experiment is shared or private

Meteor.publish("experiment_commands", function(experimentId) {
	//return ExperimentCommands.find({experimentId:experimentId,ownerId:this.userId}, {transform:function(doc) { var command = CommonCommandSet.findOne({_id: doc.commandId }); if(command) doc.commandName = command.name; return doc; },sort:{createdAt:1}});
	return ExperimentCommands.find({experimentId:experimentId}, {transform:function(doc) { var command = CommonCommandSet.findOne({_id: doc.commandId }); if(command) doc.commandName = command.name; return doc; },sort:{createdAt:1}});
});

Meteor.publish("experiment_commands_empty", function() {
	//return ExperimentCommands.find({_id:null,ownerId:this.userId}, {});
	return ExperimentCommands.find({_id:null}, {});
});

Meteor.publish("experiment_command", function(commandId) {
	//return ExperimentCommands.find({_id:commandId,ownerId:this.userId}, {});
	return ExperimentCommands.find({_id:commandId}, {});
});

