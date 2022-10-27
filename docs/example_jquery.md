// controls for adding layers in jquery

$( "#menu_res" ).click(function( event ) {
 layerClicked = window[event.target.value];
 if (map.hasLayer(layerClicked)) {
 map.removeLayer(layerClicked);
 }
 else{
 map.addLayer(layerClicked);

 } ;
});

// jquery simple pop-ups

popup = new L.popup();
function onMapClick(e) {
var BBOX = map.getBounds().toBBoxString();
var WIDTH = map.getSize().x;
var HEIGHT = map.getSize().y;
var X = map.layerPointToContainerPoint(e.layerPoint).x;
var Y = map.layerPointToContainerPoint(e.layerPoint).y;
var qlayers='repository:exampletitlelayer,data:dungeons; // add more layers here
var URL =ms_url+'SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&LAYERS='+
qlayers+'&QUERY_LAYERS='+qlayers+'&STYLES=&BBOX='+BBOX+'&FEATURE_COUNT=1&HEIGHT='
+HEIGHT+'&WIDTH='+WIDTH+'&INFO_FORMAT=text%2Fhtml&SRS=EPSG%3A4326&X='+X+'&Y='+Y;
popup
.setLatLng(e.latlng)
.setContent(e.latlng.toString()+"<iframe src='"+URL+"'width='250' height='120'
frameborder='0'></iframe>")
.openOn(map);
}
map.on("click", onMapClick);

// controls for menu (slider)

$(document).ready(function(){
 $("#menu").click(function(){
 $("#menu_res").slideToggle("slow");
 });
});