/* global L */
;(function (window) {
  function init (mapid) {
    var minZoom = 2
    var maxZoom = 4
    var img = [
      2024,
      2266
      
    ]

    // create the map
    var map = L.map(mapid, {
      minZoom: minZoom,
      maxZoom: maxZoom
    })

    // assign map and image dimensions
    var rc = new L.RasterCoords(map, img)

    // set the view on a marker ...
    map.setView(rc.unproject([1012, 600]), 2)

    // add layer control object
    L.control.layers({}, {
     // 'Polygon': layerPolygon(map, rc),
     // 'Countries': layerCountries(map, rc),
  //'Bounds': layerBounds(map, rc, img),// comment this after all coordinates established!
//Locations
     
     //'Fairy Rings': layerFring(map, rc),   
    }).addTo(map)

    // the tile layer containing the image generated with gdal2tiles --leaflet ...
    L.tileLayer('./tiles/{z}/{x}/{y}.png', {
      noWrap: true,
      attribution: '<a href="https://2009scape.org/site/terms/terms.html">Data &copy; 2009scape project and contributors</a>'
    }).addTo(map)
  }

function layerFring (map, rc) {
    var imgDir = 'images/'
    var fringMarker = L.icon({
      iconUrl: imgDir + 'fring-60.gif',
      iconRetinaUrl: imgDir + 'fring-60.gif',
      iconSize: [30, 30],
      iconAnchor: [14, 15],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + 'marker-shadow.png',
      shadowSize: [41, 41],
      shadowAnchor: [14, 41]
    })
    var layerFring = L.geoJson(window.fringInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: fringMarker
        })
      }
    })
    map.addLayer(layerFring)
    return layerFring
  }
   init('map')
}(window))
