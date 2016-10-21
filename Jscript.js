var x = document.getElementById("GeoLoc");
		
function getLocation() {
    //Check if Navigator is supported    
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition,showError); // if so return coords obj to showPosition
	}	
	else {	
		x.innerHTML ="Geolocation is not supported by this browser." + navigator.appName;
	}
}	

function showPosition(position){
	x.innerHTML ="Latitude: " + position.coords.latitude + "<br> Longitude: " + position.coords.longitude + "<br> ON " + navigator.appName;		
}	
//Error Handling on getting position
function showError(error) {
	switch(error.code) {
		case error.PERMISSION_DENIED:
	   		x.innerHTML = "Geolocation Denied by user." + "<br> ON " + navigator.appName;
	    	break;
	    case error.POSITION_UNAVAILABLE:
	    	x.innerHTML = "Location Information is unavailable." + "<br> ON " + navigator.appName;
	    	break;
	    case error.TIMEOUT:
	    	x.innerHTML = "The request timed out." + "<br> ON " + navigator.appName;
	    	break;
	    case error.UNKNOWN_ERROR:
	    	x.innerHTML = "Unknown error" + "<br> ON " + navigator.appName;
	    	break;
	}
}


