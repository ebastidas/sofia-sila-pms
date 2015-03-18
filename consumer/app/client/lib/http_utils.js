//Copyright (c) 2015 wega Informatik AG | Erick Bastidas
//================================
//Company: wega Informatik AG
//Website: http://www.wega-it.com
//Author: Erick Bastidas
//Email: ebastidas3@gmail.com
//================================


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
