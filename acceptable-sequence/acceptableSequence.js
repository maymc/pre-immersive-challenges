module.exports = function acceptableSequence(str) {
  // write your code here

  //Note: Strings have indexes

  //Check string for a match for letters. (g modifier is used to perform a global match (find all matches rather than stopping after the first match)). Matches are returned in a array
  var letterArray = str.match(/[a-z]/gi);
  console.log("This is the letter array: " + letterArray);
  
  //Flag for return
  var flag = true;

  //Loop through the array of letters and check if the characters before and after are '+'s
  for(var i=0; i<letterArray.length; i++){
    
    //Check for a letter in the array
    //console.log("letter: " + letterArray[i]);

    //Check the index of the letter
    var index = str.indexOf(letterArray[i]);
    //console.log("index: " + index);

    //Store the indexs before and after the letter in variables
    var indexBefore = index - 1;
    //console.log("indexBefore: " + indexBefore);
    //console.log("This is the char at indexBefore: " + strArray[indexBefore]);
    var indexAfter = index + 1;
    //console.log("indexAfter: " + indexAfter);
    //console.log("This is char at indexAfter: " + strArray[indexAfter]);

    //If the index before and after the letter is a "+", flag stays true
    if(str[indexBefore] === "+" && str[indexAfter] === "+"){
      flag = true;
    }
    //If the index before OR after is not "+", flag is false. Return false (return will breka the loop and no other code runs)
    else if(str[indexBefore] !== "+" || str[indexAfter] !== "+"){
      flag = false;
      console.log("Sequence is false");
      return flag;
    }
    console.log("Sequence is true");
    return flag;

  }
}