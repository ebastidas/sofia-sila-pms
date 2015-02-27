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
	return hash;
};
