<!--
/*         // example icon
/*         var exampleIcon = L.icon({
/*             iconUrl: 'library/markers/amulet-glory.gif',
/*             shadowUrl: 'library/markers/amulet-sh.gif',
/*             iconSize: [25, 50],
/*             iconAnchor: [25, 50],
/*             popupAnchor: [-15, -50],
/*             shadowSize: [0, 0],
/*             shadowAnchor: [0, 0]
/*         });
/*
/*         // marker for example icon
/*         L.marker([1, 1], {
/*             icon: exampleIcon
/*         }).bindPopup('icon_example').addTo(map);
--->


<script>

<!-------------- Glories -------------->

var amuletIcon = L.Icon.extend({
		options: {
			shadowUrl: 'data/icons/amulet-sh.gif',
			iconSize:     [15, 30],
			shadowSize:   [15, 30],
			iconAnchor:   [15, 30],
			shadowAnchor: [15, 30],
			popupAnchor:  [-3, -76]
		}
	});

var gloryIcon = new amuletIcon({iconUrl: 'data/icons/amulet-glory.gif'});

var mGlory = L.marker([1790, 1556], {icon: gloryIcon}).bindPopup('Amulet of Glory : Edgeville').addTo(map);
var mGlory = L.marker([1274, 1319], {icon: gloryIcon}).bindPopup('Amulet of Glory : Karamja').addTo(map);
var mGlory = L.marker([1415, 1582], {icon: gloryIcon}).bindPopup('Amulet of Glory : Draynor Village').addTo(map);
var mGlory = L.marker([1192, 1856], {icon: gloryIcon}).bindPopup('Amulet of Glory : Al Kharid').addTo(map);


<!-------------- Fairy -------------->

var fringIcon = L.Icon.extend({
  options: {
    shadowUrl: 'data/icons/fring-icon-30-sh.gif',
    iconSize: [30, 30],
    shadowSize: [15, 15],
    iconAnchor: [30, 30],
    shadowAnchor: [0, 0],
    popupAnchor: [-3, -76]
  }
});


var fringteleIcon = new fringIcon({iconUrl: 'data/icons/glowfring-icon.gif'});

var mFring = L.marker([1993, 510], {icon: fringteleIcon}).bindPopup('Fairy Ring : Piscatoris Fishing Colony: AKQ').addTo(map); 
var mFring = L.marker([1147,363], {icon: fringteleIcon}).bindPopup('Fairy Ring : Poison Waste: DLR <br><center>Dead End.</center>').addTo(map); 
var mFring = L.marker([2453,759], {icon: fringteleIcon}).bindPopup('Fairy Ring : Penguin Island : AJS <br><center>Dead End.</center>').addTo(map);
var mFring = L.marker([1042,601], {icon: fringteleIcon}).bindPopup('Fairy Ring : South of Castle Wars : BKP').addTo(map);
var mFring = L.marker([912,857], {icon: fringteleIcon}).bindPopup('Fairy Ring  : Feldip Hills : AKS').addTo(map);
var mFring = L.marker([1116,1008], {icon: fringteleIcon}).bindPopup('Fairy Ring : Hazelmere\'s Island : CLS').addTo(map);
var mFring = L.marker([2433,776], {icon: fringteleIcon}).bindPopup('Fairy Ring : Miscellania : CIP').addTo(map);
var mFring = L.marker([2162,1094], {icon: fringteleIcon}).bindPopup('Fairy Ring : Keldagrim Entrance : DKS').addTo(map);
var mFring = L.marker([1990,1142], {icon: fringteleIcon}).bindPopup('Fairy Ring : Fremmenik Slayer Cave : AJR').addTo(map);
var mFring = L.marker([1943,1000], {icon: fringteleIcon}).bindPopup('Fairy Ring : Sinclair North West : DJR').addTo(map);
var mFring = L.marker([1929,1040], {icon: fringteleIcon}).bindPopup('Fairy Ring : Sinclair West : CJR').addTo(map);
var mFring = L.marker([1733,730], {icon: fringteleIcon}).bindPopup('Fairy Ring : Baxtorian Falls : BJQ').addTo(map);
var mFring = L.marker([1795,957], {icon: fringteleIcon}).bindPopup('Fairy Ring : McGrubor\'s Wood : ALS').addTo(map);
var mFring = L.marker([1192,798], {icon: fringteleIcon}).bindPopup('Fairy Ring : North west of Yanille : CIQ').addTo(map);
var mFring = L.marker([1362,975], {icon: fringteleIcon}).bindPopup('Fairy Ring : Tower of Life : DJP').addTo(map);
var mFring = L.marker([1418,946], {icon: fringteleIcon}).bindPopup('Fairy Ring : Ardougne Zoo Unicorns : BIS').addTo(map);
var mFring = L.marker([1560,1088], {icon: fringteleIcon}).bindPopup('Fairy Ring : Legends Guild : BLR').addTo(map);
var mFring = L.marker([1257,1226], {icon: fringteleIcon}).bindPopup('Fairy Ring : TzHaar Area : BLP <center>(Underground)</center>').addTo(map);
var mFring = L.marker([1165,1308], {icon: fringteleIcon}).bindPopup('Fairy Ring : Northeast Karamja : DKP').addTo(map);
var mFring = L.marker([989,1172], {icon: fringteleIcon}).bindPopup('Fairy Ring : Karamja Hunter : CKR').addTo(map);
var mFring = L.marker([1164,1440], {icon: fringteleIcon}).bindPopup('Fairy Ring : Mudskipper point: AIQ').addTo(map);
var mFring = L.marker([1224,1595], {icon: fringteleIcon}).bindPopup('Fairy Ring : Wizards Tower : DIS').addTo(map);
var mFring = L.marker([1321,1559], {icon: fringteleIcon}).bindPopup('Fairy Ring : Island South of Draynor Village : CLP').addTo(map);
var mFring = L.marker([1794,1621], {icon: fringteleIcon}).bindPopup('Fairy Ring : Edgeville/GE : DKR').addTo(map);
var mFring = L.marker([1135,1788], {icon: fringteleIcon}).bindPopup('Fairy Ring : Kalphite Lair : BIQ').addTo(map);
var mFring = L.marker([1009,2027], {icon: fringteleIcon}).bindPopup('Fairy Ring : Desert Lizard : DLQ').addTo(map);
var mFring = L.marker([1514,2009], {icon: fringteleIcon}).bindPopup('Fairy Ring : Island, Salve River : BIP<br><center>Dead End.</center>').addTo(map);
var mFring = L.marker([1754,2059], {icon: fringteleIcon}).bindPopup('Fairy Ring : Canafis : CKS').addTo(map);
var mFring = L.marker([1690,2090], {icon: fringteleIcon}).bindPopup('Fairy Ring : Mort Myre Swamp : BKR').addTo(map);
var mFring = L.marker([1793,2270], {icon: fringteleIcon}).bindPopup('Fairy Ring : Haunted Woods : ALQ').addTo(map);
var mFring = L.marker([1389,1034], {icon: fringteleIcon}).bindPopup('Fairy Ring : Island East of Necromancer : AIR<br><center>Dead End.</center>').addTo(map);
var mFring = L.marker([2802,1263], {icon: fringteleIcon}).bindPopup('Fairy Ring : Enchanted Valley : BKQ').addTo(map);
var mFring = L.marker([2642,1673], {icon: fringteleIcon}).bindPopup('Fairy Ring : Abyssal Space : ALR').addTo(map);
var mFring = L.marker([2747,2008], {icon: fringteleIcon}).bindPopup('Fairy Ring : Caves South of Dorgesh-Kaan : AJQ').addTo(map);

<!-------------- Ring of Dueling -------------->

var ringduelingIcon = L.Icon.extend({
		options: {
			shadowUrl: 'data/icons/ring-dueling-sh.gif',
			iconSize:     [18, 18],
			shadowSize:   [18, 18],
			iconAnchor:   [18, 18],
			shadowAnchor: [0, 0],
			popupAnchor:  [-3, -76]
		}
	});

var duelingringteleIcon = new ringduelingIcon({iconUrl: 'data/icons/ring-dueling.gif'});

var mDueling = L.marker([1372, 1879], {icon: duelingringteleIcon}).bindPopup('Dueling Ring : Al Kharid Duel Arena').addTo(map); 
var mDueling = L.marker([1139, 672], {icon: duelingringteleIcon}).bindPopup('Dueling Ring : Castle Wars Arena').addTo(map); 
var mDueling = L.marker([1929, 1771], {icon: duelingringteleIcon}).bindPopup('Dueling Ring : Fist Of Guthix<br><center>Underground.</center>').addTo(map); 

<!-------------- Spirit Tree -------------->

var spirittIcon = L.Icon.extend({
		options: {
			shadowUrl: 'data/icons/ring-dueling-sh.gif',
			iconSize:     [25, 25],
			shadowSize:   [25, 25],
			iconAnchor:   [25, 25],
			shadowAnchor: [0, 0],
			popupAnchor:  [-3, -76]
		}
	});

var spirittreeIcon = new spirittIcon({iconUrl: 'data/icons/spirit-tree3.gif'});

var mSpirittree = L.marker([1820, 1698], {icon: spirittreeIcon}).bindPopup('Spirit Tree, Grand Exchange<br>Teleports to:<br>Tree Gnome Village<br>Tree Gnome Stronghold<br>Battlefield of Khazard').addTo(map); 
var mSpirittree = L.marker([1268, 809], {icon: spirittreeIcon}).bindPopup('Spirit Tree, Tree Gnome Village<br>Teleports to:<br>Tree Gnome Stronghold<br>Battlefield of Khazard<br>Grand Exchange').addTo(map);  
var mSpirittree = L.marker([1725, 703], {icon: spirittreeIcon}).bindPopup('Spirit Tree, Tree Gnome Stronghold<br>Teleports to:<br>Tree Gnome Village<br>Battlefield of Khazard<br>Grand Exchange').addTo(map);  
var mSpirittree = L.marker([1410, 832], {icon: spirittreeIcon}).bindPopup('Spirit Tree. Battlefield of Khazard<br>Teleports to:<br>Tree Gnome Village<br>Tree Gnome Stronghold<br>Grand Exchange').addTo(map); 

<!-------------- Magic Carpet -------------->

var carpetIcon = L.Icon.extend({
		options: {
			shadowUrl: 'data/icons/ring-dueling-sh.gif',
			iconSize:     [25, 25],
			shadowSize:   [25, 25],
			iconAnchor:   [25, 25],
			shadowAnchor: [0, 0],
			popupAnchor:  [-3, -76]
		}
	});

var carpetanimIcon = new carpetIcon({iconUrl: 'data/icons/carpetanim.gif'});

var mCarpet = L.marker([1157, 1872], {icon: carpetanimIcon}).bindPopup('Magic Carpet : Shantay Pass<br>Transport (200 gp) to:<br>Uzer<br>Bedabin Camp<br>North Pollniveach').addTo(map);
var mCarpet = L.marker([1049, 1700], {icon: carpetanimIcon}).bindPopup('Magic Carpet : Bedabin Camp<br>Transport to:<br>Return to Shantay').addTo(map);
var mCarpet = L.marker([989, 1925], {icon: carpetanimIcon}).bindPopup('Magic Carpet : North Pollniveach<br>Transport to:<br>Return to Shantay').addTo(map);
var mCarpet = L.marker([892, 1920], {icon: carpetanimIcon}).bindPopup('Magic Carpet : South Pollniveach<br>Transport (200 gp) to:<br>Nardah<br>Sophanem').addTo(map);
var mCarpet = L.marker([1164, 2089], {icon: carpetanimIcon}).bindPopup('Magic Carpet : Uzer<br>Transport to:<br>Return to Shantay').addTo(map);
var mCarpet = L.marker([840, 1992], {icon: carpetanimIcon}).bindPopup('Magic Carpet : Nardah<br>Transport to:<br>Return to South Pollniveach').addTo(map);
var mCarpet = L.marker([680, 1846], {icon: carpetanimIcon}).bindPopup('Magic Carpet : Sophanem<br>Transport to:<br>Return to South Pollniveach').addTo(map);

<!-------------- Charters -------------->

var shipIcon = L.Icon.extend({
		options: {
			shadowUrl: 'data/icons/ring-dueling-sh.gif',
			iconSize:     [30, 30],
			shadowSize:   [15, 15],
			iconAnchor:   [30, 30],
			shadowAnchor: [0, 0],
			popupAnchor:  [-3, -76]
		}
	});

var shipanimIcon = new shipIcon({iconUrl: 'data/icons/boat-icon.gif'});

var mShip = L.marker([1659, 1160], {icon: shipanimIcon}).bindPopup('Charter Trader : Catherby<br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Brimhaven (480 gp)<br>Port Khazard (1,600 gp)<br>Karamja (480 gp)<br>Port Sarim (1,000 gp)<br>Port Phasmatys (3,250 gp)<br>Mos Le\' Harmless (625 gp)<br><br><strong>Get here from:</strong><br>Port Khazard<br>Port Tyras<br>Port Phasmatys<br>Port Sarim<br>Karamja<br>Brimhaven').addTo(map);
var mShip = L.marker([1427,1009], {icon: shipanimIcon}).bindPopup('South Ardougne Docks : Captain Barnaby<br><strong>Transport to:</strong><br>Brimhaven (30 gp)<br><strong>Get here from:</strong><br>Brimhaven').addTo(map);
var mShip = L.marker([1212,997], {icon: shipanimIcon}).bindPopup('Charter Trader : Port Khazard<br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Brimhaven (1,600 gp)<br>Catherby (1,000 gp)<br>Karamja (0 gp)<br>Port Sarim (1,280 gp)<br>Mos Le Harmless (325 gp)<br>Port Phasmatys (650 gp)<br><br><strong>Get here from:</strong><br>Catherby<br>Port Tyras<br>Port Phasmatys<br>Port Tyras<br>Port Phasmatys<br>Port Sarim<br>Karamja<br>Brimhaven').addTo(map);
var mShip = L.marker([1182,266], {icon: shipanimIcon}).bindPopup('Charter Trader : Port Tyras<br><strong>Transport to:</strong><br>Port Khazard (3,200 gp)<br>Brimhaven (3,200 gp)<br>Catherby (3,200 gp)<br>Karamja (3,200 gp)<br>Port Sarim (3,200 gp)<br>Mos Le Harmless (1,600 gp)<br>Port Phasmatys (3,200 gp)<br><strong>Get here from:</strong><br>Port Khazard<br>Port Tyras<br>Port Phasmatys<br>Mos Le Harmless<br>Port Sarim<br>Karamja<br>Brimhaven').addTo(map);
var mShip = L.marker([2099,927], {icon: shipanimIcon}).bindPopup('Rellekka Western Dock : Jarvald<br><br><strong>Transport to:</strong><br>Waterbirth Island (1,000 gp)<br><br><strong>Get here from:</strong><br>Waterbirth Island').addTo(map);
var mShip = L.marker([2114,925], {icon: shipanimIcon}).bindPopup('Rellekka Western Dock : Lokar Searunner<br><br><strong>Transport to:</strong><br>Pirates cove (Free)<br><br><strong>Get here from:</strong><br><br>Pirates cove').addTo(map);
var mShip = L.marker([2145,950], {icon: shipanimIcon}).bindPopup('Rellekka Dock 4 (northern Rellekka village) :<br><strong>Mord Gunnars</strong><br>Jatizso (Free)<br><br><strong>Maria Gunnars</strong><br>Neitiznot (Free)<br><br><br><strong>Get here from:</strong><br>Neitiznot<br>Jatizso').addTo(map);
var mShip = L.marker([2187, 1046], {icon: shipanimIcon}).bindPopup('Keldagrim Entrace : Travel boat<br> Not implemented').addTo(map);
var mShip = L.marker([748,930], {icon: shipanimIcon}).bindPopup('Oo\'glog <br>Not implemented').addTo(map);
var mShip = L.marker([1865,2383], {icon: shipanimIcon}).bindPopup('Dock north of Port Phasmatys<br>Row boat<br> Not implemented').addTo(map);
var mShip = L.marker([1805,2413], {icon: shipanimIcon}).bindPopup('Port Phasmatys : Charter Trader<br><br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Port Khazard (Free)<br>Brimhaven (3,650 gp)<br>Catherby (3,250 gp)<br>Karamja (1,850 gp)<br>Port Sarim (2,050 gp)<br>Mos Le Harmless (Free)<br><br><strong>Get here from:</strong><br>Port Tyras<br>Port Khazard<br>Brimhaven<br>Catherby<br>Karamja<br>Port Sarim<br>Mos Le Harmless').addTo(map); 
var mShip = L.marker([1794,2425], {icon: shipanimIcon}).bindPopup('Port Phasmatys : Boat number 2<br>Not implemented').addTo(map);
var mShip = L.marker([1363,1511], {icon: shipanimIcon}).bindPopup('Port Sarim : Monks of Entrana<br><br><strong>Transport to:</strong><br>Entrana (Free)<br><br><strong>Get Her From:</strong><br>Entrana').addTo(map);
var mShip = L.marker([1339,1488], {icon: shipanimIcon}).bindPopup('Port Sarim : Captain and Crew<br><br><strong>Transport to:</strong><br>Karamja (30 gp)<br><br><strong>Get here from:</strong><br>Karamja Customs Officer').addTo(map);
var mShip = L.marker([1313,1498], {icon: shipanimIcon}).bindPopup('Port Sarim : Squire<br><br> <strong>Transport to:</strong><br>Void Outpost/Pest Control (Free)<br><br><strong>Get here from:</strong><br>Void Outpost/Pest Control').addTo(map);
var mShip = L.marker([1313,1517], {icon: shipanimIcon}).bindPopup('Port Sarim : Klarense<br><br><strong>Transport to:</strong><br>Crandor (Only during Dragon Slayer Quest)').addTo(map);

		</script>