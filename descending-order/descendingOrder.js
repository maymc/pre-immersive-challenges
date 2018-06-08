module.exports = function descendingOrder(number) {
  // write code in here
  if(typeof number !== "number"){
    return 'not a number!';
  }

  numString = number.toString();
  console.log(numString);
    
  numArray = numString.split("");
  console.log(numArray);

    numArray.sort(function(a, b){return b - a})
    console.log(numArray);

    var combinedNum = numArray.join("");
    console.log(combinedNum);
    return combinedNum;
}