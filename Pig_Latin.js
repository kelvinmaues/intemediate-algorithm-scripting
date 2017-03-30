function translatePigLatin(str) {
  function isVowel(x) {  return /[aeiouAEIOU]/.test(x); }
  for (var i = 0; i < str.length; i++) {
    if (isVowel(str[i]) && i === 0) {
      return str.substr(i) + str.substring(0, i) + "way";
    }
    else if(isVowel(str[i])){
      return str.substr(i) + str.substring(0, i) + "ay";
    }
  }
}

translatePigLatin("consonant");
translatePigLatin("california"); // should return "aliforniacay".
translatePigLatin("paragraphs"); // should return "aragraphspay".
translatePigLatin("glove"); // should return "oveglay".
translatePigLatin("algorithm"); // should return "algorithmway".
translatePigLatin("eight"); // should return "eightway".
