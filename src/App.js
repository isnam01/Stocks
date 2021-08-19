import "./styles.css";
import { useState } from "react";
import pic from "./pic.svg";

export default function App() {
  const [current, setcurrent] = useState(0);
  const [initial, setinitial] = useState(0);
  const [stocks, setstocks] = useState(0);
  const [msg, setmsg] = useState("");

  const submitHandler = () => {
    if (!initial || !current || !stocks) {
      setmsg("Enter all details");
      return;
    }
    if (initial > current) {
      let loss = (initial - current) * stocks;
      let lossPercentage = (loss / initial) * 100;
      setmsg(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
    } else if (current > initial) {
      let profit = (current - initial) * stocks;
      let profitPercentage = (profit / initial) * 100;

      setmsg(
        `Hey the profit is ${profit} and the percent is ${profitPercentage}%`
      );
    } else {
      setmsg(`No pain no gain and no gain no pain`);
    }
  };

  return (
    <div className="App">
      <div className="App1">
        <div>
          <label htmlFor="initial-price">
            Intial Price
            <input
              type="number"
              id="initial-price"
              placeholder="Enter Initial Price Here"
              onChange={(e) => setinitial(e.target.value)}
            />
          </label>
          <label htmlFor="stocks-quantity">
            Quantity of Stocks
            <input
              type="number"
              id="stocks-quantity"
              placeholder="Enter the Number of Stocks bought"
              onChange={(e) => setstocks(e.target.value)}
            />
          </label>
          <label htmlFor="current-price">
            Current Price
            <input
              type="number"
              id="current-price"
              placeholder="Enter the Current Price of the stocks"
              onChange={(e) => setcurrent(e.target.value)}
            />
          </label>

          <button onClick={() => submitHandler()}>Tell Me!!</button>
        </div>
        <div className="pic">
          <img src={pic} />
        </div>
      </div>

      <div id="output-box">{msg ? <p>{msg}</p> : ""}</div>
    </div>
  );
}
