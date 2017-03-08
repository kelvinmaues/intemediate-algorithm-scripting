// Convert the given number into a roman numeral.
// Try it Array.prototype.filter()
function convertToRoman(num) {
  var romanSymbols = {
  "1": "I",
  "4": "IV",
  "5": "V",
  "9": "IX",
  "10": "X",
  "40": "XL",
  "50": "L",
  "90": "XC",
  "100": "C",
  "400": "CD",
  "500": "D",
  "900": "CM",
  "1000": "M"
};
  // This function convert numbers to strings and split them in values
  function splitNumbers(numberToString) {
    return numberToString.toString().split('');
  };
  // This function get the an numeric array and complete each number with the decimals values
  function breakingNumbers(arrNumbers) {
    var arr = splitNumbers(arrNumbers);
    var length = arr.length;
    var decimalArray = [];
    for (var i = 0, j = length - 1; i < length; i++, j--) {
      decimalArray.push(arr[i] * Math.pow(10, j));
    }
    return decimalArray;
  }
    var arr = breakingNumbers(num)
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
      var value = arr[i]

    if (value >= 1000) {
      newArray.push(romanSymbols['1000']);
    } else if(value >= 900){
        newArray.push(romanSymbols['900']);
    } else if(value >= 500){
        newArray.push(romanSymbols['500']);
    } else if(value >= 400){
        newArray.push(romanSymbols['400']);
    } else if(value >= 100){
        newArray.push(romanSymbols['100']);
    } else if (value >= 90) {
        newArray.push(romanSymbols['90']);
    } else if (value >= 50) {
        newArray.push(romanSymbols['50']);
    } else if (value >= 40){
        newArray.push(romanSymbols['40']);
    } else if (value >= 10){
      newArray.push(romanSymbols['10']);
    } else if (value == 9){
        newArray.push(romanSymbols['9']);
    } else if (value >= 5 && value <= 8) {
        newArray.push(romanSymbols['5']);
    } else if (value == 4) {
        newArray.push(romanSymbols['4']);
    } else if (value >= 1 && value <= 3) {
        newArray.push(romanSymbols['1']);
    } else {
        null;
    }
}
console.log(newArray.join('') + ", " + arr);
}

convertToRoman(36); //XXXVI
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
