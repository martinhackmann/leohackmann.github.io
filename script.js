// Store data
const stores = [
    {
      name: "Pokémon World",
      address: "123 Main St, Los Angeles, CA",
      coordinates: { lat: 34.052235, lng: -118.243683 }
    },
    {
      name: "Trainer's Haven",
      address: "456 Elm St, Los Angeles, CA",
      coordinates: { lat: 34.062235, lng: -118.253683 }
    },
    {
        name: "Rizo Sports & TCG",
        address: "400 Broadway, Santa Monica, CA",
        coordinates: { lat: 34.01511, lng: -118.493417}
    },
    {
        name: "Cards and Coffee",
        address: "6363 Hollywood Blvd #1, Los Angeles, CA",
        coordinates: {lat: 34.1018905, lng: -118.3288905}
    },
  ];
  
  // Initialize map
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 34.052235, lng: -118.243683 },
      zoom: 12
    });
  
    // Add markers
    stores.forEach(store => {
      new google.maps.Marker({
        position: store.coordinates,
        map: map,
        title: store.name
      });
    });
  }
  
  // Populate store list
  const storeList = document.getElementById("store-list");
  stores.forEach(store => {
    const storeElement = document.createElement("div");
    storeElement.className = "store";
    storeElement.innerHTML = `<strong>${store.name}</strong><br>${store.address}`;
    storeList.appendChild(storeElement);
  });
  
  // Load map
  window.onload = initMap;