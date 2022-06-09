var map = L.map('map').setView([12.865416, -85.207229], 7);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});
osm.addTo(map);

var layerGroup = L.layerGroup().addTo(map);

var makersArray = [];


// Marcadores dinámicos

map.on('click', function(e) {
    var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    marker.addTo(layerGroup);
    var coordinates = [marker.getLatLng().lat, marker.getLatLng().lng];
    makersArray.push(coordinates);
    DrawMarkers(makersArray);
});

function DrawMarkers(mArray) {
    var DinamicMarkers = L.polyline(mArray, {color: 'red'} ).addTo(map);
    DinamicMarkers.addTo(layerGroup);   

}

// 7 maravillas

function MachuPicchu() {
    layerGroup.clearLayers();
    map.closePopup();
    marker = L.marker([-13.1631412, -72.5449629]).addTo(layerGroup);
    marker.bindPopup("Machu Picchu").openPopup();
}

// Triangulo de las bermudas

var latlong_bermudaT = [
    [25.77427, -80.19366],
    [32.321384, -64.75737],
    [18.220833, -66.590149],
    [25.77427, -80.19366],
];
var bermudaT = L.polyline(latlong_bermudaT, {color: 'red'});

function BermudaTriangule() {
    this.bermudaT.addTo(map);
}

// Clear

function Clear() {
    // layerGroup.clearLayers();
    // map.closePopup();
    // this.bermudaT.removeFrom(map);
    location.reload();
}