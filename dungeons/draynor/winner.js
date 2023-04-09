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
var wInner = (shift('Tbxo x Yirb Dkljb exq, Xaxjxkq mixqb ylav, Oba aefab ibdp, xka zxoov xk Xkqf-aoxdlk pefbia tefib tfbiafkd xk Xaxjxkq pzfjfqxo. Ybclob pmbxhfkd ql jb pxv qeb meoxpb -Qeb qrifmp exsb yilljba fk Sxoolzh exoylro!- fk qeb mryifz zexq xka klq qeb ZZ! Fdklob xii lqebo zirbp xylrq tbxofkd fqbjp!', 3));
}   
