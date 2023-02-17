import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import useInterval from 'use-interval'
import getInterval from './getInterval'

function App() {
  const midsummer = '2023-06-24T00:00:00'
  // const start = new Date()
  const [untilMidsummer, setUntilMidsummer] = useState(getInterval(midsummer))
  const [count, setCount] = useState(0)

  useInterval(() => {
    const interval = getInterval(midsummer)
    setUntilMidsummer(interval)
    setCount(count + 1);
  }, 1000);

  return (
    <div className="App">
      <div className="outerContainer">
        <div className="leftContainer">
          <h1 className="days">{untilMidsummer.months} months<br/>
            {untilMidsummer.days} days<br />
            {untilMidsummer.hours}:{untilMidsummer.minutes}:{untilMidsummer.seconds}</h1>
          <h2 className="time">count: {count}</h2>
        </div>
        <div className="rightContainer"></div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
