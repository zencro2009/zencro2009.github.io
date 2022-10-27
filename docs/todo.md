todo also contain examples


/* WORK BELOW*/
/*

EXAMPLE broken down
var mShip = L.marker([1321,1559], {icon: shipanimIcon}).bindPopup('
Port Sarim : Captain and Crew<br><br>
<strong>Transport to:</strong><br>
Karamja (30 gp)<br><br>
<strong>Get here from:</strong><br>
Karamja Customs Officer
').addTo(map);

After composing above we edit the marker coordinates to sync with the map.
Marker coordinates are: distance from south, distance from east 


var mShip = L.marker([1313,1569], {icon: shipanimIcon}).bindPopup('Port Sarim : Klarense<br><br><strong>Transport to:</strong><br>Crandor (Only during Dragon Slayer Quest)').addTo(map);

Port Sarim : Trader Charter
         Port Tyras (3,200 gp)
         Port Khazard (1,280 gp)
         Brimhaven (1,600 gp)
         Catherby (1,000 gp)
         Mos Le Harmless (325 gp)
         Port Phasmatys (650 gp)
         <br><strong>Get here from:</strong><br>
         Port Tyras
         Port Khazard 
         Brimhaven 
         Catherby 
         Mos Le Harmless 
         Port Phasmatys 
         
Karamja : Trader Charter
         Port Tyras (3,200 gp)
         Port Khazard (400 gp)
         Brimhaven (200 gp)
         Catherby (480 gp)
         Mos Le Harmless (225 gp)
         Port Phasmatys (1,850 gp)
         <br><strong>Get here from:</strong><br>
         Port Tyras
         Port Khazard
         Brimhaven
         Catherby
         Mos Le Harmless
         Port Phasmatys
        
    Customs Officer
         Port Sarim (30 gp)
        
Brimhaven
      Trader Charter
         Port Tyras (3,200 gp)
         Port Khazard (400 gp)
         Catherby (480 gp)
         Karamja (480 gp)
         Port Sarim (1,600 gp)
         Mos Le Harmless (925 gp)
         Port Phasmatys (3,650 gp)
         <br><strong>Get here from:</strong><br>
         Port Tyras
         Port Khazard
         Catherby
         Karamja 
         Port Sarim 
         Mos Le Harmless 
         Port Phasmatys 
         
      Customs Officer
         Port Sarim (30 gp)
 
 Fanellaman Row Boat Not implemented
 
 Captain Shanks (south west Karamja)
         Port Khazard (43 gp at boat)
         Port Sarim   (43 gp at boat)

 Waterbirth Island
        Return to Rellekka

        
Pirates Cove
        Lokar Searunner : Return to Relleka
        Captain Bentley : Lunar Isle 
Lunar Isle
        Captain Bentley : Pirate's Cove
Neitznot 
       Return to Relleka
Jatizso
       Return to Relleka
Miscellania
      Sailor : not yet implemented
         
WORK ABOVE*/



//<br><br>Get here from:<br>Port Khazard<br>Port Tyras<br>Port Phasmatys

/* DOCKS TO BE IMPLEMENTED


The Hollows (Mort Myre Swamp)
                    Swamp Boaty to and from Mort\'on
Mort\'on
       Swamp Boaty to and from The Hollows

Burgh de Rott
       Quest boat
       
Lumbridge Canoe station
          Transpor to:
           South Champion\'s guild
           Edgeville
           Wilderness

FAIRY RING CKP Cosmic Entity's plane (starflowers)
FAIRY RING DIR Goraks' Plane (Dangerous)

jungle spiders rename to Hazelmere's Island
 Goraks' Plane -DANGEROUS- DIR      
 Island River Salve BIP

 
 Canoes
    Wilderness Pond
    Barbarian Village
    Champion's Guild
    Lumbridge
 
 
 Pharoah's Scepter
    Jalsavrah  (pyramid plunder)
    Jaleustrophos
    Jaldraocht
 
 
 */
                  
/*Arhein (Quest) Keep Le Faye */




/*
Hopefully Coming Soon:

Games Necklace                
Pharoahs Scepter              
Stronghold of Security Scepter
Boats and canoes
Spellbooks and Spells
Wilderness Obelisk
Cloaks
Achievment Diary rings
Achievment Diary gloves
*/

/* Below were marker placements I used to try and sort location data -zencro */

/* var markerIcon = L.Icon.extend({
		options: {
			shadowUrl: 'fring-icon-30-sh.gif',
			iconSize:     [15, 30],
			shadowSize:   [15, 30],
			iconAnchor:   [15, 30],
			shadowAnchor: [0, 0],
			popupAnchor:  [-3, -76]
		}
	});

var markingIcon = new markerIcon({iconUrl: 'marker-icon.png'});

var mMark = L.marker([1500, 1500], {icon: markingIcon}).bindPopup('Marker 1500:1500').addTo(map);
var mMark = L.marker([150, 100], {icon: markingIcon}).bindPopup('Marker 150:100').addTo(map);
var mMark = L.marker([200, 100], {icon: markingIcon}).bindPopup('Marker 200:100').addTo(map);
var mMark = L.marker([250, 100], {icon: markingIcon}).bindPopup('Marker 250:100').addTo(map);
var mMark = L.marker([300, 100], {icon: markingIcon}).bindPopup('Marker 300:100').addTo(map);
var mMark = L.marker([350, 100], {icon: markingIcon}).bindPopup('Marker 350:100').addTo(map);
var mMark = L.marker([400, 100], {icon: markingIcon}).bindPopup('Marker 400:100').addTo(map);
var mMark = L.marker([450, 100], {icon: markingIcon}).bindPopup('Marker 450:100').addTo(map);
var mMark = L.marker([500, 100], {icon: markingIcon}).bindPopup('Marker 500:100').addTo(map);
var mMark = L.marker([550, 100], {icon: markingIcon}).bindPopup('Marker 550:100').addTo(map);
var mMark = L.marker([600, 100], {icon: markingIcon}).bindPopup('Marker 600:100').addTo(map);
var mMark = L.marker([650, 100], {icon: markingIcon}).bindPopup('Marker 650:100').addTo(map);
var mMark = L.marker([700, 100], {icon: markingIcon}).bindPopup('Marker 700:100').addTo(map);
var mMark = L.marker([750, 100], {icon: markingIcon}).bindPopup('Marker 750:100').addTo(map);
var mMark = L.marker([800, 100], {icon: markingIcon}).bindPopup('Marker 800:100').addTo(map);
var mMark = L.marker([850, 100], {icon: markingIcon}).bindPopup('Marker 850:100').addTo(map);
var mMark = L.marker([900, 100], {icon: markingIcon}).bindPopup('Marker 900:100').addTo(map);
var mMark = L.marker([950, 100], {icon: markingIcon}).bindPopup('Marker 950:100').addTo(map);

var mMark = L.marker([100, 150], {icon: markingIcon}).bindPopup('Marker 100: 150').addTo(map);
var mMark = L.marker([100, 200], {icon: markingIcon}).bindPopup('Marker 100: 200').addTo(map);
var mMark = L.marker([100, 250], {icon: markingIcon}).bindPopup('Marker 100: 250').addTo(map);
var mMark = L.marker([100, 300], {icon: markingIcon}).bindPopup('Marker 100: 300').addTo(map);
var mMark = L.marker([100, 350], {icon: markingIcon}).bindPopup('Marker 100: 350').addTo(map);
var mMark = L.marker([100, 400], {icon: markingIcon}).bindPopup('Marker 100: 400').addTo(map);
var mMark = L.marker([100, 450], {icon: markingIcon}).bindPopup('Marker 100: 450').addTo(map);
var mMark = L.marker([100, 500], {icon: markingIcon}).bindPopup('Marker 100: 500').addTo(map);
var mMark = L.marker([100, 550], {icon: markingIcon}).bindPopup('Marker 100: 550').addTo(map);
var mMark = L.marker([100, 600], {icon: markingIcon}).bindPopup('Marker 100: 600').addTo(map);
var mMark = L.marker([100, 650], {icon: markingIcon}).bindPopup('Marker 100: 650').addTo(map);
var mMark = L.marker([100, 700], {icon: markingIcon}).bindPopup('Marker 100: 700').addTo(map);
var mMark = L.marker([100, 750], {icon: markingIcon}).bindPopup('Marker 100: 750').addTo(map);
var mMark = L.marker([100, 800], {icon: markingIcon}).bindPopup('Marker 100: 800').addTo(map);
var mMark = L.marker([100, 850], {icon: markingIcon}).bindPopup('Marker 100: 850').addTo(map);
var mMark = L.marker([100, 900], {icon: markingIcon}).bindPopup('Marker 100: 900').addTo(map);

var mMark = L.marker([150, 150], {icon: markingIcon}).bindPopup('Marker 150:150').addTo(map);
var mMark = L.marker([200, 200], {icon: markingIcon}).bindPopup('Marker 200:200').addTo(map);
var mMark = L.marker([250, 250], {icon: markingIcon}).bindPopup('Marker 250:250').addTo(map);
var mMark = L.marker([300, 300], {icon: markingIcon}).bindPopup('Marker 300:300').addTo(map);
var mMark = L.marker([350, 350], {icon: markingIcon}).bindPopup('Marker 350:350').addTo(map);
var mMark = L.marker([400, 400], {icon: markingIcon}).bindPopup('Marker 400:400').addTo(map);
var mMark = L.marker([450, 450], {icon: markingIcon}).bindPopup('Marker 450:450').addTo(map);
var mMark = L.marker([500, 500], {icon: markingIcon}).bindPopup('Marker 500:500').addTo(map);
var mMark = L.marker([550, 550], {icon: markingIcon}).bindPopup('Marker 550:550').addTo(map);
var mMark = L.marker([600, 600], {icon: markingIcon}).bindPopup('Marker 600:600').addTo(map);
var mMark = L.marker([650, 650], {icon: markingIcon}).bindPopup('Marker 650:650').addTo(map);
var mMark = L.marker([700, 700], {icon: markingIcon}).bindPopup('Marker 700:700').addTo(map);
var mMark = L.marker([750, 750], {icon: markingIcon}).bindPopup('Marker 750:750').addTo(map);
var mMark = L.marker([800, 800], {icon: markingIcon}).bindPopup('Marker 800:800').addTo(map);
var mMark = L.marker([850, 850], {icon: markingIcon}).bindPopup('Marker 850:850').addTo(map);
var mMark = L.marker([900, 900], {icon: markingIcon}).bindPopup('Marker 900:900').addTo(map);
var mMark = L.marker([950, 950], {icon: markingIcon}).bindPopup('Marker 950:950').addTo(map);
*/


/*Above is the attribution section for the bottom of the page. If terms & conditions move they need to be fixed here! */

/* To set a watermark over see: https://leafletjs.com/examples/extending/extending-3-controls.html */


/* *** BEG L.Control.MousePosition.js *** */
/*
Note this being included does not give us the correct X/Y coordinates for leaftlet to place our markers.
It is left here in case someone else wants to figure out how to implement it to make it more useful in
our charting endeavors.

L.Control.MousePosition = L.Control.extend({

	_pos: null,

	options: {
		position: 'bottomleft',
		separator: ' : ',
		emptyString: 'Unavailable',
		lngFirst: false,
		numDigits: 5,
		lngFormatter: undefined,
		latFormatter: undefined,
		formatter: undefined,
		prefix: "",
		wrapLng: true,
	},

	onAdd: function (map) {
		this._container = L.DomUtil.create('div', 'leaflet-control-mouseposition');
		L.DomEvent.disableClickPropagation(this._container);
		map.on('mousemove', this._onMouseMove, this);
		this._container.innerHTML = this.options.emptyString;
		return this._container;
	},

	onRemove: function (map) {
		map.off('mousemove', this._onMouseMove)
	},

	getLatLng: function() {
		return this._pos;
	},

	_onMouseMove: function (e) {
		this._pos = e.latlng.wrap();
		var lngValue = this.options.wrapLng ? e.latlng.wrap().lng : e.latlng.lng;
		var latValue = e.latlng.lat;
		var lng;
		var lat;
		var value;
		var prefixAndValue;

		if (this.options.formatter) {
			prefixAndValue = this.options.formatter(lngValue, latValue);
		} else {
			lng = this.options.lngFormatter ? this.options.lngFormatter(lngValue) : L.Util.formatNum(lngValue, this.options.numDigits);
			lat = this.options.latFormatter ? this.options.latFormatter(latValue) : L.Util.formatNum(latValue, this.options.numDigits);
			value = this.options.lngFirst ? lng + this.options.separator + lat : lat + this.options.separator + lng;
			prefixAndValue = this.options.prefix + ' ' + value;
		}

		this._container.innerHTML = prefixAndValue;
	}

});

L.Map.mergeOptions({
	positionControl: false
});

L.Map.addInitHook(function () {
	if (this.options.positionControl) {
		this.positionControl = new L.Control.MousePosition();
		this.addControl(this.positionControl);
	}
});

L.control.mousePosition = function (options) {
	return new L.Control.MousePosition(options);
};
*/
/* *** FIN L.Control.MousePosition.js *** */

/*
L.control.mousePosition().addTo(map);
*/
