//=========================================================================
// Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//
// This file is part of SOFIA.
//
// SOFIA is free software: you can redistribute it and/or modify it under 
// the terms of the GNU Lesser General Public License as published by the 
// Free Software Foundation, either version 3 of the License, or (at your 
// option) any later version.
//
// SOFIA is distributed in the hope that it will be useful, but WITHOUT 
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or 
// FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public 
// License for more details.
//
// You should have received a copy of the GNU Lesser General Public License 
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


this.escapeRegEx = function (string) {
	return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

this.replaceSubstrings = function(string, find, replace) {
	return string.replace(new RegExp(escapeRegEx(find), 'g'), replace);
};

this.joinStrings = function(stringArray, join) {
	var sep = join || ", ";
	var res = "";
	_.each(stringArray, function(str) {
		if(str) {
			if(res)
				res = res + sep;
			res = res + str;
		}		
	});
	return res;
};

this.createRequestId = function(string){
	var hash = 0, strlen = string.length, i, c;
	if ( strlen === 0 ) {
		return hash;
	}
	for ( i = 0; i < strlen; i++ ) {
		c = string.charCodeAt(i);
		hash = ((hash << 5) - hash) + c;
		hash = hash & hash; // Convert to 32bit integer
	}
	if(hash<0)
	    hash *= -1; //return only positives integers
	return hash.toString();
};

this.getparametersAsJSON = function(string){
	var params, strlen = string.length;
	if ( strlen === 0 ) {
		return params;
	}

	//volume:12,shakeDuration:PT12S,p1:123 // initial
	//"volume:12,shakeDuration:PT12S,p1:123" //add " to the end and beginning
	//"volume":"12,shakeDuration":"PT12S,p1":"123" // replace all : into ":"
	//"volume":"12","shakeDuration":"PT12S","p1":"123" // replace all , into ","

	params = '"' + string + '"';
	params = replaceSubstrings(params,':','":"');
	params = replaceSubstrings(params,',','","');
	return params;
};
