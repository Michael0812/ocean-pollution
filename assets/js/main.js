$(document).ready(function() {
  /**
     * This is the function that gets called by google maps to 
     * initilize google maps. This takes default the options and then creates the map
     */
  function initMap() {
    // Map options
    const options = {
      zoom: 3,
      center: {
        lat: -2.28109,
        lng: -24.968285
      }
    };
    const map = new google.maps.Map(document.getElementById('map'), options);
    //Data for the markers consisting of the a LatLng and a content
    const markers = [
      {
        coords: {
          lat: -12.72458381,
          lng: 75.0026
        },
        content:
          '<h4>Indian Ocean</h4><p>Eight million metric tonnes of single-use plastics clog up the world’s oceans each year, according to US environmental charity NRDC.</p>'
      },
      {
        coords: {
          lat: -2.28109,
          lng: -24.968285
        },
        content:
          '<h4>Atlantic Ocean</h4><p>The second-largest ocean on Earth. It is a tragic fact the Atlantic has large amounts of plastic contamination which is cluttering up the ocean and causing problems with sea life and marine birds.</p>'
      },
      {
        coords: {
          lat: 0.96239409,
          lng: -128.2115
        },
        content:
          '<h4>Pacific Ocean</h4><p>The largest ocean on Earth is filled with mysteries. It is estimated that 1.15 to 2.41 million tonnes of plastic are entering the ocean each year from rivers. More than half of this plastic is less dense than the water, meaning that it will not sink once it encounters the sea</p>'
      },
      {
        coords: {
          lat: 75.86488603,
          lng: 50.20258346
        },
        content:
          '<h4>Arctic Ocean</h4><p>Scientists have found an unprecedented number of microplastics frozen in Arctic sea ice, demonstrating the alarming extent to which they are pervading marine environments. Each litre of sea ice contained around 12,000 particles of plastic, which scientists are now concerned are being ingested by native animals.</p>'
      }
    ];
    // loop through markers
    for (let i = 0; i < markers.length; i++) {
      addMarker(markers[i]);
    }
    // Adds marker function
    function addMarker(props) {
      let marker = new google.maps.Marker({
        position: props.coords,
        map: map
      });
      if (props.content) {
        let infoWindow = new google.maps.InfoWindow({
          content: props.content
        });
        // this is the option that allows you to click on the marker and open a window with a content
        marker.addListener('click', function() {
          infoWindow.open(map, marker);
        });
        //this is the option that allows you to click anywhere on the map and close a window
        google.maps.event.addListener(map, 'click', function() {
          infoWindow.close();
        });
      }
    }
  }
  initMap();
});
