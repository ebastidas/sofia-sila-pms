//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


ExperimentCommands.allow({
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

ExperimentCommands.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;

	
	if(!doc.ownerId) doc.ownerId = userId;
	if(!doc.status) doc.status =  '-';
});

ExperimentCommands.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

ExperimentCommands.before.remove(function(userId, doc) {
	
});

ExperimentCommands.after.insert(function(userId, doc) {

var requestId = createRequestId(doc._id);

ExperimentCommands.update({ _id: doc._id }, { "$set": {"requestId":requestId}});
	
});

ExperimentCommands.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

ExperimentCommands.after.remove(function(userId, doc) {
	
});
