//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


Template.HomePrivate.rendered = function() {
	
};

Template.HomePrivate.events({
	
});

Template.HomePrivate.helpers({
	
});

Template.HomePrivateHomeJumbotron.rendered = function() {
	
};

Template.HomePrivateHomeJumbotron.events({
	"click #jumbotron-button": function(e, t) {
		e.preventDefault();
		Router.go("devices", {});
	}
	
});

Template.HomePrivateHomeJumbotron.helpers({
	
});
