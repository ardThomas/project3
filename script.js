/* Initialize the google map */
function InitMap(){
  const centerPos = {lat: 41.835, lng: -87.627}; //Coordinates for IIT

  const map = new google.maps.Map(document.getElementById("map"), {
    center: centerPos,
    zoom: 14,
    mapTypeId: "roadmap",
    styles: [
      {elementType: "geometry", stylers: [{color: "#e9e9e9"}]},
      {elementType: "labels.text.fill", stylers: [{color: "#333" }]}
    ]
  });

  
