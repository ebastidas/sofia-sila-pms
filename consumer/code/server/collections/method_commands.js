MethodCommands.allow({
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

MethodCommands.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;

	
	if(!doc.ownerId) doc.ownerId = userId;
if(!doc.status) doc.status =  'Not started';
});

MethodCommands.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

MethodCommands.before.remove(function(userId, doc) {
	
});

MethodCommands.after.insert(function(userId, doc) {

var requestId = createRequestId(doc._id);

MethodCommands.update({ _id: doc._id }, { "$set": {"requestId":requestId}});
	
});

MethodCommands.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

MethodCommands.after.remove(function(userId, doc) {
	
});
