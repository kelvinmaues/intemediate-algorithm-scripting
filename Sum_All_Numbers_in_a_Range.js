// Coded by Kelvin Maues
// freeCodeCamp.com
function sumAll(arr) {
  var maxValue = Math.max.apply(null, arr); // get the minimum value in an array
  var minValue = Math.min.apply(null, arr); // get the maximum value in an array
  var i = minValue; // set i as the minimum value
  var sum = 0; // the sum variable starts at 0
  while (i <= maxValue) { // a iteractive loop until the maxValue
    sum += i; // sum each number
    i++; // increment
  }
  return sum;
}
// TDD Callback functions
sumAll([1, 4]); //10
sumAll([4, 1]); //10
sumAll([5, 10]); //45
sumAll([10, 5]); //45
