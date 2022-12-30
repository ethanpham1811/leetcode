/**
 *
 * @param {number[]} prices
 * @returns number
 * double loop to find max(valJ-valI)
 */
function maxProfit(prices) {
  let maxProfit = 0

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxProfit) {
        maxProfit = prices[j] - prices[i]
      }
    }
  }
  return maxProfit
}
console.log(maxProfit([5, 9, 1, 3, 6]))

/* 
- store minPrice everytime
- store maxProfit everytime
*/
function maxProfit(prices) {
  let minPrice = Infinity
  let maxProfit = 0

  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice
    }
  }
  return maxProfit
}
console.log(maxProfit([6, 9, 1, 3, 5]))

// [7,1,9,3,6,4]
// [2,4,3,1]
// [4,2,5,2,9]
// [4,9,1,3]
