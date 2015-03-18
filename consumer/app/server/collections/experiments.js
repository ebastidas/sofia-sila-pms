//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


Experiments.allow({
	insert: function (userId, doc) {
		return true;
	},

	update: function (userId, doc, fields, modifier) {
		return userId && doc.ownerId == userId;
	},

	remove: function (userId, doc) {
		return userId && doc.ownerId == userId;
	}
});

Experiments.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;

	
	if(!doc.ownerId) doc.ownerId = userId;
	if(!doc.status) doc.status =  '-';
});

Experiments.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Experiments.before.remove(function(userId, doc) {
	//TODO: Remove the experiment_commands of this experiment, check possible running commands
});

Experiments.after.insert(function(userId, doc) {
	
});

Experiments.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Experiments.after.remove(function(userId, doc) {

});
