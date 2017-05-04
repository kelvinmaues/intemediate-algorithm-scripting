// Coded by Kelvin Maues
// freeCodeCamp.com
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var array = [];
  // an recursive function to check is a value in an array is an array or not
  function isAnArray(value) {
    if (Array.isArray(value)) {
      value.filter(isAnArray)
    }
    else{
      array.push(value)
    }
  }

  arr.filter(isAnArray);
  console.log(array)
  return array;

}

steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].
