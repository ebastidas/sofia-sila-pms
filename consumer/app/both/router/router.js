//=========================================================================
// Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//
// This file is part of SOFIA.
//
// SOFIA is free software: you can redistribute it and/or modify it under 
// the terms of the GNU General Public License as published by the 
// Free Software Foundation, either version 3 of the License, or (at your 
// option) any later version.
//
// SOFIA is distributed in the hope that it will be useful, but WITHOUT 
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or 
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public 
// License for more details.
//
// You should have received a copy of the GNU General Public License 
// along with SOFIA. If not, see <http://www.gnu.org/licenses/>.
//
//======================================================
// Copyright details
//======================================================
//   Company: wega Informatik AG
//   Address: Aeschengraben 20, 4051 Basel, Switzerland
//   Website: http://www.wega-it.com
//   Author: Erick Bastidas
//   Email: ebastidas3@gmail.com
//=========================================================================


Router.configure({
	templateNameConverter: "upperCamelCase",
	routeControllerNameConverter: "upperCamelCase",
	layoutTemplate: "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading"
});

if(Meteor.isClient) {
	var publicRoutes = ["home_public", "login", "register", "forgot_password", "reset_password"];
	var privateRoutes = ["home_private", "devices", "devices.insert", "devices.details", "devices.edit", "experiments", "experiments.insert", "experiments.details", "experiments.details.commands", "experiments.details.insert", "experiments.details.edit", "experiments.edit", "user_settings", "user_settings.profile", "user_settings.change_pass", "logout"];
	//var zonelessRoutes = ["help"];

	var roleMap = [
		
	];

	this.firstGrantedRoute = function() {
		var grantedRoute = "";
		_.every(privateRoutes, function(route) {
			if(routeGranted(route)) {
				grantedRoute = route;
				return false;
			}
			return true;
		});

		if(grantedRoute == "") {
			if(routeGranted("home_private")) {
				return "home_private";				
			} else {
				return "home_public";
			}
		}

		return grantedRoute;
	}

	// this function returns true if user is in role allowed to access given route
	this.routeGranted = function(routeName) {
		if(!routeName) {
			// route without name - enable access (?)
			return true;
		}

		if(!roleMap || roleMap.length === 0) {
			// this app don't have role map - enable access
			return true;
		}

		var roleMapItem = _.find(roleMap, function(roleItem) { return roleItem.route == routeName; });
		if(!roleMapItem) {
			// page is not restricted
			return true;
		}

		if(!Meteor.user() || !Meteor.user().roles) {
			// user is not logged in
			return false;
		}

		// this page is restricted to some role(s), check if user is in one of allowedRoles
		var allowedRoles = roleMapItem.roles;
		var granted = _.intersection(allowedRoles, Meteor.user().roles);
		if(!granted || granted.length === 0) {
			return false;
		}

		return true;
	};
	
	Router.ensureLogged = function() {
		if(Meteor.userId() && (!Meteor.user() || !Meteor.user().roles)) {
			return;
		}

		if(!Meteor.userId()) {
			// user is not logged in - redirect to public home
			this.redirect("home_public");
		} else {
			// user is logged in - check role
			if(!routeGranted(this.route.getName())) {
				// user is not in allowedRoles - redirect to private home
				var redirectRoute = firstGrantedRoute();
				this.redirect(redirectRoute);
			} else {
				this.next();
			}
		}
	};

	Router.ensureNotLogged = function() {
		if(Meteor.userId() && (!Meteor.user() || !Meteor.user().roles)) {
			return;
		}

		if(Meteor.userId()) {
			var redirectRoute = firstGrantedRoute();
			this.redirect(redirectRoute);
		}
		else {
			this.next();
		}
	};

	Meteor.subscribe("current_user_data");

	Router.onBeforeAction(function() {
		// loading indicator here
		if(!this.ready()) {
			$("body").addClass("wait");
		} else {
			$("body").removeClass("wait");
			this.next();
		}
	});

	Router.onBeforeAction(Router.ensureNotLogged, {only: publicRoutes});
	Router.onBeforeAction(Router.ensureLogged, {only: privateRoutes});
}

Router.map(function () {
	
	this.route("home_public", {path: "/", controller: "HomePublicController"});
	this.route("login", {path: "/login", controller: "LoginController"});
	this.route("register", {path: "/register", controller: "RegisterController"});
	this.route("forgot_password", {path: "/forgot_password", controller: "ForgotPasswordController"});
	this.route("reset_password", {path: "/reset_password/:resetPasswordToken", controller: "ResetPasswordController"});
	this.route("home_private", {path: "/home_private", controller: "HomePrivateController"});
	this.route("devices", {path: "/devices", controller: "DevicesController"});
	this.route("devices.insert", {path: "/devices/insert", controller: "DevicesInsertController"});
	this.route("devices.details", {path: "/devices/details/:deviceId", controller: "DevicesDetailsController"});
	this.route("devices.edit", {path: "/devices/edit/:deviceId", controller: "DevicesEditController"});
	this.route("experiments", {path: "/experiments", controller: "ExperimentsController"});
	this.route("experiments.insert", {path: "/experiments/insert", controller: "ExperimentsInsertController"});
	this.route("experiments.details", {path: "/experiments/details/:experimentId", controller: "ExperimentsDetailsController"});
	this.route("experiments.details.commands", {path: "/experiments/details/:experimentId/commands", controller: "ExperimentsDetailsCommandsController"});
	this.route("experiments.details.insert", {path: "/experiments/details/:experimentId/insert", controller: "ExperimentsDetailsInsertController"});
	this.route("experiments.details.edit", {path: "/experiments/details/:experimentId/edit/:commandId", controller: "ExperimentsDetailsEditController"});
	this.route("experiments.edit", {path: "/experiments/edit/:experimentId", controller: "ExperimentsEditController"});
	this.route("user_settings", {path: "/user_settings", controller: "UserSettingsController"});
	this.route("user_settings.profile", {path: "/user_settings/profile", controller: "UserSettingsProfileController"});
	this.route("user_settings.change_pass", {path: "/user_settings/change_pass", controller: "UserSettingsChangePassController"});
	this.route("logout", {path: "/logout", controller: "LogoutController"});
	this.route("help", {path: "/help"});
	this.route("wega", {path: "/wega"});
/*ROUTER_MAP*/
});
