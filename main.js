var map = L.map('map').setView([12.865416, -85.207229], 7);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});
osm.addTo(map);

var layerGroup = L.layerGroup().addTo(map);

var makersArray = [];

// Localizame
L.control.locate().addTo(map);

// Buscar 
L.Control.geocoder().addTo(map);

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
    marker = L.marker([-13.162953120364088, -72.54493073594922]).addTo(layerGroup);
    marker.bindPopup("Machu Picchu").openPopup();
}

function Itza() {
    layerGroup.clearLayers();
    map.closePopup();
    marker = L.marker([20.980869378716207, -88.62343580003683]).addTo(layerGroup);
    marker.bindPopup("Chichén Itzá").openPopup();
}
function Coliseo() {
    layerGroup.clearLayers();
    map.closePopup();
    marker = L.marker([41.89040984942718, 12.492220168522193]).addTo(layerGroup);
    marker.bindPopup("Coliseo Romano").openPopup();
}
function CristoRedentor() {
    layerGroup.clearLayers();
    map.closePopup();
    marker = L.marker([-22.951708475159254, -43.21049795001583]).addTo(layerGroup);
    marker.bindPopup("Cristo Redentor").openPopup();
}
function MurallaChina() {
    layerGroup.clearLayers();
    map.closePopup();
    marker = L.marker([40.43211184270385, 116.57040708381437]).addTo(layerGroup);
    marker.bindPopup("Muralla China").openPopup();
}
function TajMahal() {
    layerGroup.clearLayers();
    map.closePopup();
    marker = L.marker([27.17537385147801, 78.04213146810422]).addTo(layerGroup);
    marker.bindPopup("Taj Mahal").openPopup();
}
function Petra() {
    layerGroup.clearLayers();
    map.closePopup();
    marker = L.marker([30.329957427669704, 35.444186691137396]).addTo(layerGroup);
    marker.bindPopup("La Ciudad de Petra").openPopup();
}

// Triangulo de las bermudas
// var latlong_bermudaT = [
//     [25.77427, -80.19366],
//     [32.321384, -64.75737],
//     [18.220833, -66.590149],
//     [25.77427, -80.19366],
// ];
// var bermudaT = L.polyline(latlong_bermudaT, {color: 'red'});

function BermudaTriangule() {
    // this.bermudaT.addTo(map);
    var polygon = L.polygon([
        [25.77427, -80.19366],
        [32.321384, -64.75737],
        [18.220833, -66.590149],
        [25.77427, -80.19366],
    ]).addTo(map);
    map.setView(new L.LatLng(26.273714, -70.708008),5);
}

// Fosa Marianas
function Marianas() {
    L.circle([11.350237945128619, 142.19956574896122], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
    map.setView(new L.LatLng(11.350881, 142.199306),15);
}

// Clear
function Clear() {
    // layerGroup.clearLayers();
    // map.closePopup();
    // this.bermudaT.removeFrom(map);
    location.reload();
}

//Coordenadas
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);