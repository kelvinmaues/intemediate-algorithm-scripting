// Coded by Kelvin Maues
// freeCodeCamp.com
function sumFibs(num) {
  var result = 0;
  for (var i = 0, current = 1; current <= num; current += i, i = current - i) {
    if(current%2 !== 0){
      result += current;
    }
  }
  return result;
}

sumFibs(10); // should return 5.
sumFibs(1000); // should return 1785.
sumFibs(4000000) // should return 4613732.
sumFibs(4) // should return 5.
sumFibs(75024) // should return 60696.
sumFibs(75025) // should return 135721.
