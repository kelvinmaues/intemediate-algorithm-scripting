// Coded by Kelvin Maues
// freeCodeCamp.com
function sumPrimes(num) {

 var sum = 0;
 // check if a number is a prime by reminder
 function isAPrime(i){
  for (var k = 2; k < i ; k++){
   if (i % k === 0){
    return false;
   }
  }
  return true;
 }
 // loop for each number to passed parameter
 for (var i = 2; i <= num; i++){
  if (isAPrime(i)){
   sum += i;
   }
  }
 console.log(sum);
 // returns 17 - the correct answer.
}
sumPrimes(10) //should return 17.
sumPrimes(977) //should return 73156.
