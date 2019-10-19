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

  var markers = [
    { coords: {
        lat: -12.72458381,
        lng: 75.0026 },
      content: "<h4>Indian Ocean</h4><p1>Eight million metric tonnes of single-use plastics clog up the world’s oceans each year, according to US environmental charity NRDC.</p1>"},

    { coords: {
        lat: -2.281090,
        lng: -24.968285 },
      content: "<h4>Atlantic Ocean</h4><p1>The second-largest ocean on Earth. It is a tragic fact the Atlantic has large amounts of plastic contamination which is cluttering up the ocean and causing problems with sea life and marine birds.</p1>" },
    { coords: {
        lat: 0.96239409,
        lng: -128.2115 },
      content: "<h4>Pacific Ocean</h4><p1>The largest ocean on Earth is filled with mysteries. It is estimated that 1.15 to 2.41 million tonnes of plastic are entering the ocean each year from rivers. More than half of this plastic is less dense than the water, meaning that it will not sink once it encounters the sea</p1>" },
    {coords: {
      lat: 75.86488603,
      lng: 50.20258346},
      content: "<h4>Arctic Ocean</h4><p1>Scientists have found an unprecedented number of microplastics frozen in Arctic sea ice, demonstrating the alarming extent to which they are pervading marine environments. Each litre of sea ice contained around 12,000 particles of plastic, which scientists are now concerned are being ingested by native animals.</p1>"},
  ];

    for (var i = 0; i < markers.length; i++) {

      addMarker(markers[i]);
    }

    function addMarker(props) {
      var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
      });

      if (props.content) {
        var infoWindow = new google.maps.InfoWindow({
          content: props.content
        });

        marker.addListener("click", function() {
          infoWindow.open(map, marker);
        });

      }
    }
  }




  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
