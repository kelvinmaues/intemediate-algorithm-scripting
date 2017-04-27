function smallestCommons(arr) {
  for (var i = arr[0], j = arr[1]; i !== j; i+=arr[0], j+=arr[0]) {

  }
}


smallestCommons([1, 5]) //should return 60.
//smallestCommons([5, 1]) //should return 60.
//smallestCommons([1, 13]) //should return 360360.
//smallestCommons([23, 18]) //should return 6056820.
