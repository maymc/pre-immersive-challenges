module.exports = function cookieProblem(array) {
  // write your code in here

  //Initialize variables
  var highestAmtOfCookies = 0;
  var cookieDiff = 0;
  var additionalCookies = 0;

  //Get the highest num of cookies
  for(var i = 0; i<array.length; i++){
    //console.log("current highest cookie amount: " + highestAmtOfCookies);

    //If this person has the most cookies, update the highest cookie amount
    if(array[i] > highestAmtOfCookies){
      highestAmtOfCookies = array[i];    }
  }

  //console.log("Final highest cookie amt count: " + highestAmtOfCookies);

  //Loop through the array and determine how many more cookies need to be given per person using the difference from the highest cookie count and then total the amount of cookies added
  for(var j = 0; j<array.length; j++){
    if(array[j] !== highestAmtOfCookies){
      cookieDiff = highestAmtOfCookies - array[j];
      //console.log("cookie difference :" + cookieDiff);
      additionalCookies += cookieDiff;
      console.log("Total Cookies to add: " + additionalCookies);
    }
  }

  return additionalCookies;


}