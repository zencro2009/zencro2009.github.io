/* global L */
;(function (window) {
  function init (mapid) {
    var minZoom = 2
    var maxZoom = 6
    var img = [
      12360,
      10736
      
    ]
var map = L.map(mapid, {
      minZoom: minZoom,
      maxZoom: maxZoom
    })
var rc = new L.RasterCoords(map, img)
map.setView(rc.unproject([2394,2379]), 2)
L.control.layers({}, {
}).addTo(map)

    // the tile layer containing the image generated with gdal2tiles --leaflet ...
    L.tileLayer('./tiles/{z}/{x}/{y}.png', {
      noWrap: true,
      attribution: '<a href="https://2009scape.org/site/terms/terms.html">Data &copy; 2009scape project and contributors</a>'
    }).addTo(map)
  }

  function layerCircles (map, rc) {
    /*
    // using circle may cause displaying a ellipse at the edges of the image
    // radius is painful to adjust - simply don't use
    const circle = L.circle(rc.unproject([200, 1000]), { radius: 1e6 })
    */

    /*
    // drawing a circle with a polyline
    // Not so nice because of the visible steps
    function circlePoints ([x, y], r, steps = 360) {
      var p = []
      for (var i = 0; i < steps; i++) {
        p.push(rc.unproject([
          (x + r * Math.cos(2 * Math.PI * i / steps)),
          (y + r * Math.sin(2 * Math.PI * i / steps))
        ]))
      }
      return p
    }
    const polyline = L.polygon([circlePoints([200, 200], 200)], {
      fillColor: '#3388ff',
      color: '#fb0000'
    })
    */

    // Custom marker prototype - credits to Arkensor
    L.CircleMarkerScaling = L.CircleMarker.extend({
      _project: function () {
        this._point = this._map.latLngToLayerPoint(this._latlng);
        this._radius = 2 * this.options.radius * this._map.getZoomScale(this._map.getZoom(), this._map.getMaxZoom());
        this._updateBounds();
      }
    })
    L.circleMarkerScaling = function (latlng, options) {
      return new L.CircleMarkerScaling(latlng, options);
    }

    const custom = L.circleMarkerScaling(rc.unproject([200, 200]), {
      radius: 200,
      fillColor: '#3388ff',
      color: '#fbff2c',
    })

    const layer = L.featureGroup([/*circle, polyline,*/ custom])
    map.addLayer(layer)
    return layer
  }
  init('map')
}(window))
