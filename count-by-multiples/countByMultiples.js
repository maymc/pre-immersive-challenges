module.exports = function countByMultiples(length, x) {
  // write your code in here

  //Initialize an empty array for the elements
  var elemArray = [];

  //Create a loop that will loop the length of the array and add the length's amount of elements to the array. Since the length starts from 1, this will also be the multiplier to X.
  for(var i = 1; i<=length; i++){
    multipleOfX = x*i;
    //Push the new multiple into the array as a new element
    elemArray.push(multipleOfX);
    //Check the array
    console.log("Current array: " + elemArray);
  }

  //Return an array with multiples of 'x'
  return elemArray;
}