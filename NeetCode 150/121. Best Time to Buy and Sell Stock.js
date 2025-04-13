/**
 * 121. Best Time to Buy and Sell Stock
 * 
 * 1.Initialization:

let buyPrice = prices[0];: We initialize buyPrice to the price of the stock on the first day (index 0). This is our initial assumption for the buying price.
let profit = 0;: We initialize profit to 0. We haven't made any profit yet.

2.Iteration:

for (let i = 1; i < prices.length; i++) { ... }: The code iterates through the prices array, starting from the second day (index 1) up to the last day.

3.Updating buyPrice:

if (buyPrice > prices[i]) { buyPrice = prices[i]; }: Inside the loop, this condition checks if the current day's price prices[i] is lower than the current buyPrice. If it is, it means we've found a new, potentially better buying opportunity. We update buyPrice to the current day's price. The logic here is that we always want to buy at the lowest possible price.

4.Calculating and Updating profit:

profit = Math.max(profit, prices[i] - buyPrice);: This is the core of the profit calculation. It calculates the potential profit if we were to sell the stock on the current day (prices[i]) after having bought it at buyPrice. prices[i] - buyPrice is the profit we would make. Math.max(profit, ...) then compares this potential profit with the current maximum profit profit we've found so far. It updates profit to the larger of the two. This ensures we always keep track of the maximum profit.


5.Return:

return profit;: After the loop finishes, the function returns the profit, which will be the maximum profit that could be made by buying and selling the stock within the given price history.


 */

var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for(i = 1 ; i < prices.length ; i++){
        if (buyPrice > prices[i]){
            buyPrice = prices[i];
        }
        profit = Math.max(profit, prices[i] - buyPrice);
    }
    return profit
};