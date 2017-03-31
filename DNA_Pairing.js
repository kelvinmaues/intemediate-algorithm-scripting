// Coded by Kelvin Maues
// Try to use forEach and map methods
function pairElement(str) {
  return str;
}

// TDD Callback functions
pairElement("GCG"); //return [["G", "C"], ["C","G"],["G", "C"]]
pairElement("ATCGA"); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG"); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA"); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
