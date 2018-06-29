module.exports = function moveTheZeros(arrNum, isRight) {
  // write your code here
  console.log("arrNum: " + arrNum + "isRight: " + isRight);
  var arrNum2 = [];

  if(isRight === true){
    for(var i=0; i<arrNum.length; i++){
      if(arrNum[i] !== 0){
        arrNum2.push(arrNum[i]);
      }
    }
    for(var j=0; j<arrNum.length; j++){
      if(arrNum[j] === 0){
        arrNum2.push(arrNum[j]);
      }
    }
    return arrNum2;
  }
  else if(isRight === false){
    for(var i=0; i<arrNum.length; i++){
      if(arrNum[i] === 0){
        arrNum2.push(arrNum[i]);
      }
    }
    for(var j=0; j<arrNum.length; j++){
      if(arrNum[j] !== 0){
        arrNum2.push(arrNum[j]);
      }
    }
    return arrNum2;
  }
}