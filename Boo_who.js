// Coded by Kelvin Maues
// freeCodeCamp.com
// function to check if a value is a primitive boolean like true or false
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  // So just a if else condition is necessary to complete this algorithm
  if(bool === true || bool === false){
    return true;
  } else{
    return false;
  }
}

booWho(null);
booWho(true) //should return true.
booWho(false) //should return true.
booWho([1, 2, 3]) //should return false.
booWho([].slice) //should return false.
booWho({ "a": 1 }) //should return false.
booWho(1) //should return false.
booWho(NaN) //should return false.
booWho("a") //should //return false.
booWho("true") //should //return false.
booWho("false") //should //return false.
