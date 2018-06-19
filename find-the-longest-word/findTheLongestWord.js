module.exports = function findTheLongestWord(sen) {
  // write your code in here

  var wordLength = 0;
  var longestWord;

  for(var i=0; i<sen.length; i++){
    if(wordLength < sen[i].length){
      wordLength = sen[i].length;
      longestWord = sen[i];
    }
  }
  return longestWord;
}