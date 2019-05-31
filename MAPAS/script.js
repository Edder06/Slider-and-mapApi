// google.maps.event.addDomListener(window, 'onload', initMap);

function initMap() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( localizacion );
   } else {
     alert("Tu navegador no soporta el API de geolocalización. Actualiza a un navegador más moderno.");
   }
}
function localizacion( position ) {
  var crds = position.coords;
  var mapPosition = new google.maps.LatLng(crds.latitude, crds.longitude);
  var mapOptions = {
    zoom: 15,
    center: mapPosition
  };
  var map = new google.maps.Map(document.getElementById('map'),mapOptions);
  //marcador con mensaje
   var infowindow = new google.maps.InfoWindow({
     map: map,
     position: mapPosition,
     content: 'Localización encontrada utilizando Geolocation API.'
   });
   //marcador
  // var marker = new google.maps.Marker({map : map, position : mapPosition});

}

