// Coded by Kelvin Maues
// freeCodeCamp.com
function fearNotLetter(str) {
  // spliting the string in an array
  var arr = str.split("");
  // converting each char in UTF-16 code, returning a new array
  var root = arr.map(function(char){
    return char.charCodeAt();
  });
  for (var i = 0; i < root.length; i++) {
    // check if the difference between the UTF-16 numbers is equal 2
    // if is true return the missed letter
    if(root[i+1] - root[i] == 2)
      return String.fromCharCode(root[i]+1);
  }
}
fearNotLetter("abce") //should return "d".
fearNotLetter("abcdefghjklmno") //should return "i".
fearNotLetter("bcd") //cshould return undefined.
fearNotLetter("yz") //cshould return undefined.
