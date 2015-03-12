this.MethodsDetailsController = RouteController.extend({
	template: "MethodsDetails",

	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},

	onBeforeAction: function() {
		/*BEFORE_FUNCTION*/
		this.next();
	},

	action: function() {
		this.redirect('methods.details.commands', this.params || {});
		/*ACTION_FUNCTION*/
	},

	isReady: function() {
		

		var subs = [
			Meteor.subscribe("devices"),
			Meteor.subscribe("method_details", this.params.methodId)
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
			method_details: Methods.findOne({_id:this.params.methodId}, {transform:function(doc) { var device = Devices.findOne({_id: doc.deviceId }); if(device) doc.deviceName = device.name; return doc; }})
		};
		/*DATA_FUNCTION*/
	},

	onAfterAction: function() {
	}
});