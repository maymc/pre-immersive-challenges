module.exports = function countByMultiples(length, x) {
  // write your code in here

  //Initialize an empty array for the elements
  var elemArray = [];

  for(var i = 1; i<=length; i++){
    multipleOfX = x*i;
    elemArray.push(multipleOfX);
    console.log("Current array: " + elemArray);
  }

  return elemArray;
}