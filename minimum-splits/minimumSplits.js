module.exports = function minimumSplits(n, m) {
  // write your code in here
  var numPieces = n*m;
  var numSplits = numPieces - 1;
  return numSplits;
}