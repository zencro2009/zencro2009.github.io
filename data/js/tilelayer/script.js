// initialize map
const map = L.map("map");

// load tiles and display as map
L.TileLayer.Loremflickr = L.TileLayer.extend({
  getTileUrl: function (coords) {
    var i = Math.ceil(Math.random() * 40);
    return "library/layers/250/250?lock=" + i;
  },
  getAttribution: function () {
    return "///////////////";
  },
});

L.tileLayer.loremflickr = function () {
  return new L.TileLayer.Loremflickr();
};
// add to map
L.tileLayer.loremflickr().addTo(map);