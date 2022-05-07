import { useState } from "react";

export default function Stock() {
  const [initialPrice, setInitialPrice] = useState(undefined);
  const [quantityOfStocks, setQuantityOfStocks] = useState(undefined);
  const [currentPrice, setCurrentPrice] = useState(undefined);
  const [profit, setProfit] = useState(0);
  const [profitPer, setProfitPer] = useState(0);
  const [loss, setLoss] = useState(0);
  const [lossPer, setLossPer] = useState(0);

  const calculator = (e) => {
    e.preventDefault();
    const tot = currentPrice - initialPrice * quantityOfStocks;
    const Percent = (tot / currentPrice) * 100;
    setProfit(tot);
    setProfitPer(Percent);
    const totLoss = currentPrice - initialPrice;
    const lossPercent = (totLoss / currentPrice) * 100;
    setLoss(totLoss);
    setLossPer(lossPercent);
  };

  return (
    <>
      <div>
        <h3>initial Price</h3>
        <input
          placeholder="Enter Initial Price here"
          value={initialPrice}
          onChange={(e) => setInitialPrice(e.target.value)}
        />
      </div>

      <div>
        <h3>Quantity Of Stocks</h3>
        <input
          placeholder="Enter The Number Of Stocks Bought"
          value={quantityOfStocks}
          onChange={(e) => setQuantityOfStocks(e.target.value)}
        />
        <div>
          <h3>Current Price</h3>
          <input
            placeholder="Enter the Current Price Of The Stocks"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
          />
        </div>
        <br />

        <div>
          <h3>Hey the profit is {profit}</h3>
          <h3>profit Percent is{profitPer}</h3>
          <h3>hey the loss is {loss}</h3>
          <h3> loss percent is {lossPer}</h3>
          <button onClick={calculator}>Tell Me!!</button>
        </div>
      </div>
    </>
  );
}
