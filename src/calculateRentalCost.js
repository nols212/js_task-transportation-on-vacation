/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRight = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  const basePrise = days * dailyRight;

  if (days < shortTerm) {
    return basePrise;
  }

  if (days >= shortTerm && days < longTerm) {
    return basePrise - shortTermDiscount;
  }

  if (days >= longTerm) {
    return basePrise - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
