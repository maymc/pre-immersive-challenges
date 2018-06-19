module.exports = function doubleStrChars(str) {
  // write your code in here
  //If parameter passed in is not a string type
  if(typeof str !== "string"){
    return "not a string!";
  }
  //Else it is a string
  else{
    var arr2 = [];
    var strArray = str.split("");
    console.log(strArray);
    for(var i=0; i<strArray.length; i++){
      //push in one element two times to double it in the array
      arr2.push(strArray[i]);
      arr2.push(strArray[i]);
      console.log(arr2);
    }
    var str2 = arr2.join("");
    console.log(str2);
  }
  return str2;
}