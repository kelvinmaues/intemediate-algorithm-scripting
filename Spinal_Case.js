// Coded by Kelvin Maues
// freeCodeCamp.com
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  // all occurrences of capital letters
  // in the string are converted to lower case, and a hyphen is inserted just before the match location.
  function upperToHyphenLower(match, offset, string) {
    return (offset ? '-' : '') + match.toLowerCase();
  }
console.log(str.replace(/ /g,"-").replace(/[A-Z]/g, upperToHyphenLower).replace(/--/g,"-").replace(/_-/g,"-"));
}

spinalCase("This Is Spinal Tap") //should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") //should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") //should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") //should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") //should return "all-the-small-things".
