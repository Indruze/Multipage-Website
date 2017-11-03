function initMap() {
    var uluru = {lat: 54.723505, lng: 25.3378091};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

function myFunction() {
    var x = document.getElementById("navigation");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}


/**
 * Created by Indrė on 2017-11-01.
 */
