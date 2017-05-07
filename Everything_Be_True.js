// Coded by Kelvin Maues
// freeCodeCamp.com
function truthCheck(collection, pre) {
  // variable to count if a property is true
  var counter = 0;
  for (var i in collection) {
    // if the property is true count increment one
    if(collection[i].hasOwnProperty(pre) && Boolean(collection[c][pre])){
    counter++;
    }
  }
  // if all the properties are true return true, if not returns false
  return counter == collection.length;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") //should return false.
