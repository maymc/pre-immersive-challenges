module.exports = function needleInHaystack(haystack) {

  var haystackFlag = haystack.includes("needle");
  if(haystackFlag === true){
    return haystack.indexOf("needle");
  }
  else{
    return haystackFlag;
  }
}