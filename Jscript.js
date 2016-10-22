function CMap() {
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(getPosition,showError);	
	}
	else
	{
		mapHolder.innerHTML = "Geolocation is not supported my this browser." + navigator.appName;
	}
}

function getPosition (position){
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	latlon = new google.maps.LatLng(lat, lon);
	mapholder = document.getElementById('mapHolder');
	var mapOptions = {center:latlon,zoom:16,};
	var map = new google.maps.Map(document.getElementById("mapHolder"),mapOptions);
	var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here.",animation: google.maps.Animation.BOUNCE}) 
}

function showError (error){
    switch(error.code) {
        case error.PERMISSION_DENIED:
            mapHolder.innerHTML = "Request for geolocation denied."
            break;
        case error.POSITION_UNAVAILABLE:
            mapHolder.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            mapHolder.innerHTML = "The request timed out."
            break;
        case error.UNKNOWN_ERROR:
            mapHolder.innerHTML = "An unknown error occurred."
            break;
    }
}