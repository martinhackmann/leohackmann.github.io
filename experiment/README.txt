Tu ruin script 

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

style: 'mapbox://styles/mapbox/streets-v11


const stores = [
    {name: "Pokémon World", lat: 34.052235, lng: -118.243683},
    {name: "Trainer's Haven", lat: 34.062235, lng: -118.253683 },
    {name: "Rizo Sports & TCG", lat: 34.01511, lng: -118.493417},
    {name: "Cards and Coffee", lat: 34.1018905, lng: -118.3288905},
  ];


  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-118.243683, 34.052235], // Longitude, Latitude
  zoom: 11
});

const locations = [
  {lat: 34.052235, lng: -118.243683, name: "Pokémon World", rating: 4.5 },
  { lat: 34.062235, lng: -118.253683 , name: "Trainer's Haven", rating: 3.8 },
  {name: "Rizo Sports & TCG", lat: 34.01511, lng: -118.493417, rating: 2.5 },
  {name: "Cards and Coffee", lat: 34.1018905, lng: -118.3288905, rating: 1.5 },
];

mapbox://styles/hackmann1983/cm504jhdx00d401sv123c875e