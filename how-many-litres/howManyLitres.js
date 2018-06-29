module.exports = function howManyLitres(hours) {
  console.log("hours: " + hours);

  const litersPerHour = 0.5;
  var numLiters = 0;

  numLiters = Math.floor(hours*litersPerHour);
  console.log(numLiters);

  return numLiters;
}