;(function (window) {
  // geoJson definitions for country
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
  
  
  // fring definitions [distance from east, distance from north]
  
  
 // window.geoInfo = [{
 window.fringInfo = [
 {'type': 'Feature', 'properties': {'name': 'Piscatoris Fishing Colony<br>Fairy Ring Code: AKQ'}, 'geometry': {'type': 'Point',   'coordinates': [2525, 4007]} }, 
 {'type': 'Feature', 'properties': {'name': 'Poison Waste: DLR <br><center>Dead End.</center>' }, 'geometry': {'type': 'Point', 'coordinates': [1668, 8197]} }, 
 {'type': 'Feature', 'properties': {'name': 'Penguin Island : AJS <br><center>Dead End.</center>' }, 'geometry': {'type': 'Point', 'coordinates': [3990, 1724]} }, 
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
