this.MethodsDetailsEditController = RouteController.extend({
	template: "MethodsDetails",

	yieldTemplates: {
		'MethodsDetailsEdit': { to: 'MethodsDetailsSubcontent'}
		
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
			Meteor.subscribe("method_command", this.params.commandId)
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	},

	data: function() {
		

		return {
			params: this.params || {},
			devices: Devices.find({}, {}),
			method_details: Methods.findOne({_id:this.params.methodId}, {transform:function(doc) { var device = Devices.findOne({_id: doc.deviceId }); if(device) doc.deviceName = device.name; return doc; }}),
			common_command_set: CommonCommandSet.find({}, {}),
			method_command: MethodCommands.findOne({_id:this.params.commandId}, {})
		};
		/*DATA_FUNCTION*/
	},

	onAfterAction: function() {
	}
});