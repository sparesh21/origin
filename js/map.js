// ======Ready Function======
$(function() {
	// map
	function mapinit() {
		var mapCanvas = document.getElementById("map");
		var myCenter = new google.maps.LatLng(19.059132, 72.853886);
		var mapOptions = {
			center: myCenter,
			zoom: 18
		};
		var map = new google.maps.Map(mapCanvas, mapOptions);
		var marker = new google.maps.Marker({
			position: myCenter,
			title: "East Africa",
			icon: "images/marker.png"
		});
		marker.setMap(map);
	}

	mapinit();
});