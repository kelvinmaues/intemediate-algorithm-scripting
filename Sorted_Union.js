// Coded by Kelvin Maues
// freeCodeCamp.com
function uniteUnique(arr) {
  // putting toguether arrays
  var args = [].slice.call(arguments, 1);
  // reduce arrays in one unique array
  args = args.reduce(function(a, b) {
    return a.concat(b);
  },
  []
);
  // check-in if each element is in the arr array
  // if is not, put in
  args.forEach(function(element){
    if(element in arr == false){
      arr.push(element);
    }
  })
  return arr;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) //should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) //should return [1, 2, 3, 5, 4, 6, 7, 8].
