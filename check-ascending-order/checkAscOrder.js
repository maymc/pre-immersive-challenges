module.exports = function checkAscOrder(numArray) {
  // write your code in here

  //Initialize variables
  var num1;
  var num2;
  var count = 0; //this is a flag to prevent going over the amount of array elements

  //Loop through the number array
  for(var i=0; i<numArray.length; i++){
    count++; //Increase the count flag

    //Set the first and second numbers
    num1 = numArray[i];
    //console.log("num1 = " + num1);
    
    //If we are on the last number in the array, stop the loop and return. This will prevent the secound number from being undefined since there are no more numbers in the array.
    if(count !== numArray.length){
      num2 = numArray[i+1];
      //console.log("num2= " + num2);
    }
    else
      return flag;

    //If the first number is smaller than the next, then the numbers are in ascending order, return true
    if(num1 < num2){
      flag = true;
    }
    //Else, the first number is bigger than the next so this is not ascending order, return false
    else{
      flag = false;
      return flag;
    }

  }

  return flag;
}