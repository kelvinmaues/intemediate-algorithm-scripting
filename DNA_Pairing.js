// Coded by Kelvin Maues
// freeCodeCamp.com
// Try to use forEach and map methods
function pairElement(str) {
  //split a string in an array of strings
  var strArray = str.split("");
  // a map method to iterate through the array and return a new array of the result inside the block
  var array = strArray.map(function(strs){
    var arr = [];
    // check each case for each caracter
    switch (strs) {
      case "A":
        arr.push(strs);
        arr.push("T")
        return arr;
      case "T":
        arr.push(strs);
        arr.push("A")
        return arr;
      case "C":
        arr.push(strs);
        arr.push("G")
        return arr;
      case "G":
        arr.push(strs);
        arr.push("C")
        return arr;
    }
  });
  return array;
}

// TDD Callback functions
pairElement("GCG"); //return [["G", "C"], ["C","G"],["G", "C"]]
pairElement("ATCGA"); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG"); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA"); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
