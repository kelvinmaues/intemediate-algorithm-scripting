// Coded by Kelvin Maues
// freeCodeCamp.com
function fearNotLetter(str) {
  // spliting the string in an array
  var arr = str.split("");
  // converting each char in UTF-16 code, returning a new array
  var root = arr.map(function(char){
  });
  for (var i = 0; i < root.length; i++) {
    if (root[i+1] - root[i] == 2){
      var missedValue = root[i] + 1;
      console.log("it's missing, " + missedValue)
    }
    else{
      return undefined;
    }
  }
}
fearNotLetter("abce") //should return "d".
fearNotLetter("abcdefghjklmno") //should return "i".
fearNotLetter("bcd") //cshould return undefined.
fearNotLetter("yz") //cshould return undefined.
