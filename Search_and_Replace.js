function myReplace(str, before, after) {
  // Step 1 takes the before word and sees if it is a case word
  // If is true, it will change the after first letter word
  // If else, it'll return the same after word to be replaced at the string sentence
  var newStr = str.replace(before, function() {
    if(before[0] === before[0].toUpperCase()){
      return after.replace(after[0], after[0].toUpperCase());
    }else{
      return after;
    }
  });
  console.log(newStr);
  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall"); // "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") // "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") // "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") // "Let us get back to more Algorithms".
