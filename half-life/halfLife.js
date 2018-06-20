// module.exports = function halfLife(initialQuantity, quantityRemaining, time) {
//   return time / Math.log2(initialQuantity / quantityRemaining);
// }

module.exports = function halfLife(initialQty, remainingQty, time){
    if(initialQty/2 === remainingQty){
        //remaining qty is one half of the atoms; time periods listed is time it took
        return time;
    }
    //If remaining qty is not half, then half life came earlier than the time period
    else{
        return time/(Math.log2(initialQty/remainingQty));
    }
}