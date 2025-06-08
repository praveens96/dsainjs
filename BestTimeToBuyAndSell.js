/* Problem: Best Time to Buy and Sell Stock
* You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
* You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
* Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.
* NeetCode150: https://neetcode.io/problems/buy-and-sell-crypto
* Approach: 
* min price approach:: keep track of min price & max profit and return max profit at the end.
* sliding window:: determine the max profit everytime and keep small in left and large in right, increment right
*
* for typescript just declare input type (prices: number[]) thats enough.
* sliding window way is also incuded., total 3 ways to solve the problem were given here.
*
* Testcases: 
* 1. Input: prices = [10,1,5,6,7,1], Output: 6
* 2. Input: prices = [10,8,7,5,2], Output: 0

*/


class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfitImperative(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;
        for(const price of prices) {
            if(minPrice < price) {
                minPrice = price;
            } else {
                maxProfit = Math.max(maxProfit, price - minPrice)
            }
        }
        return maxProfit;
    }

    maxProfitFunctional(prices) {
        return prices.reduce(([minPrice, maxProfit], price) => {
            return [
                Math.min(minPrice, price),
                Math.max(maxProfit, price-minPrice)
            ]
        },[Infinity, 0])[1]
    }
  
    maxProfitSlidingWindow(prices) {
      let left = 0;
      let right = 1;
      let maxProfit = 0;
      while(right < prices.length) {
        if(prices[left] > prices[right]) {
          left = right;
        } else {
          maxProfit = Math.max(maxProfit, prices[right] - prices[left])
        }
        right++;
      }
      return maxProfit;
    }
  
}
