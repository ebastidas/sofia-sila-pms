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
	Download local resource without server
*/

this.downloadLocalResource = function(data, filename, mimeType) {
	filename = filename || "download";
	mimeType = mimeType || "application/octet-stream";

	var bb = new Blob([data], { type: mimeType });
	var link = document.createElement("a");
	link.download = filename;
	link.href= window.URL.createObjectURL(bb);
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
//	window.location.href = "data:" + mimeType + ";charset=UTF-8," + encodeURIComponent(data);
};
