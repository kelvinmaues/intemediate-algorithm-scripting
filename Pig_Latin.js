/*
if the first letter is a consonant
  ->it takes the first and add at the end of the word + 'ay'
else if the first and in the sequence letters are consonants too
  .->it takes all the consonants from the beggining and add at end + 'ay'
else if the first letter is a vowel
  ->it adds at the word of the "way"
*/
function translatePigLatin(str) {
  var strArray = str.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  console.log(str.substr(1) + str.substring(0, 1) + "ay");
}

translatePigLatin("consonant");
translatePigLatin("california"); // should return "aliforniacay".
translatePigLatin("paragraphs"); // should return "aragraphspay".
translatePigLatin("glove"); // should return "oveglay".
translatePigLatin("algorithm"); // should return "algorithmway".
translatePigLatin("eight"); // should return "eightway".
