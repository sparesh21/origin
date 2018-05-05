jQuery(document).ready(function($) {
    //Banglore
    var var_mapoptions = {
        center: var_location,
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    //

    var var_map = new google.maps.Map(document.getElementById("googleMap"), var_mapoptions);

    /*==========Wadala============*/

    var var_location = new google.maps.LatLng(19.015128, 72.858064);
    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Wadala",
        icon: "images/marker.png"
    });
    /*var content = $('<div class="contactus-content">\
    <h3>⁠⁠⁠East Africa</h3>\
    <div>\
        <h4>Kenya</h4>\
        <p>\
            Transnational Plaza\
        </p>\
        <p>\
            P.O Box 44019-00100 NBI GPO 9th Floor\
        </p>\
    </div>\
    </div>');*/
    var_map.panTo(var_marker.position);
    //Create an infoWindow
    var infowindow = new google.maps.InfoWindow();

    //set the content of infoWindow
    //infowindow.setContent(contentString[0]);
    //add click listner to marker which will open infoWindow
    google.maps.event.addListener(var_marker, 'click', (function(var_marker, content, infowindow) {
        return function() {
            infowindow.setContent(content[0]);
            infowindow.open(var_map, var_marker);
        };
    })(var_marker, content, infowindow));

    /*==========Wadala End============*/

    /*==========Vasai============*/

    var var_location = new google.maps.LatLng(19.391928, 72.839732);
    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Vasai",
        icon: "images/marker.png"
    });
    /*var content = $('<div class="contactus-content">\
    <h3>India</h3>\
    <div>\
        <h4>New Delhi </h4>\
        <p>\
            Shop No.8, Sector 1 Market R.K.Puram   \
        </p>\
        <p>\
           New Delhi – 110022\
        </p>\
    </div>\
    </div>');*/
    var_map.panTo(var_marker.position);
    //Create an infoWindow
    var infowindow = new google.maps.InfoWindow();

    //set the content of infoWindow
    //infowindow.setContent(contentString[0]);
    //add click listner to marker which will open infoWindow
    google.maps.event.addListener(var_marker, 'click', (function(var_marker, content, infowindow) {
        return function() {
            infowindow.setContent(content[0]);
            infowindow.open(var_map, var_marker);
        };
    })(var_marker, content, infowindow));

    /*==========Vasai  End============*/

    /*==========Andheri Mumbai ============*/

    var var_location = new google.maps.LatLng(19.113645, 72.869734);
    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Andheri",
        icon: "images/marker.png"
    });
    /*var content = $('<div class="contactus-content">\
    <h3>India</h3>\
    <div>\
        <h4>Mumbai </h4>\
        <p>\
            09, Ground Floor, Laxmi Sadan Building   \
        </p>\
        <p>\
           near Expert international School, Y.K Nagar NX, Virar (W) - 401303\
        </p>\
    </div>\
    </div>');*/
    var_map.panTo(var_marker.position);
    //Create an infoWindow
    var infowindow = new google.maps.InfoWindow();

    //set the content of infoWindow
    //infowindow.setContent(contentString[0]);
    //add click listner to marker which will open infoWindow
    google.maps.event.addListener(var_marker, 'click', (function(var_marker, content, infowindow) {
        return function() {
            infowindow.setContent(content[0]);
            infowindow.open(var_map, var_marker);
        };
    })(var_marker, content, infowindow));

    /*==========Andheri End============*/

    /*==========Malad ============*/

    var var_location = new google.maps.LatLng(19.180237, 72.855415);
    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Malad",
        icon: "images/marker.png"
    });
    /*var content = $('<div class="contactus-content">\
    <h3>USA</h3>\
    <div>\
        <h4>New Jersey </h4>\
        <p>\
           1015, Forest View drive avenue ,   \
        </p>\
        <p>\
           NJ - 07001 USA\
        </p>\
    </div>\
    </div>');*/
    var_map.panTo(var_marker.position);
    //Create an infoWindow
    var infowindow = new google.maps.InfoWindow();

    //set the content of infoWindow
    //infowindow.setContent(contentString[0]);
    //add click listner to marker which will open infoWindow
    google.maps.event.addListener(var_marker, 'click', (function(var_marker, content, infowindow) {
        return function() {
            infowindow.setContent(content[0]);
            infowindow.open(var_map, var_marker);
        };
    })(var_marker, content, infowindow));

    /*==========Malad End============*/

    /*==========Churchgate ============*/

    var var_location = new google.maps.LatLng(18.932245, 72.826438);
    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Churchgate",
        icon: "images/marker.png"
    });
    var content = $('');
    var_map.panTo(var_marker.position);
    //Create an infoWindow
    var infowindow = new google.maps.InfoWindow();

    //set the content of infoWindow
    //infowindow.setContent(contentString[0]);
    //add click listner to marker which will open infoWindow
    google.maps.event.addListener(var_marker, 'click', (function(var_marker, content, infowindow) {
        return function() {
            infowindow.setContent(content[0]);
            infowindow.open(var_map, var_marker);
        };
    })(var_marker, content, infowindow));

    /*==========Churchgate  End============*/


});