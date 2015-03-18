//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


this.MethodsDetailsInsertController = RouteController.extend({
	template: "MethodsDetails",

	yieldTemplates: {
		'MethodsDetailsInsert': { to: 'MethodsDetailsSubcontent'}
		
	},

	onBeforeAction: function() {
		/*BEFORE_FUNCTION*/
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("MethodsDetails"); this.render("loading", { to: "MethodsDetailsSubcontent" });}
		/*ACTION_FUNCTION*/
	},

	isReady: function() {
		

		var subs = [
			Meteor.subscribe("devices"),
			Meteor.subscribe("method_details", this.params.methodId),
			Meteor.subscribe("common_command_set"),
			Meteor.subscribe("method_commands_empty")
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	},

	data: function() {
		
		var method = Methods.findOne({_id:this.params.methodId},{}); 
		var device = Devices.findOne({_id: method.deviceId});  
		var qry = '{"' + device.silaDeviceClassId + '": { "$in": [ "M", "R", "O" ] } }';
		var qryJSON = JSON.parse(qry);

		return {
			params: this.params || {},
			devices: Devices.find({}, {}),
			method_details: Methods.findOne({_id:this.params.methodId}, {transform:function(doc) { var device = Devices.findOne({_id: doc.deviceId }); if(device) doc.deviceName = device.name; return doc; }}),
			common_command_set: CommonCommandSet.find(qryJSON, {sort: {createdAt:1}}),
			method_commands_empty: MethodCommands.findOne({_id:null}, {})
		};
		/*DATA_FUNCTION*/
	},

	onAfterAction: function() {
	}
});
