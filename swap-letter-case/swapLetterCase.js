module.exports = function swapLetterCase(str) {
  console.log("string: " + str);

  var arr2 = [];

  for(var i=0; i<str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      var changeLetter = str[i].toLowerCase();
      arr2.push(changeLetter);
      console.log("arr2: " + arr2);
    }
    else if(str[i] === str[i].toLowerCase()){
      var changeLetter = str[i].toUpperCase();
      arr2.push(changeLetter);
      console.log("arr2: " + arr2);
    }
  }

  var str2 = arr2.join("");
  console.log("new string: " + str2);

  return str2;
}