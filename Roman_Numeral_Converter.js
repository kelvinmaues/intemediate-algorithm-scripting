// Convert the given number into a roman numeral.

function convertToRoman(num) {
  var romanNumbers = {
  "1": "I",
  "5": "V",
  "10": "X",
  "50": "L",
  "100": "C",
  "500": "D",
  "1000": "M"
};
  function splitNumbers(numberToString) {
    return numberToString.toString().split('');
  };
  function inDecimal(arrNumbers) {
    var length = arrNumbers.length;
    var decimalArray = [];
    for (var i = 0; i < length; i++) {
      console.log(arrNumbers[i] * Math.pow(10, (length-));
    }
  }
  inDecimal(splitNumbers(num));
}

convertToRoman(36);
/*convertToRoman(2); //"II"
convertToRoman(3); //"III"
convertToRoman(4); //"IV"
convertToRoman(5); //"V"
convertToRoman(9); //"IX"
convertToRoman(12); //"XII"
convertToRoman(16); //"XVI"
convertToRoman(29); //"XXIX"
convertToRoman(44); // "XLIV"
convertToRoman(45); //"XLV"
convertToRoman(68); //"LXVIII"
convertToRoman(83); //"LXXXIII"
convertToRoman(500);
convertToRoman(649);
convertToRoman(1000); */
