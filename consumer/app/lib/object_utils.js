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


/*
   Returns property value, where property name is given as path.

   Example:

       getPropertyValue("x.y.z", {x: { y: { z: 123}}});
*/

this.getPropertyValue = function(propertyName, obj) {
	return propertyName.split('.').reduce(function(o, i) { return o[i]; }, obj);	
};


/* 
   converts properties in format { "x.y": "z" } to { x: { y: "z" } }
*/

this.deepen = function(o) {
	var oo = {}, t, parts, part;
	for (var k in o) {
		t = oo;
		parts = k.split('.');
		var key = parts.pop();
		while (parts.length) {
			part = parts.shift();
			t = t[part] = t[part] || {};
		}
		t[key] = o[k]
	}
	return oo;
};

/*
	Function converts array of objects to csv, tsv or json string

	exportFields: list of object keys to export (array of strings)
	fileType: can be "json", "csv", "tsv" (string)
*/

this.convertArrayOfObjects = function(data, exportFields, fileType) {
	data = data || [];
	fileType = fileType || "csv";
	exportFields = exportFields || [];

	var str = "";
	// export to JSON
	if(fileType == "json") {

		var tmp = [];
		_.each(data, function(doc) {
			var obj = {};
			_.each(exportFields, function(field) {
				obj[field] = doc[field];
			});
			tmp.push(obj);
		});

		str = JSON.stringify(tmp);
	}

	// export to CSV or TSV
	if(fileType == "csv" || fileType == "tsv") {
		var columnSeparator = "";
		if(fileType == "csv") {
			columnSeparator = ",";
		}
		if(fileType == "tsv") {
			columnSeparator = "\t";
		}

		_.each(exportFields, function(field, i) {
			if(i > 0) {
				str = str + columnSeparator;
			}
			str = str + "\"" + field + "\"";
		});
		str = str + "\r\n";

		_.each(data, function(doc) {
			_.each(exportFields, function(field, i) {
				if(i > 0) {
					str = str + columnSeparator;
				}

				if(typeof(doc[field]) == "undefined")
					str = str + "\"\"";
				else
					str = str + "\"" + doc[field] + "\"";
			});
			str = str + "\r\n";
		});
	}

	return str;
};
