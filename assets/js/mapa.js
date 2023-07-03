let map = L.map('map').setView([12.0978147,-86.3408637],6)

//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Obtener la ubicación del usuario
navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
  
    // Establecer la ubicación del usuario como vista inicial en el mapa
    map.setView([lat, lon], 6);
  
    // Agregar un marcador en la ubicación del usuario
    let marker = L.marker([lat, lon]).addTo(map);
});
// Agregar un marcador en la ubicación fija
//let marker = L.marker([12.0978147, -86.3408637]).addTo(map);