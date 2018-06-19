module.exports = function findMiddleValue(numArray) {
  // write your code in here

  //copy the original array
  var numArray2 = numArray.slice();
  //console.log("numArray2: " + numArray2);

  //sort the copied array into numerical order
  var sortedArray = numArray2.sort(function(a, b){return a-b});
  //console.log("sortedArray: " + sortedArray);


  //the middle number will be at index 1 of the sorted array of 3 numbers
  var middleNum = sortedArray[1]; 
  //console.log("middleNum: " + middleNum);

  var middleNumIndex = numArray.indexOf(middleNum);
  //console.log("middleNumIndex: " + middleNumIndex);

  return middleNumIndex;

}