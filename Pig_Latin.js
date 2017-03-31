// Coded by Kelvin Maues
function translatePigLatin(str) {
  // function to check is the consonant is a vowel or not
  function isVowel(x) {  return /[aeiouAEIOU]/.test(x); }
  // an iteration loop for the string check if each consonant
  // is a vowel and if it is the first letter of the string
  for (var i = 0; i < str.length; i++) {
    if (isVowel(str[i]) && i === 0) {
      return str.substr(i) + str.substring(0, i) + "way";
    }
    else if(isVowel(str[i])){
      return str.substr(i) + str.substring(0, i) + "ay";
    }
  }
}
// TDD Callback functions
translatePigLatin("consonant");
translatePigLatin("california"); // should return "aliforniacay".
translatePigLatin("paragraphs"); // should return "aragraphspay".
translatePigLatin("glove"); // should return "oveglay".
translatePigLatin("algorithm"); // should return "algorithmway".
translatePigLatin("eight"); // should return "eightway".
