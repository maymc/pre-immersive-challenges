module.exports = function vowelCount(str) {
  console.log(str);
  var vowelCount = 0;

  for(var i=0; i<str.length; i++){
    console.log("vowelCount: " + vowelCount);
    if(str[i].match(/[aeiou]/g)){
      vowelCount++;

    }
  }

  return vowelCount;

}