var maxProfit = function(prices) {
  // first soltuion
    // find the index of lowest price in array;
    // let buyingPrice = prices[0];
    // let buyingIdx, tempProfit;
    // let profit = 0;
    // for(let i = 1; i < prices.length; i++){
    //   buyingPrice = Math.min(buyingPrice, prices[i])
    // }
    // buyingIdx = prices.indexOf(buyingPrice);
    // for(let i = buyingIdx + 1; i < prices.length; i++){
    //   tempProfit = prices[i] - buyingPrice;
    //   if(tempProfit > profit){
    //     profit = tempProfit;
    //   }
    // }
    // return profit;
  let minBuyPrice = Infinity;
  let maxProfit = 0;

  for(let price of prices){
    if(price < minBuyPrice){
      minBuyPrice = price;
    } else if(price - minBuyPrice > maxProfit){
      maxProfit = price - minBuyPrice
    }
  }
  return maxProfit;
};



maxProfit([7,1,5,3,6,4]);