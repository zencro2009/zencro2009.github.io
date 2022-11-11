;(function (window) {
  // geoJson definitions for country
  /*
    window.countries = [{
    type: 'Feature',
    properties: {
      name: 'Iceland'
    },
    geometry: {
      type: 'Point',
      coordinates: [1258, 911]
    }
  }, {
    type: 'Feature',
    properties: {
      name: 'Hispania'
    },
    geometry: {
      type: 'Point',
      coordinates: [1374, 2148]
    }
  }]
*/
  
  /*
  // geoJson definitions
  window.geoInfo = [{
    'type': 'Feature',
    'properties': {
      'name': 'Mare Germanicum'
    },
    'geometry': {
      'type': 'Point',
      'coordinates': [1589, 1447]
    }
  }, {
    'type': 'Feature',
    'properties': {
      'name': 'Mare Maggiore'
    },
    'geometry': {
      'type': 'Point',
      'coordinates': [2623, 1918]
    }
  }]
  */
  
  // Fairy Ring definitions [distance from east, distance from north]
    
  window.fringInfo = [
 {'type': 'Feature', 'properties': {'name': '<img src="./gap.png"><br>Piscatoris Fishing Colony<br>Fairy Ring Code: AKQ'}, 'geometry': {'type': 'Point',   'coordinates': [2525, 4007]} }, 
 {'type': 'Feature', 'properties': {'name': 'Poison Waste: DLR <br><center>Dead End.</center><br><br><a href="./hi.html">Click here for the Travel Guide</a>' }, 'geometry': {'type': 'Point', 'coordinates': [1668, 8197]} }, 
 {'type': 'Feature', 'properties': {'name': 'Penguin Island : AJS <br><center>Dead End.</center>'}, 'geometry': {'type': 'Point', 'coordinates': [3990, 1724]} }, 
 {'type': 'Feature', 'properties': {'name': 'South of Castle Wars : BKP' }, 'geometry': {'type': 'Point', 'coordinates': [3060, 8716]} }, 
 {'type': 'Feature', 'properties': {'name': 'Feldip Hills : AKS' }, 'geometry': {'type': 'Point', 'coordinates': [4565, 9356]} }, 
 {'type': 'Feature', 'properties': {'name': 'Hazelmere\'s Island : CLS' }, 'geometry': {'type': 'Point', 'coordinates': [5464, 8343]} },  
 {'type': 'Feature', 'properties': {'name': 'Miscellania : CIP' }, 'geometry': {'type': 'Point', 'coordinates': [4096, 1820]} },  
 {'type': 'Feature', 'properties': {'name': 'Northeast of Keldagrim Entrance : DKS' }, 'geometry': {'type': 'Point', 'coordinates': [5964, 3161]} },  
 {'type': 'Feature', 'properties': {'name': 'West of Fremmenik Slayer Cave Entrance: AJR' }, 'geometry': {'type': 'Point', 'coordinates': [6255, 4022]} },  
 {'type': 'Feature', 'properties': {'name': 'Sinclair North West : DJR' }, 'geometry': {'type': 'Point', 'coordinates': [5415, 4234]} },  
 {'type': 'Feature', 'properties': {'name': 'Sinclair West : CJR' }, 'geometry': {'type': 'Point', 'coordinates': [5649, 4323]} },  
 {'type': 'Feature', 'properties': {'name': 'West of Baxtorian Falls : BJQ' }, 'geometry': {'type': 'Point', 'coordinates': [3820, 5289]} },  
 {'type': 'Feature', 'properties': {'name': 'McGrubor\'s Wood : ALS' }, 'geometry': {'type': 'Point', 'coordinates': [5157, 4979]} },  
 {'type': 'Feature', 'properties': {'name': 'North west of Yanille : CIQ' }, 'geometry': {'type': 'Point', 'coordinates': [4217, 7971]} },  
 {'type': 'Feature', 'properties': {'name': 'Tower of Life : DJP' }, 'geometry': {'type': 'Point', 'coordinates': [5269, 7134]} },  
 {'type': 'Feature', 'properties': {'name': 'Ardougne Zoo Unicorns : BIS' }, 'geometry': {'type': 'Point', 'coordinates': [5091, 6841]} },  
 {'type': 'Feature', 'properties': {'name': 'Legends Guild : BLR' }, 'geometry': {'type': 'Point', 'coordinates': [5932, 6151]} },  
 {'type': 'Feature', 'properties': {'name': 'TzHaar Area : BLP <center>(Underground)</center>' }, 'geometry': {'type': 'Point', 'coordinates': [6770, 7555]} },  
 {'type': 'Feature', 'properties': {'name': 'Northeast Karamja : DKP' }, 'geometry': {'type': 'Point', 'coordinates': [7228, 8100]} },  
 {'type': 'Feature', 'properties': {'name': 'Karamja Hunter : CKR' }, 'geometry': {'type': 'Point', 'coordinates': [6424, 8980]} },  
 {'type': 'Feature', 'properties': {'name': 'Mudskipper point: AIQ' }, 'geometry': {'type': 'Point', 'coordinates': [8004, 8109]} },  
 {'type': 'Feature', 'properties': {'name': 'Wizards Tower : DIS' }, 'geometry': {'type': 'Point', 'coordinates': [8927, 7807]} },  
 {'type': 'Feature', 'properties': {'name': 'Island South of Draynor Village : CLP' }, 'geometry': {'type': 'Point', 'coordinates': [8698, 7331]} },  
 {'type': 'Feature', 'properties': {'name': 'Edgeville/GE : DKR' }, 'geometry': {'type': 'Point', 'coordinates': [9065, 4989]} },  
 {'type': 'Feature', 'properties': {'name': 'South East of Kalphite Lair Entrance: BIQ' }, 'geometry': {'type': 'Point', 'coordinates': [10050, 8248]} },  
 {'type': 'Feature', 'properties': {'name': 'Desert Lizard Hunter Area: DLQ' }, 'geometry': {'type': 'Point', 'coordinates': [11459, 8870]} },  
 {'type': 'Feature', 'properties': {'name': 'Island, Salve River : BIP<br><center>Dead End.</center>' }, 'geometry': {'type': 'Point', 'coordinates': [11352, 6373]} },  
 {'type': 'Feature', 'properties': {'name': 'Canafis : CKS' }, 'geometry': {'type': 'Point', 'coordinates': [11654, 5184]} },  
 {'type': 'Feature', 'properties': {'name': 'Mort Myre Swamp : BKR' }, 'geometry': {'type': 'Point', 'coordinates': [11830, 5502]} },  
 {'type': 'Feature', 'properties': {'name': 'Haunted Woods : ALQ' }, 'geometry': {'type': 'Point', 'coordinates': [12882, 4990]} },  
 {'type': 'Feature', 'properties': {'name': 'Island East of Necromancer : AIR<br><center>Dead End.</center>' }, 'geometry': {'type': 'Point', 'coordinates': [5610, 6994]} },  
 {'type': 'Feature', 'properties': {'name': 'Enchanted Valley : BKQ' }, 'geometry': {'type': 'Point', 'coordinates': [2500, 1300]} },  
 {'type': 'Feature', 'properties': {'name': 'Abyssal Space : ALR' }, 'geometry': {'type': 'Point', 'coordinates': [2500, 1350]} },  
 {'type': 'Feature', 'properties': {'name': 'Caves South of Dorgesh-Kaan : AJQ' }, 'geometry': {'type': 'Point', 'coordinates': [2500, 1400]} }
 ]
 
 
// dueling ring
window.duelInfo = [
 {'type': 'Feature', 'properties': {'name': 'Dueling Ring, Castle Wars Arena'}, 'geometry': {'type': 'Point',   'coordinates': [3521, 8280]} }, 
 {'type': 'Feature', 'properties': {'name': 'Dueling Ring, Al Kharid Duel Arena' }, 'geometry': {'type': 'Point', 'coordinates': [10576, 7122]} },
 {'type': 'Feature', 'properties': {'name': 'Dueling Ring, Fist of Guthix<br><center>Underground</center>' }, 'geometry': {'type': 'Point', 'coordinates': [9981, 4365]} } 
 ]

 // glory
window.gloryInfo = [
 {'type': 'Feature', 'properties': {'name': 'Amulet of Glory, Edgeville'}, 'geometry': {'type': 'Point',   'coordinates': [8743, 5011]} }, 
 {'type': 'Feature', 'properties': {'name': 'Amulet of Glory, Karamja' }, 'geometry': {'type': 'Point', 'coordinates': [7375, 7601]} },
 {'type': 'Feature', 'properties': {'name': 'Amulet of Glory, Al Kharid' }, 'geometry': {'type': 'Point', 'coordinates': [10491, 8049]} }, 
 {'type': 'Feature', 'properties': {'name': 'Amulet of Glory, Draynor Village' }, 'geometry': {'type': 'Point', 'coordinates': [8883, 6907]} } 
 ]
  
 // games
window.gamesInfo = [
 {'type': 'Feature', 'properties': {'name': 'Games Necklace, Clan Wars'}, 'geometry': {'type': 'Point',   'coordinates': [10210, 3442]} }, 
 {'type': 'Feature', 'properties': {'name': 'Games Necklace, Burthorpe Games Room' }, 'geometry': {'type': 'Point', 'coordinates': [7216, 4458]} },
 {'type': 'Feature', 'properties': {'name': 'Games Necklace, Barbarian Outpost' }, 'geometry': {'type': 'Point', 'coordinates': [4156, 4390]} }, 
 {'type': 'Feature', 'properties': {'name': 'Games Necklace, Wilderness Volcano' }, 'geometry': {'type': 'Point', 'coordinates': [9486, 3461]} }, 
 {'type': 'Feature', 'properties': {'name': 'Games Necklace, Corporeal Beast<br><center>(Underground)</center><br><center>Note: No teleport out.</center>'}, 'geometry': {'type': 'Point', 'coordinates': [9753, 2680]} } 
  ]  
  
  
  
//spirit trees 
window.spiritInfo = [
 {'type': 'Feature', 'properties': {'name': 'Spirit Tree, Grand Exchange<br><strong>Teleports to:</strong><br>Tree Gnome Village<br>Tree Gnome Stronghold<br>Battlefield of Khazard'}, 'geometry': {'type': 'Point',   'coordinates': [9536, 4894]} }, 
 {'type': 'Feature', 'properties': {'name': 'Spirit Tree, Tree Gnome Village<br><strong>Teleports to:</strong><br>Tree Gnome Stronghold<br>Battlefield of Khazard<br>Grand Exchange'}, 'geometry': {'type': 'Point', 'coordinates': [4307, 7672]} },
 {'type': 'Feature', 'properties': {'name': 'Spirit Tree, Tree Gnome Stronghold<br><strong>Teleports to:</strong><br>Tree Gnome Village<br>Battlefield of Khazard<br>Grand Exchange'}, 'geometry': {'type': 'Point', 'coordinates': [3670, 5396]} }, 
 {'type': 'Feature', 'properties': {'name': 'Spirit Tree. Battlefield of Khazard<br><strong>Teleports to:</strong><br>Tree Gnome Village<br>Tree Gnome Stronghold<br>Grand Exchange'}, 'geometry': {'type': 'Point', 'coordinates': [4437, 6917]} } 
 ]
 
 //boats
 window.boatsInfo = [
 {'type': 'Feature', 'properties': {'name': 'Charter Trader : Catherby<br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Brimhaven (480 gp)<br>Port Khazard (1,600 gp)<br>Karamja (480 gp)<br>Port Sarim (1,000 gp)<br>Port Phasmatys (3,250 gp)<br>Mos Le\' Harmless (625 gp)<br><br><strong>Get here from:</strong><br>Port Khazard<br>Port Tyras<br>Port Phasmatys<br>Port Sarim<br>Karamja<br>Brimhaven'}, 'geometry': {'type': 'Point', 'coordinates': [6357, 5650]} }, 
 {'type': 'Feature', 'properties': {'name': 'South Ardougne Docks : Captain Barnaby<br><strong>Transport to:</strong><br>Brimhaven (30 gp)<br><strong>Get here from:</strong><br>Brimhaven'}, 'geometry': {'type': 'Point', 'coordinates': [5466, 6803]} }, 
 {'type': 'Feature', 'properties': {'name': 'Charter Trader : Port Khazard<br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Brimhaven (1,600 gp)<br>Catherby (1,000 gp)<br>Karamja (0 gp)<br>Port Sarim (1,280 gp)<br>Mos Le Harmless (325 gp)<br>Port Phasmatys (650 gp)<br><br><strong>Get here from:</strong><br>Catherby<br>Port Tyras<br>Port Phasmatys<br>Port Tyras<br>Port Phasmatys<br>Port Sarim<br>Karamja<br>Brimhaven'}, 'geometry': {'type': 'Point', 'coordinates': [5402, 7858]} },
 {'type': 'Feature', 'properties': {'name': 'Charter Trader : Port Tyras<br><strong>Transport to:</strong><br>Port Khazard (3,200 gp)<br>Brimhaven (3,200 gp)<br>Catherby (3,200 gp)<br>Karamja (3,200 gp)<br>Port Sarim (3,200 gp)<br>Mos Le Harmless (1,600 gp)<br>Port Phasmatys (3,200 gp)<br><strong>Get here from:</strong><br>Port Khazard<br>Port Tyras<br>Port Phasmatys<br>Mos Le Harmless<br>Port Sarim<br>Karamja<br>Brimhaven'}, 'geometry': {'type': 'Point', 'coordinates': [1098, 8020]} }, 
 {'type': 'Feature', 'properties': {'name': 'Rellekka Western Dock : Jarvald<br><br><strong>Transport to:</strong><br>Waterbirth Island (1,000 gp)<br><br><strong>Get here from:</strong><br>Waterbirth Island'}, 'geometry': {'type': 'Point', 'coordinates': [4981, 3473]} },
 {'type': 'Feature', 'properties': {'name': 'Rellekka Western Dock : Lokar Searunner<br><br><strong>Transport to:</strong><br>Pirates cove (Free)<br><br><strong>Get here from:</strong><br><br>Pirates cove'}, 'geometry': {'type': 'Point', 'coordinates': [4965, 3424]} }, 
 {'type': 'Feature', 'properties': {'name': 'Rellekka Dock 4 (northern Rellekka village) :<br><strong>Mord Gunnars</strong><br>Jatizso (Free)<br><br><strong>Maria Gunnars</strong><br>Neitiznot (Free)<br><br><br><strong>Get here from:</strong><br>Neitiznot<br>Jatizso'}, 'geometry': {'type': 'Point', 'coordinates': [5127, 3253]} },
 {'type': 'Feature', 'properties': {'name': 'Keldagrim Entrace : Travel boat<br> Not implemented'}, 'geometry': {'type': 'Point', 'coordinates': [5676, 3049]} }, 
 {'type': 'Feature', 'properties': {'name': 'Oo\'glog <br>Not implemented'}, 'geometry': {'type': 'Point', 'coordinates': [4998, 10179]} },
 {'type': 'Feature', 'properties': {'name': 'Dock north of Port Phasmatys<br>Row boat<br> Not implemented'}, 'geometry': {'type': 'Point', 'coordinates': [13553, 4643]} }, 
 {'type': 'Feature', 'properties': {'name': 'Port Phasmatys : Charter Trader<br><br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Port Khazard (Free)<br>Brimhaven (3,650 gp)<br>Catherby (3,250 gp)<br>Karamja (1,850 gp)<br>Port Sarim (2,050 gp)<br>Mos Le Harmless (Free)<br><br><strong>Get here from:</strong><br>Port Tyras<br>Port Khazard<br>Brimhaven<br>Catherby<br>Karamja<br>Port Sarim<br>Mos Le Harmless'}, 'geometry': {'type': 'Point', 'coordinates': [13730, 4935]} },
 {'type': 'Feature', 'properties': {'name': 'Port Phasmatys : Boat number 2<br>Not implemented'}, 'geometry': {'type': 'Point', 'coordinates': [13785, 4983]} }, 
 {'type': 'Feature', 'properties': {'name': 'Port Sarim : Monks of Entrana<br><br><strong>Transport to:</strong><br>Entrana (Free)<br><br><strong>Get here from:</strong><br>Entrana<br><strong>Note: Entrana allows no weapons or armour</strong>'}, 'geometry': {'type': 'Point', 'coordinates': [8420, 7128]} },
 {'type': 'Feature', 'properties': {'name': 'Port Sarim : Captain and Crew<br><br><strong>Transport to:</strong><br>Karamja (30 gp)<br><br><strong>Get here from:</strong><br>Karamja Customs Officer'}, 'geometry': {'type': 'Point', 'coordinates': [8282, 7250]} }, 
 {'type': 'Feature', 'properties': {'name': 'Port Sarim : Squire<br><br> <strong>Transport to:</strong><br>Void Outpost/Pest Control (Free)<br><br><strong>Get here from:</strong><br>Void Outpost/Pest Control'}, 'geometry': {'type': 'Point', 'coordinates': [8362, 7389]} }, 
{'type': 'Feature', 'properties': {'name': 'Port Sarim : Trader Charter<br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Port Khazard (1,280 gp)<br>Brimhaven (1,600 gp)<br>Catherby (1,000 gp)<br>Mos Le Harmless (325 gp)<br>Port Phasmatys (650 gp)<br><br><strong>Get here from:</strong><br>Port Tyras<br>Port Khazard <br>Brimhaven<br>Catherby<br>Mos Le Harmless<br>Port Phasmatys'}, 'geometry': {'type': 'Point', 'coordinates': [8347, 7471]} }, 
{'type': 'Feature', 'properties': {'name': 'Karamja : Trader Charter<br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Port Khazard (400 gp)<br>Brimhaven (200 gp)<br>Catherby (480 gp)<br>Mos Le Harmless (225 gp)<br>Port Phasmatys (1,850 gp)<br><br><strong>Get here from:</strong><br>Port Tyras<br>Port Khazard<br>Brimhaven<br>Catherby<br>Mos Le Harmless<br>Port Phasmatys'}, 'geometry': {'type': 'Point', 'coordinates': [7676, 7737]} }, 
{'type': 'Feature', 'properties': {'name': 'Karamja : Customs Officer<br>Port Sarim (30 gp)'}, 'geometry': {'type': 'Point', 'coordinates': [7684, 7843]} },
{'type': 'Feature', 'properties': {'name': 'Brimhaven : Trader Charter<br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Port Khazard (400 gp)<br>Catherby (480 gp)<br>Karamja (480 gp)<br>Port Sarim (1,600 gp)<br>Mos Le Harmless (925 gp)<br>Port Phasmatys (3,650 gp)<br><br><strong>Get here from:</strong><br>Port Tyras<br>Port Khazard<br>Catherby<br>Karamja<br>Port Sarim<br>Mos Le Harmless<br>Port Phasmatys'}, 'geometry': {'type': 'Point', 'coordinates': [6106, 7087]} },
{'type': 'Feature', 'properties': {'name': 'Brimhaven : Customs Officer<br>Port Sarim (30 gp)'}, 'geometry': {'type': 'Point', 'coordinates': [6204, 7119]} },
{'type': 'Feature', 'properties': {'name': 'South West Karamja : Captain Shanks<br><br><strong>Transport to:</strong><br>Port Khazard (43 gp at boat)<br>Port Sarim   (43 gp at boat)'}, 'geometry': {'type': 'Point', 'coordinates': [6121, 9411]} },
{'type': 'Feature', 'properties': {'name': 'Pirates Cove : Lokar Searunner<br><strong>Transport to:</strong><br>Relleka'}, 'geometry': {'type': 'Point', 'coordinates': [1668, 2566]} },
{'type': 'Feature', 'properties': {'name': 'Pirates Cove : Captain Bentley<br><strong>Transport to:</strong><br>Lunar Isle'}, 'geometry': {'type': 'Point', 'coordinates': [1756, 2550]} },
{'type': 'Feature', 'properties': {'name': 'Lunar Isle : Captain Bentley<br><strong>Transport to:</strong><br> Pirate\'s Cove'}, 'geometry': {'type': 'Point', 'coordinates': [1066, 1718]} },
{'type': 'Feature', 'properties': {'name': 'Western Karamja : Fanellaman Row Boat<br>Not implemented'}, 'geometry': {'type': 'Point', 'coordinates': [6081, 8330]} },
{'type': 'Feature', 'properties': {'name': 'Waterbirth Island : Jarvald<br><br><strong>Transport to:</strong><br>Rellekka Western Dock'}, 'geometry': {'type': 'Point', 'coordinates': [4399, 2865]} },
{'type': 'Feature', 'properties': {'name': 'Neitiznot : Maria Gunnars<br><br><strong>Transport to:</strong><br>Rellekka Dock 4 (northern Rellekka village)'}, 'geometry': {'type': 'Point', 'coordinates': [2470, 2686]} },
{'type': 'Feature', 'properties': {'name': 'Jatizso : Mord Gunnars<br><br><strong>Transport to:</strong><br>Rellekka Dock 4 (northern Rellekka village'}, 'geometry': {'type': 'Point', 'coordinates': [3353, 2678]} },
{'type': 'Feature', 'properties': {'name': 'Entrana : Monks<br><br><strong>Transport to:</strong><br>Port Sarim'}, 'geometry': {'type': 'Point', 'coordinates': [6697, 6309]} },
{'type': 'Feature', 'properties': {'name': 'Rellekka : Dock 2, Sailor<br><br><strong>Transport to:</strong><br>Miscellania<br><strong>Not yet implemented</strong>'}, 'geometry': {'type': 'Point', 'coordinates': [5030, 3399]} },  
{'type': 'Feature', 'properties': {'name': 'Miscellania : Sailor<br><br><strong>Transport to:</strong><br>Rellekka : Dock 2<br><strong>Not yet implemented</strong>'}, 'geometry': {'type': 'Point', 'coordinates': [4642, 2148]} },
{'type': 'Feature', 'properties': {'name': 'Mos Le Harmless : Charter Trader<br><br><strong>Transport to:</strong><br>Port Tyras (1600 gp)<br>Port Khazard (1025 gp)<br>Brimhaven (725 gp)<br>Catherby (625 gp)<br>Karamja (1025 gp)<br>Port Sarim (325 gp)<br>Port Phasmatys (Free)'}, 'geometry': {'type': 'Point', 'coordinates': [13460, 9582]} },
{'type': 'Feature', 'properties': {'name': 'Void Knights\' Outpost/Pest Control : Squire<br><strong>Transport to:</strong><br>Port Sarim'}, 'geometry': {'type': 'Point', 'coordinates': [5288, 11661]} },  
{'type': 'Feature', 'properties': {'name': 'Port Sarim : Klarense<br><br><strong>Transport to:</strong><br>Crandor (Only during Dragon Slayer Quest)'}, 'geometry': {'type': 'Point', 'coordinates': [8411, 7356]} } 
]

/* BEG blanks for future 

{'type': 'Feature', 'properties': {'name': '  '}, 'geometry': {'type': 'Point', 'coordinates': [8362, 7389]} },
{'type': 'Feature', 'properties': {'name': '  '}, 'geometry': {'type': 'Point', 'coordinates': [8362, 7389]} },
{'type': 'Feature', 'properties': {'name': '  '}, 'geometry': {'type': 'Point', 'coordinates': [8362, 7389]} },
{'type': 'Feature', 'properties': {'name': '  '}, 'geometry': {'type': 'Point', 'coordinates': [8362, 7389]} },
{'type': 'Feature', 'properties': {'name': '  '}, 'geometry': {'type': 'Point', 'coordinates': [8362, 7389]} },
{'type': 'Feature', 'properties': {'name': '  '}, 'geometry': {'type': 'Point', 'coordinates': [8362, 7389]} },
{'type': 'Feature', 'properties': {'name': '  '}, 'geometry': {'type': 'Point', 'coordinates': [8362, 7389]} },
{'type': 'Feature', 'properties': {'name': '  '}, 'geometry': {'type': 'Point', 'coordinates': [8362, 7389]} },
{'type': 'Feature', 'properties': {'name': '  '}, 'geometry': {'type': 'Point', 'coordinates': [8362, 7389]} },
{'type': 'Feature', 'properties': {'name': '  '}, 'geometry': {'type': 'Point', 'coordinates': [8362, 7389]} },
{'type': 'Feature', 'properties': {'name': '  '}, 'geometry': {'type': 'Point', 'coordinates': [8362, 7389]} },
FIN blanks for future */

// canoes
window.canoeInfo = [
{'type': 'Feature', 'properties': {'name': 'Canoe Station : Lumbridge<br><strong>Transport to:</strong><br>Champion\'s Guild : via <ul><li>Log,</li><li>Dugout,</li><li>Stable Dugout,</li><li>Waka</li></ul><br>Barbarian Village : via <ul><li>Dugout,</li><li>Stable Dugout,  </li><li>Waka</li><br></ul>Edgeville : via <ul><li>Dugout,</li> <li>Stable Dugout, </li><li>Waka</li><br></ul>Wilderness Pond : via <ul><li>Waka only!</li></ul>' }, 'geometry': {'type': 'Point', 'coordinates': [9993, 7086]} }, 
{'type': 'Feature', 'properties': {'name': 'Canoe Station : Champion\'s Guild<br><strong>Transport to:</strong><br>Lumbridge : via <ul><li>Log,</li> <li>Dugout,</li> <li>Stable Dugout,</li> <li>Waka</li></ul><br>Barbarian Village : via <ul><li>Log,</li> <li>Dugout,</li> <li>Stable Dugout,</li> <li>Waka</li></ul><br>Edgeville :via <ul><li>Dugout,</li> <li>Stable Dugout,</li> <li>Waka</li></ul><br>Wilderness Pond : via <ul><li>Waka only!</li></ul>' }, 'geometry': {'type': 'Point', 'coordinates': [9679, 6226]} },
{'type': 'Feature', 'properties': {'name': 'Canoe Station : Barbarian Village<br><strong>Transport to:</strong><br>Lumbridge : via <ul><li>Dugout,</li> <li>Stable Dugout,</li> <li>Waka</li></ul><br>Champion\'s Guild: via <ul><li>Log,</li> <li>Dugout,</li> <li>Stable Dugout,</li> <li>Waka</li></ul><br>Edgeville : via <ul><li>Log,</li> <li>Dugout,</li> <li>Stable Dugout,</li> <li>Waka</li></ul><br>Wilderness Pond via<ul><li>Waka only!</li></ul>' }, 'geometry': {'type': 'Point', 'coordinates': [8942, 5695]} },  
{'type': 'Feature', 'properties': {'name': 'Canoe Station : Edgeville<br><strong>Transport to:</strong><br>Lumbridge :via<ul><li>Dugout,</li><li>Stable Dugout,</li><li>Waka</li></ul><br>Champion\'s Guild : via<ul><li>Dugout,</li><li>Stable Dugout,</li><li>Waka</li></ul><br>Barbarian Village : via<ul><li>Log,</li><li>Dugout,</li><li>Stable Dugout,</li> <li>Waka</li></ul><br>Wilderness Pond via<ul><li>Waka only!</li></ul>' }, 'geometry': {'type': 'Point', 'coordinates': [9098, 4883]} },  
{'type': 'Feature', 'properties': {'name': 'Canoe Destination : Wilderness Pond<br><center>Dead End</center><br><center>No return trip possible.</center>' }, 'geometry': {'type': 'Point', 'coordinates': [9203, 2567]} } 
 ]

window.gliderInfo = [
{'type': 'Feature', 'properties': {'name': 'Gnome glider: Crash Island :<br>Captain Errdo<br><br><strong>NOT IMPLEMENTED YET</strong><br><br><strong>Transport to:</strong><br>Ta Quir Priw (Tree Gnome Stronghold)<br>Lemantolly Undri (Feldip Hills)<br>Gandius (Eastern Karamja)<br>Sindarpos (White Wolf Mountain)<br>Lemanto Andra (Dig site)<br>Kar-Hewo (Al Kharid)'}, 'geometry': {'type': 'Point', 'coordinates': [7181, 11270]} },
{'type': 'Feature', 'properties': {'name': 'Gnome glider: Gandius (South Eastern Karamja) :<br>Captain Bleemadge<br><br><strong>NOT IMPLEMENTED YET</strong><br><br><strong>Transport to:</strong><br>Ta Quir Priw (Tree Gnome Stronghold)Lemantolly Undri (Feldip Hills)<br>Gandius (Eastern Karamja)<br>Sindarpos (White Wolf Mountain)<br>Lemanto Andra (Dig site)<br>Kar-Hewo (Al Kharid)'}, 'geometry': {'type': 'Point', 'coordinates': [7824, 9294]} },
{'type': 'Feature', 'properties': {'name': 'Gnome glider: Eastern Karamja Jungle :<br>Captain Errdo<br><br><strong>Transport to:</strong><br>Ta Quir Priw (Tree Gnome Stronghold)<br>Lemantolly Undri (Feldip Hills)<br>Gandius (Eastern Karamja)<br>Sindarpos (White Wolf Mountain)<br>Lemanto Andra (Dig site)<br>Kar-Hewo (Al Kharid)  '}, 'geometry': {'type': 'Point', 'coordinates': [7397, 8571]} }, 
{'type': 'Feature', 'properties': {'name': 'Gnome glider: Sindarpos (White Wolf Mountain) :<br>Captain Bleemadge<br><br><strong>Transport to:</strong><br>Ta Quir Priw (Tree Gnome Stronghold)<br>Lemantolly Undri (Feldip Hills)<br>Gandius (Eastern Karamja)<br>Lemanto Andra (Dig site)<br>Kar-Hewo (Al Kharid)'}, 'geometry': {'type': 'Point', 'coordinates': [6821, 4953]} },
{'type': 'Feature', 'properties': {'name': 'Gnome glider: Lemanto Andra (Dig site) : Dead End<br>'}, 'geometry': {'type': 'Point', 'coordinates': [10657, 5522]} },
{'type': 'Feature', 'properties': {'name': 'Gnome glider: Kar-Hewo (Al Kharid) :<br>Captain Dalbur<br><br><strong>Transport to:</strong><br>Ta Quir Priw (Tree Gnome Stronghold)<br>Lemantolly Undri (Feldip Hills)<br>Gandius (Eastern Karamja)<br>Sindarpos (White Wolf Mountain)<br>Lemanto Andra (Dig site)'}, 'geometry': {'type': 'Point', 'coordinates': [10317, 7293]} },
{'type': 'Feature', 'properties': {'name': 'Gnome glider: Lemantolly Undri (Feldip Hills)<br><center>Dead End</center>'}, 'geometry': {'type': 'Point', 'coordinates': [4331, 9250]} },
{'type': 'Feature', 'properties': {'name': 'Gnome glider: Ta Quir Priw (Tree Gnome Stronghold) :<br>Captain Errdo<br><br><strong>Transport to:</strong><br>Lemantolly Undri (Feldip Hills)<br>Gandius (Eastern Karamja)<br>Sindarpos (White Wolf Mountain)<br>Lemanto Andra (Dig site)<br>Kar-Hewo (Al Kharid)  '}, 'geometry': {'type': 'Point', 'coordinates': [3675, 4938]} },
]

window.mmagicInfo = [
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Lumbridge Level 0 Home<br>Lumbridge Level 31<br>1 <img src="./images/rune-earth.gif"> 3<img src="./images/rune-air.gif"> 1 <img src="./images/rune-law.gif"><br>Tele Other Lumbridge Level 74<br>1 <img src="./images/rune-soul.gif"> 1 <img src="./images/rune-law.gif"> 1 <img src="./images/rune-earth.gif"><br>'}, 'geometry': {'type': 'Point', 'coordinates': [9835, 7251]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Varrock Level 25<br>1<img src="./images/rune-fire.gif"> 3<img src="./images/rune-air.gif"> 1 <img src="./images/rune-law.gif"><br>Note : Alternate location in Grand Exchange'}, 'geometry': {'type': 'Point', 'coordinates': [9760, 5549]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Varrock Level 25<br>1<img src="./images/rune-fire.gif"> 3<img src="./images/rune-air.gif"> 1 <img src="./images/rune-law.gif"><br>Note : Alternate location in Varrock Square'}, 'geometry': {'type': 'Point', 'coordinates': [9378, 5130]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Falador Level 37<br>1<img src="./images/rune-water.gif"> 3<img src="./images/rune-air.gif"> 1 <img src="./images/rune-law.gif"><br>Tele Other Falador Level 82<br>1<img src="./images/rune-soul.gif"> 1<img src="./images/rune-water.gif"> 1 <img src="./images/rune-law.gif"><br>'}, 'geometry': {'type': 'Point', 'coordinates': [7757, 5956]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Camelot Level 45<br>5<img src="./images/rune-air.gif"> 1 <img src="./images/rune-law.gif"><br>Tele Other Camelot Level 90<br>2<img src="./images/rune-soul.gif"> 1<img src="./images/rune-law.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [6077, 5142]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Ardougne Level 51<br>2<img src="./images/rune-water.gif"> 2 <img src="./images/rune-law.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [5304, 6592]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Watchtower Level 58<br>2<img src="./images/rune-earth.gif"> 2 <img src="./images/rune-law.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [4377, 8107]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Trollheim Level 61<br>2<img src="./images/rune-fire.gif"> 2 <img src="./images/rune-law.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [7164, 3522]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Ape Atoll Level 64<br>2<img src="./images/rune-fire.gif"> 2<img src="./images/rune-water.gif">2 <img src="./images/rune-law.gif"> 1<img src="./images/banana.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [6095, 10844]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Player Owned Home<br>Level 40<br>Rimmington<br>1<img src="./images/rune-law.gif"> 3<img src="./images/rune-air.gif">  1<img src="./images/rune-earth.gif"><br>Note: alternates of Taverly, Pollnivneach, Rellekka, Brimhaven, Yanille'}, 'geometry': {'type': 'Point', 'coordinates': [7647, 7201]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Player Owned Home<br>Level 40<br>Taverly<br>1<img src="./images/rune-law.gif"> 3<img src="./images/rune-air.gif">  1<img src="./images/rune-earth.gif"><br>Note: alternates of Rimmington, Pollnivneach, Rellekka, Brimhaven, Yanille'}, 'geometry': {'type': 'Point', 'coordinates': [7162, 5246]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Player Owned Home<br>Level 40<br>Pollnivneach<br>1<img src="./images/rune-law.gif"> 3<img src="./images/rune-air.gif">  1<img src="./images/rune-earth.gif"><br>Note: alternates of Rimmington, Taverly, Rellekka, Brimhaven, Yanille'}, 'geometry': {'type': 'Point', 'coordinates': [10789, 9013]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Player Owned Home<br>Level 40<br>Rellekka<br>1<img src="./images/rune-law.gif"> 3<img src="./images/rune-air.gif">  1<img src="./images/rune-earth.gif"><br>Note: alternates of Rimmington, Taverly, Pollnivneach, Brimhaven, Yanille'}, 'geometry': {'type': 'Point', 'coordinates': [5366, 3903]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Player Owned Home<br>Level 40<br>Brimhaven<br>1<img src="./images/rune-law.gif"> 3<img src="./images/rune-air.gif">  1<img src="./images/rune-earth.gif"><br>Note: alternates of Rimmington, Taverly, Pollnivneach, Rellekka, Yanille'}, 'geometry': {'type': 'Point', 'coordinates': [6063, 7572]} },
{'type': 'Feature', 'properties': {'name': 'Modern Magics<br>Player Owned Home<br>Level 40<br>Yanille<br>1<img src="./images/rune-law.gif"> 3<img src="./images/rune-air.gif">  1<img src="./images/rune-earth.gif"><br>Note: alternates of Rimmington, Taverly, Pollnivneach, Rellekka, Brimhaven'}, 'geometry': {'type': 'Point', 'coordinates': [4348, 8231]} }
]

window.lmagicInfo = [
{'type': 'Feature', 'properties': {'name': 'Lunar Magics<br>Lunar Isle Level 0 Home'}, 'geometry': {'type': 'Point', 'coordinates': [750, 1601]} },
{'type': 'Feature', 'properties': {'name': 'Lunar Magics<br>Moonclan Level 69<br>2<img src="./images/rune-astral.gif"> 1<img src="./images/rune-law.gif"> 2<img src="./images/rune-earth.gif"><br>Tele Group Moonclan lvl 70<br>2<img src="./images/rune-astral.gif"> 1<img src="./images/rune-law.gif"> 4<img src="./images/rune-earth.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [848, 1595]} },
{'type': 'Feature', 'properties': {'name': 'Lunar Magics<br>Ourania lvl 71<br> 2<img src="./images/rune-astral.gif"> 1 <img src="./images/rune-law.gif"> 6 <img src="./images/rune-earth.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [3743, 7015]} },
{'type': 'Feature', 'properties': {'name': 'Lunar Magics<br>Waterbirth lvl 72<br> 2<img src="./images/rune-astral.gif"> 1 <img src="./images/rune-law.gif"> 1 <img src="./images/rune-water.gif"><br>Tele Group Waterbirth lvl 73<br>2<img src="./images/rune-astral.gif"> 1<img src="./images/rune-law.gif"> 5<img src="./images/rune-water.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [4208, 3019]} },
{'type': 'Feature', 'properties': {'name': 'Lunar Magics<br>Barbarian lvl 75<br>2<img src="./images/rune-astral.gif"> 2<img src="./images/rune-law.gif"> 3<img src="./images/rune-fire.gif"><br>Tele Group Barbarian lvl 76<br>2<img src="./images/rune-astral.gif"> 2<img src="./images/rune-law.gif"> 6<img src="./images/rune-fire.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [4350, 4381]} }, 
{'type': 'Feature', 'properties': {'name': 'Lunar Magics<br>Khazard lvl lvl 78 <br>2<img src="./images/rune-astral.gif"> 2<img src="./images/rune-law.gif"> 4<img src="./images/rune-water.gif"><br>Tele Group Khazard lvl 79<br>2<img src="./images/rune-astral.gif"> 2<img src="./images/rune-law.gif"> 8<img src="./images/rune-water.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [5255, 7748]} },  
{'type': 'Feature', 'properties': {'name': 'Lunar Magics<br>Fishing Guild lvl 85<br>3<img src="./images/rune-astral.gif"> 3<img src="./images/rune-law.gif"> 10<img src="./images/rune-water.gif"><br>Tele Group Fishing Guild lvl 86<br>3<img src="./images/rune-astral.gif"> 3<img src="./images/rune-law.gif"> 14<img src="./images/rune-water.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [4897, 5848]} },  
{'type': 'Feature', 'properties': {'name': 'Lunar Magics<br>Catherby lvl 87<br>3<img src="./images/rune-astral.gif"> 3<img src="./images/rune-law.gif"> 10<img src="./images/rune-water.gif"><br>Tele Group Catherby lvl 88<br>3<img src="./images/rune-astral.gif"> 3<img src="./images/rune-law.gif"> 15<img src="./images/rune-water.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [6451, 5510]} },  
{'type': 'Feature', 'properties': {'name': 'Lunar Magics<br>Ice Plateau lvl 89<br>3<img src="./images/rune-astral.gif"> 3<img src="./images/rune-law.gif"> 8<img src="./images/rune-water.gif"><br>Tele Group Ice Plateau lvl 90<br>3<img src="./images/rune-astral.gif"> 3<img src="./images/rune-law.gif"> 16<img src="./images/rune-water.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [7785, 1914]} },   
]                                           


window.amagicInfo = [
{'type': 'Feature', 'properties': {'name': 'Ancient Magics<br>Edgeville lvl 0 Home'}, 'geometry': {'type': 'Point', 'coordinates': [8724, 5009]} },
{'type': 'Feature', 'properties': {'name': 'Ancient Magics<br>Paddewwa  lvl 54<br>2<img src="./images/rune-law.gif">  1<img src="./images/rune-fire.gif">  1<img src="./images/rune-air.gif"><br><center>(Underground, Edgeville Dungeon)</center>'}, 'geometry': {'type': 'Point', 'coordinates': [8822, 5209]} },
{'type': 'Feature', 'properties': {'name': 'Ancient Magics<br>Senntisten  lvl 60<br>2<img src="./images/rune-law.gif">  1<img src="./images/rune-soul.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [10625, 6275]} },
{'type': 'Feature', 'properties': {'name': 'Ancient Magics<br>Kharyrll  lvl 66<br>2<img src="./images/rune-law.gif">  1<img src="./images/rune-blood.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [12025, 5188]} },
{'type': 'Feature', 'properties': {'name': 'Ancient Magics<br>Lassar  lvl 72<br>2<img src="./images/rune-law.gif">  4<img src="./images/rune-water.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [8056, 5208]} },
{'type': 'Feature', 'properties': {'name': 'Ancient Magics<br>Dareeyak  lvl 78<br>2<img src="./images/rune-law.gif">  3<img src="./images/rune-fire.gif">  2<img src="./images/rune-air.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [7752, 3361]} },
{'type': 'Feature', 'properties': {'name': 'Ancient Magics<br>Carrallangar  lvl 84<br>2<img src="./images/rune-law.gif">  2<img src="./images/rune-soul.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [9364, 3629]} },
{'type': 'Feature', 'properties': {'name': 'Ancient Magics<br>Annakarl  lvl 90<br>2<img src="./images/rune-law.gif">  2<img src="./images/rune-blood.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [10356, 1854]} },
{'type': 'Feature', 'properties': {'name': 'Ancient Magics<br>Ghorrock  lvl 96<br>2<img src="./images/rune-law.gif">  2<img src="./images/rune-water.gif">'}, 'geometry': {'type': 'Point', 'coordinates': [7806, 1918]} },
]                                           

/* NOTES
    
Note: Entrana Teleports to Wilderness at  9732, 2823 north west of Ruins Level 31
*/
    
  // polygon
  /*
  window.polygon = [{
    x: 1528.5,
    y: 1524
  }, {
    x: 1532,
    y: 1571
  }, {
    x: 1559.5,
    y: 1620.5
  }, {
    x: 1541,
    y: 1612
  }, {
    x: 1562.5,
    y: 1634.5
  }, {
    x: 1548.5,
    y: 1655
  }, {
    x: 1567.5,
    y: 1651
  }, {
    x: 1598.5,
    y: 1666.5
  }, {
    x: 1576,
    y: 1713
  }, {
    x: 1562,
    y: 1718
  }, {
    x: 1584,
    y: 1722.5
  }, {
    x: 1586.5,
    y: 1736.5
  }, {
    x: 1550.5,
    y: 1750.5
  }, {
    x: 1505,
    y: 1743.5
  }, {
    x: 1505.5,
    y: 1752
  }, {
    x: 1493.5,
    y: 1754.5
  }, {
    x: 1480,
    y: 1745.5
  }, {
    x: 1462,
    y: 1742
  }, {
    x: 1448.5,
    y: 1733
  }, {
    x: 1431.5,
    y: 1737.5
  }, {
    x: 1421,
    y: 1755
  }, {
    x: 1403,
    y: 1740.5
  }, {
    x: 1377.5,
    y: 1741.5
  }, {
    x: 1370.5,
    y: 1751
  }, {
    x: 1349.5,
    y: 1733
  }, {
    x: 1367.5,
    y: 1725
  }, {
    x: 1400,
    y: 1715
  }, {
    x: 1417.5,
    y: 1704.5
  }, {
    x: 1445,
    y: 1709
  }, {
    x: 1463,
    y: 1696
  }, {
    x: 1436.5,
    y: 1703
  }, {
    x: 1427,
    y: 1690
  }, {
    x: 1415,
    y: 1679
  }, {
    x: 1397.5,
    y: 1683
  }, {
    x: 1386.5,
    y: 1667.5
  }, {
    x: 1424.5,
    y: 1655
  }, {
    x: 1428,
    y: 1632
  }, {
    x: 1406.5,
    y: 1636
  }, {
    x: 1435.5,
    y: 1613
  }, {
    x: 1457,
    y: 1614
  }, {
    x: 1467,
    y: 1593.5
  }, {
    x: 1457.5,
    y: 1572.5
  }, {
    x: 1467.5,
    y: 1551
  }, {
    x: 1528.5,
    y: 1524
  }]
*/  
}(window))
