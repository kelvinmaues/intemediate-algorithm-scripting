// Coded by Kelvin Maues
// freeCodeCamp.com
function binaryAgent(str) {
  var CharCodeArray = str.split(" "),
      uniqueString = [];
  // convert binary to decimal to char
  for (var i = 0; i < CharCodeArray.length; i++) {
    uniqueString.push(String.fromCharCode(parseInt(CharCodeArray[i], 2)))
  }
  console.log(uniqueString.join(''))
  return uniqueString.join('');

}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
