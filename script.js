mapboxgl.accessToken = 'pk.eyJ1IjoiaGFja21hbm4xOTgzIiwiYSI6ImNtNTAxdjRuZDFmZjUybW9kbHhvbmpzdTAifQ.7OXY4urE1mH7qFybzv8Ufw';
// Keep track of map initialization status

// Your Mapbox access token

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map', // ID of the div where the map will be rendered
  //style: 'mapbox://styles/mapbox/streets-v11', // Replace with your style
  style: 'mapbox://styles/hackmann1983/cm51d56t300el01suekxggmqf',
  center: [-118.243683, 34.052235], // Longitude, Latitude (e.g., Los Angeles)
  zoom: 12, // Initial zoom level
});

// Add a marker (optional)
new mapboxgl.Marker()
  .setLngLat([-118.243683, 34.052235]) // Marker position
  .setPopup(new mapboxgl.Popup().setText('Los Angeles')) // Popup text
  .addTo(map);

