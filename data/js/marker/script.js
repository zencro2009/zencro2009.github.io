// adding all markers to the featureGroups array
let featureGroups = [];
for (let i = 0; i < points.length; i++) {
  const [lat, lng, title] = points[i];
  featureGroups.push(L.marker([lat, lng]).bindPopup(title));
}

// adding all markers to the map
for (let i = 0; i < featureGroups.length; i++) {
  featureGroups[i].addTo(map);
}

// Extended `LayerGroup` that makes it easy
// to do the same for all layers of its members
let group = new L.featureGroup(featureGroups);

// method fitBounds sets a map view that
// contains the given geographical bounds
map.fitBounds(group.getBounds(), {
  padding: [50, 50], // adding padding to map
});