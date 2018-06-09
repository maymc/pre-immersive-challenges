module.exports = function descendingOrder(number) {
  // write code in here

  //Check if the parameter's datatype is a number. If not, return 'not a number!
  if(typeof number !== "number"){
    return 'not a number!';
  }

  //At this point parameters is a number datatype. Convert the number to a string
  numString = number.toString();
  console.log(numString);
  
  //Convert the string to an array. The sort() function sorts an array thus the number has to be converted to an array
  numArray = numString.split("");
  console.log(numArray);

    //Sort the numbers in the array in descending order
    numArray.sort(function(a, b){return b - a})
    console.log(numArray);

    //Combine the array elements into a string and return the string
    var combinedNum = numArray.join("");
    console.log(combinedNum);
    return combinedNum;
}