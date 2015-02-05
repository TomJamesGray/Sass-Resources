document.getElementById("uploadBtn").addEventListener('change',function(){
	// Remove fakepath in chrome
	var path = this.value;
 	var filename = path.replace(/^.*\\/, "");
	document.getElementById("uploadFileOutput").value = filename;
}, false);

// Slide on pages
document.getElementById()