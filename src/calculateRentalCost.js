/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costOneDay = 40;

  if (days >= 7) {
    return days * costOneDay - 50;
  }

  if (days >= 3 && days < 7) {
    return days * costOneDay - 20;
  }

  if (days < 3) {
    return days * 40;
  }
}

module.exports = calculateRentalCost;
