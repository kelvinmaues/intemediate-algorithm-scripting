function addTogether() {
  var args = Array.prototype.slice.call(arguments);
  function ifANumber(value) {
    return typeof value === 'number';
  }
  for (var i = 0; i < args.length; i++) {
    if(ifANumber(args[i])){

    }
  }
}

addTogether(2,3);
addTogether(2, 3); //should return 5.
//addTogether(2)(3); //should return 5.
addTogether("http://bit.ly/IqT6zt"); //should return undefined.
addTogether(2, "3"); //should return undefined.
//addTogether(2)([3]); //should return undefined.
