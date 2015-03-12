CommonCommandSet.allow({
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

CommonCommandSet.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;

	
	if(!doc.ownerId) doc.ownerId = userId;
});

CommonCommandSet.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

CommonCommandSet.before.remove(function(userId, doc) {
	
});

CommonCommandSet.after.insert(function(userId, doc) {
	
});

CommonCommandSet.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

CommonCommandSet.after.remove(function(userId, doc) {
	
});
