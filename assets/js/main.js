// Google Map

function initMap() {
  // Map options
  var options = {
    zoom: 3,
    center: {
      lat: -2.281090,
      lng: -24.968285
    }
  };

  const map = new google.maps.Map(document.getElementById("map"), options);
