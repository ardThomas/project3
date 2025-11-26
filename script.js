/* Initialize the google map */
function initMap(){
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

  /* 1st Feature: Custom marker */
  new google.maps.Marker({
    position: centerPos,
    map: map,
    title: "Welcome! This is my map."
  });

  /* 2nd Feature: Zoom controls */
  map.setOptions({zoomControl: true});

  /* 3rd Feature: Circle that highlights 500 M radius around IIT */
  new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillOpacity: 0.15,
    center: centerPos,
    radius: 500,
    map: map
  });
}

/* "Questions?" button */
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("questionButton");
  if(btn){
    btn.addEventListener("click", () => {
      alert("If you have questions, contact me at:\n<tard@hawk.illinoistech.edu>");
    });
  }
});
