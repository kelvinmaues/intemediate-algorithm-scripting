
function truthCheck(collection, pre) {
  for (var i = 0; i < collection.length; i++) {
    if(collection[i].hasOwnProperty(pre)){
      console.log(true)
    } else{
      console.log(false)
      break;
    }
}
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") //should return false.
