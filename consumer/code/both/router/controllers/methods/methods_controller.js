this.MethodsController = RouteController.extend({
	template: "Methods",

	yieldTemplates: {
		/*YIELD_TEMPLATES*/
	},

	onBeforeAction: function() {
		/*BEFORE_FUNCTION*/
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("loading"); }
		/*ACTION_FUNCTION*/
	},

	isReady: function() {
		

		var subs = [
			Meteor.subscribe("devices"),
			Meteor.subscribe("method_list")
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
			method_list: Methods.find({}, {transform:function(doc) { var device = Devices.findOne({_id: doc.deviceId }); if(device) doc.deviceName = device.name; return doc; },sort:{methodNumber:-1}})
		};
		/*DATA_FUNCTION*/
	},

	onAfterAction: function() {
	}
});