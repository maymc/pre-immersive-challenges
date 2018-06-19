module.exports = function evenLadderPattern(num) {
  // write your code in here
  if(num === 0 || num === 1 || num < 0){
    return "";
  }
  else if(num % 2 === 0){
    var arr2 = [];
    var numEvens = num/2; //this is how many rows needed

    for(var i=1; i<=numEvens; i++){
      var cycles = 2*i;
      for(var j=1; j<=cycles; j++){
        arr2.push(cycles);
      }
      if(i !== numEvens){
        arr2.push("\n");
      }
      //console.log(arr2);
    }
    var string = arr2.join("");
    //console.log("string: \n" + string);
    return string;
  }
  else if(num % 2 !== 0){
    var arr2 = [];
    var numEvens = Math.floor(num/2); //this is how many rows needed
    //console.log("num: " + num);
    //console.log(numEvens);

    for(var i=1; i<=numEvens; i++){
      var cycles = 2*i;
      for(var j=1; j<=cycles; j++){
        arr2.push(cycles);
      }
      if(i !== numEvens){
        arr2.push("\n");
      }
      //console.log(arr2);
    }
    var string = arr2.join("");
    //console.log("string: \n" + string);
    return string;
  }
}