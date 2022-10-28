         // initialize map
         var map = L.map('image-map', {
             zoomControl: false,
             attributionControl: false,
             minZoom: -1,
             maxZoom: 5,
             center: [0, 0],
             zoom: 3,
             crs: L.CRS.Simple
         });

         // size and src of the image
         var w = 15104,
             h = 12800,
             url = 'library/layers/0.png';
         // calculate the edges of the image, in coordinate space
         var southWest = map.unproject([0, h], map.getMaxZoom() - 2);
         var northEast = map.unproject([w, 0], map.getMaxZoom() - 2);
         var bounds = new L.LatLngBounds(southWest, northEast);

         // add the image overlay so that it covers the entire map
         L.imageOverlay(url, bounds).addTo(map);
         // tell leaflet that the map is exactly as big as the image
         map.setMaxBounds(bounds);
