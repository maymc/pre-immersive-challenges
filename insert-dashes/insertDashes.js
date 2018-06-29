module.exports = function insertDashes(num) {
  // write your code in here
  console.log("num: " + num);
  var numString = num.toString();
  console.log("numString: " + numString);

  var numArray = numString.split("");
  console.log(numArray);

  console.log("length: " + numArray.length);
  // var numArray2 = numArray.map(Number);
  // console.log(numArray2);

  for(var i=0; i<numArray.length; i++){

    if(Number(numArray[i]) % 2 === 0 && Number(numArray[i+1]) %2 === 0){
      console.log("test here: " + i);
      numArray.splice(i+1,0,"-");
      console.log(numArray);
    }
  }

  var dashNum = numArray.join("");
  console.log(dashNum);

  return dashNum;

}