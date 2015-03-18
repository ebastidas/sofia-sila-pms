//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


this.ExperimentsDetailsInsertController = RouteController.extend({
	template: "ExperimentsDetails",

	yieldTemplates: {
		'ExperimentsDetailsInsert': { to: 'ExperimentsDetailsSubcontent'}
		
	},

	onBeforeAction: function() {
		/*BEFORE_FUNCTION*/
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("ExperimentsDetails"); this.render("loading", { to: "ExperimentsDetailsSubcontent" });}
		/*ACTION_FUNCTION*/
	},

	isReady: function() {
		

		var subs = [
			Meteor.subscribe("devices"),
			Meteor.subscribe("experiment_details", this.params.experimentId),
			Meteor.subscribe("common_command_set"),
			Meteor.subscribe("experiment_commands_empty")
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	},

	data: function() {
		
		var experiment = Experiments.findOne({_id:this.params.experimentId},{}); 
		var device = Devices.findOne({_id: experiment.deviceId});  
		var qry = '{"' + device.silaDeviceClassId + '": { "$in": [ "M", "R", "O" ] } }';
		var qryJSON = JSON.parse(qry);

		return {
			params: this.params || {},
			devices: Devices.find({}, {}),
			experiment_details: Experiments.findOne({_id:this.params.experimentId}, {transform:function(doc) { var device = Devices.findOne({_id: doc.deviceId }); if(device) doc.deviceName = device.name; return doc; }}),
			common_command_set: CommonCommandSet.find(qryJSON, {sort: {createdAt:1}}),
			experiment_commands_empty: ExperimentCommands.findOne({_id:null}, {})
		};
		/*DATA_FUNCTION*/
	},

	onAfterAction: function() {
	}
});
