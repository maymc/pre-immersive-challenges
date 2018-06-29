module.exports = function reverseMessage(str) {
  
  //Show the str
  console.log("str: " + str);
  //Convert the string to an array
  var strArray = str.split(" ");
  console.log(strArray);

  var wordArray = [];
  var reverseMsg;
  var reverseArray = [];

  //Iterate through the array
  for(var i=0; i<strArray.length; i++){
    //For each element of the array, split it into individual letters
    wordArray = strArray[i].split("");
    console.log("here: " + wordArray);
    
    //Reverse the letters of the element
    wordArray.reverse();
    
    //Check if the first letter is a lowercase. If so, convert it to uppercase. 
    if(wordArray[0] === wordArray[0].toLowerCase()){
      var firstLetter = wordArray.shift().toUpperCase();
      wordArray.unshift(firstLetter);
      console.log(wordArray);
    }

    //Check if the last letter is uppercase. If so, convert it to lowercase
    if(wordArray[wordArray.length - 1] === wordArray[wordArray.length - 1].toUpperCase()){
      var lastLetter = wordArray.pop().toLowerCase();
      wordArray.push(lastLetter);
      console.log(wordArray);
    }

    //Combine the letters of ehe element back into a whole word that is reversed and add it to the reverse array
    reverseMsg = wordArray.join("");
    console.log(reverseMsg);
    reverseArray.push(reverseMsg);
    console.log(reverseArray);

 }
 //Reverse the entire array of reversed elements
 var reverseAgain = reverseArray.reverse();
 console.log(reverseAgain);

 //Convert the reversed array to a string
 var reverseStr = reverseArray.join(" ");
 console.log(reverseStr);
 return reverseStr;

}