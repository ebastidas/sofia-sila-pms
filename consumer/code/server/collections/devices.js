Devices.allow({
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

Devices.before.insert(function(userId, doc) {
	doc.createdAt = new Date();
	doc.createdBy = userId;

	
	if(!doc.ownerId) doc.ownerId = userId;
if(!doc.status) doc.status =  'unknown';
});

Devices.before.update(function(userId, doc, fieldNames, modifier, options) {
	modifier.$set = modifier.$set || {};
	modifier.$set.modifiedAt = new Date();
	modifier.$set.modifiedBy = userId;

	
});

Devices.before.remove(function(userId, doc) {
	
});

Devices.after.insert(function(userId, doc) {
	
});

Devices.after.update(function(userId, doc, fieldNames, modifier, options) {
	
});

Devices.after.remove(function(userId, doc) {
	
});
