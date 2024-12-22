let mapInitialized = false;

// Handle tab switching
document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-tab");

    // Hide all tab contents
    document.querySelectorAll(".tab-content").forEach((tabContent) => {
      tabContent.style.display = "none";
    });

    // Show the selected tab content
    document.getElementById(tabId).style.display = "block";

    // Initialize the map if the "Stores" tab is clicked
    if (tabId === "stores" && !mapInitialized) {
      initMap();
      mapInitialized = true;
    }
  });
});

// Initialize the Google Map
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.052235, lng: -118.243683 }, // Coordinates for Los Angeles
    zoom: 12,
  });

  // Example markers for Pokémon stores
  const stores = [
    {name: "Pokémon World", lat: 34.052235, lng: -118.243683},
    {name: "Trainer's Haven", lat: 34.062235, lng: -118.253683 },
    {name: "Rizo Sports & TCG", lat: 34.01511, lng: -118.493417},
    {name: "Cards and Coffee", lat: 34.1018905, lng: -118.3288905},
  ];

  stores.forEach((store) => {
    new google.maps.Marker({
      position: { lat: store.lat, lng: store.lng },
      map: map,
      title: store.name,
    });
  });
}
