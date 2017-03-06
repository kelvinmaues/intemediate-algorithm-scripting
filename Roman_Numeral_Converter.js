// Convert the given number into a roman numeral.
// Try it Array.prototype.filter()
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
  // This function convert numbers to strings and split them in values
  function splitNumbers(numberToString) {
    return numberToString.toString().split('');
  };
  // This function get the an numeric array and complete each number with the decimals values
  function inDecimal(arrNumbers) {
    var arr = splitNumbers(arrNumbers);
    var length = arr.length;
    var decimalArray = [];
    for (var i = 0, j = length - 1; i < length; i++, j--) {
      decimalArray.push(arr[i] * Math.pow(10, j));
    }
    return decimalArray;
  }
  array = inDecimal(num);
  for (var i = 0; i < array.length; i++) {
    // use the romanNumbers object
  }
}

convertToRoman(36);
convertToRoman(2); //"II"
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
convertToRoman(1000);
