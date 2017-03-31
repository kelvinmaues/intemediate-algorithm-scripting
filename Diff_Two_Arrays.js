// Coded by Kelvin Maues
function diffArray(arr1, arr2) {
   var arr = []; // a new array to get the difference between the arrays

  /* These conditions are important to see which array will look for its values in another array.
  So the array with the longest lenght wins*/

  if(arr1.length > arr2.length){
    // In this condition compare both sides to see if there is differences
    // for each value in 'arr1' there is no value in 'arr2', if is true add the value in the 'arr' array
    arr1.map(function(value) {
      if (arr2.indexOf(value) === -1) {
        arr.push(value);
      }
    });
    // for each value in 'arr2' there is no value in 'arr1', if is true add the value in the 'arr' array
    arr2.map(function(value) {
      if (arr1.indexOf(value) === -1) {
        arr.push(value);
      }
    });
  // if both arrays are equal in lenght
  } else if (arr1.length == arr2.length) {
    arr1.map(function(value) {
      arr2.map(function(value2) {
        // for each value in 'arr2' and 'arr1' there is no value in 'arr1' and 'arr2', if is true add the values in the 'arr' array
        if (arr2.indexOf(value) === -1 && arr1.indexOf(value2) === -1) {
          arr.push(value);
          arr.push(value2);
        }
      });
    });
  // when the 'arr2' has length more than 'arr1'
  } else {
    // for each value in 'arr2' there is no value in 'arr1', if is true add the value in the 'arr' array
    arr2.map(function(value) {
      if (arr1.indexOf(value) === -1) {
        arr.push(value);
      }
    });
  }
  return console.log(arr);

}
// TDD Callback functions
//[4]
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// ["pink wool"]
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// ["diorite", "pink wool"]
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
// []
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
//[4]
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//["piglet", 4]
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
// ["snuffleupagus", "cookie monster", "elmo"]
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
// [1, "calf", 3, "piglet", 7, "filly"]
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
