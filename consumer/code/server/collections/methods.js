Methods.allow({
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

Methods.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;

	
	if(!doc.ownerId) doc.ownerId = userId;
if(!doc.status) doc.status =  'Not started. Run now [TODO]';
});

Methods.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Methods.before.remove(function(userId, doc) {
	//TODO: Remove the method_commands of this method, check possible running commands
});

Methods.after.insert(function(userId, doc) {
	
});

Methods.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Methods.after.remove(function(userId, doc) {

});
