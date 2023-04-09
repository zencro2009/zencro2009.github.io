var rows = 5;
var columns = 5;
var currTile;
var otherTile;
var turns = 0;
var imgOrder = ["6", "2", "3", "14" , "25", "7", "1", "8", "5" , "10", "11", "12", "4", "18" , "9", "21", "16", "19", "13" , "15", "22", "23", "20", "17" , "24"];
var startingImgOrder = ["6", "2", "3", "14" , "25", "7", "1", "8", "5" , "10", "11", "12", "4", "18" , "9", "21", "16", "19", "13" , "15", "22", "23", "20", "17" , "24"];
const imgCorrectOrder = ["7", "2", "3", "18", "24", "1", "6", "8", "25", "10", "11", "12", "14", "19", "5", "22", "21", "13", "4", "9", "23", "20", "15", "16", "17"];    
window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.name = imgOrder[0];                        
            tile.src = imgOrder.shift() + ".png";
            tile.addEventListener("dragstart", dragStart);  
            tile.addEventListener("dragover", dragOver);    
            tile.addEventListener("dragenter", dragEnter);  
            tile.addEventListener("dragleave", dragLeave);  
            tile.addEventListener("drop", dragDrop);        
            tile.addEventListener("dragend", dragEnd);      
            document.getElementById("board").append(tile);
        }
    }
}
function dragStart() {
    currTile = this;
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
}
function dragLeave() {
}
function dragDrop() {
    otherTile = this;
}
function dragEnd() {
    if (!otherTile.src.includes("25.png")) {
        return;
    }
    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);
    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);
    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;
    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;
    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;
    if (isAdjacent) {
let currImgNameIndex = startingImgOrder.indexOf(currTile.name);
let otherImgNameIndex = startingImgOrder.indexOf(otherTile.name);
startingImgOrder[currImgNameIndex] = otherTile.name;
startingImgOrder[otherImgNameIndex] = currTile.name;
if (startingImgOrder.every((val, index) => val === imgCorrectOrder[index])) {
function shift(str, n) {
	var shifted = '';
	n = n%26;
	for (var i = 0; i < str.length; i++) {
		let code = str[i].charCodeAt();
    let capital = (code > 64 && code < 91) ? true : false;
    if (code < (capital?65:97) || code > (capital?90:122) || n == 0) {
      shifted += str[i];
      continue;
    }
    if (n > 0) {
      if (code > (capital?90:122)-n) {
  			code = n + code - 26;
  		} else {
  			code += n;
  		}
    } else {
      if (code < (capital?65:97)-n) {
  			code = code + n + 26;
  		} else {
  			code += n;
  		}
    }
		shifted += String.fromCharCode(code);
	}
	return shifted;
}
var cHeater = (shift('Yofkd x Olmb xka x Qfk Lob!!', 3));
alert(cHeater);
}        
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;
        turns += 1;
        document.getElementById("turns").innerText = turns;
    }
}
function wInner() {
    function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;    
 document.getElementsByTagName('head').item(0).appendChild(script);
                          }   
    include('./winner.js')                       
}    
