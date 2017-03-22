function myReplace(str, before, after) {
  var newStr = str.replace(before, after);

  function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

  console.log(newStr);
  return newStr;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall"); // "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") // "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") // "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") // "Let us get back to more Algorithms".
