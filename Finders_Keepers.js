// Coded by Kelvin Maues
// freeCodeCamp.com
function findElement(arr, func) {
  var num = 0
  num = arr.filter(function(number){
    return func(number);
  })
  console.log(num.[0])
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) //should return 8.
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) //should return undefined.
