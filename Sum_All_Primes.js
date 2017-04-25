function sumPrimes(num) {
  var  result = 0;
  for (var i = 2; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
      var count = 0;
      if(i%j == 0){
        count += 1;
        if(count <= 2){
          console.log(i);
          break;
        }
      }
    }
  }
}
sumPrimes(10);
//sumPrimes(10) //should return 17.
//sumPrimes(977) //should return 73156.
