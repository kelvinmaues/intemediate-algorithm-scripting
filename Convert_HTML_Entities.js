// Coded by Kelvin Maues
// freeCodeCamp.com
function convertHTML(str) {

// this function replace cases where there are HTML entities string for own HTML entities
return str.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");// should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve"); // should return; // Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"'); // should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") // should return Shindler&​apos;s List.
convertHTML("<>"); // should return &​lt;&​gt;.
convertHTML("abc"); // should return abc
