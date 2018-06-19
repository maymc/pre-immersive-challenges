module.exports = function findUniqueNum(strOfNums) {
  // write your code in here

  var strArray = strOfNums.split(" ");
  console.log(strArray);

  //check if array is odd
  if(strArray[0] % 2 !== 0 && strArray[1] !== 0){
    console.log("array is odd");
    for(var i=0; i<strArray.length; i++){
      if(strArray[i] % 2 === 0){
        return strArray.indexOf(strArray[i]);
      }
    }
  }
  //else array is odd
  else{
    console.log("array is even");
    for(var i=0; i<strArray.length; i++){
      if(strArray[i] % 2 !== 0){
        return strArray.indexOf(strArray[i]);
      }
    }
  }
}