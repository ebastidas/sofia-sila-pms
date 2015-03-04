Meteor.publish("common_command_set", function() {
	return CommonCommandSet.find({}, {sort: {name:1}});
});

