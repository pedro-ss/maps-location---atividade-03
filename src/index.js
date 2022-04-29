
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// In this example, we center the map, and add a marker, using a LatLng object
// literal instead of a google.maps.LatLng object. LatLng object literals are
// a convenient way to add a LatLng coordinate and, in most cases, can be used
// in place of a google.maps.LatLng object.
let map;

function initMap() {
  const mapOptions = {
    zoom: 14,
    center: { lat: -8.116167, lng: -35.029982 },
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);


var locations = [
  ['IFPE', -8.11367, -35.03073],
  ['Atacadão', -8.11142,-35.03222],
  ['Condimínio Maurício de Nassau', -8.11375,-35.02742],
  ['Linda Fitness', -8.11388,-35.02595],
  ['Deggusta Burguer', -8.11539, -35.02306],
  ['Escola Ideal', -8.11336,-35.02433],
  ['Gruta', -8.11174,-35.03574]
];
 
for (i = 0; i < locations.length; i++) {  
  marker = new google.maps.Marker({
position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    title: locations[i][0],
    map: map
  });
}

 /*  const marker = new google.maps.Marker({
    // The below line is equivalent to writing:
    // position: new google.maps.LatLng(-34.397, 150.644)
    position: { lat: -34.397, lng: 150.644 },
    map: map,
  }); */
  
   
  // You can use a LatLng literal in place of a google.maps.LatLng object when
  // creating the Marker object. Once the Marker object is instantiated, its
  // position will be available as a google.maps.LatLng object. In this case,
  // we retrieve the marker's position using the
  // google.maps.LatLng.getPosition() method.
  const infowindow = new google.maps.InfoWindow({
    content: "<p>Marker Location:" + marker.getPosition() + "</p>",
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.open(map, marker);
  });
}

window.initMap = initMap;


