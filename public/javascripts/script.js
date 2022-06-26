
var mymap = L.map('worldmap',
     {
      center: [48.866667, 2.333333],
      zoom: 7

     }
     );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '(c) <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

var worldmap = document.getElementsByClassName("city-card");
console.log(worldmap);


for (const i of worldmap) {
     var lon = i.dataset.lon;
     var lat = i.dataset.lat;
     var city = i.dataset.city;
     var desc = i.dataset.desc;
     var customIcon = L.icon({
          iconUrl: i.dataset.img,
         
          iconSize:   [80, 80],
          shadowSize:  [50, 64],
         
          iconAnchor:  [22, 94],
          shadowAnchor: [4, 62],  
         
          popupAnchor: [-3, -76]
         });
     
     var marker = L.marker([lat, lon], {icon: customIcon}).addTo(mymap);
     marker.bindPopup(`<b>${city}: ${desc}</b>`).openPopup();
}
