module.exports = function findTheStrayValue(array) {
  // write your code in here

  var nonStray;

  //If the first two elements are the same, then this is the constant value in the array to check for
  if(array[0] === array[1]){
    nonStray = array[0];

    for(var i=0; i<array.length; i++){
      if(array[i] !== nonStray){
        return array[i]; //element is a stray
      }
    }
  }
  //Else if the first two elements are different, one of them is a stray. Check the third element to see which one has a pair and is not the stray
  else if(array[0] !== array[1]){
    if(array[0] === array[2]){
      return array[1];
    }
    else if(array[1] === array[2]){
      return array[0];
    }
  }
}