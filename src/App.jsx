import { useEffect, useState } from "react";
import { parseISO, intervalToDuration } from 'date-fns'
// import reactLogo from './assets/react.svg'
import "./App.css";
import useInterval from 'use-interval'

function getInterval () {
  const midsummer = parseISO('2023-06-24T00:00:00')
  const interval = intervalToDuration({
    start: new Date(),
    end: midsummer
  })

  return interval
}

function App() {
  const [untilMidsummer, setUntilMidsummer] = useState(getInterval())
  const [count, setCount] = useState(0)

  useInterval(() => {
    const interval = getInterval()
    setUntilMidsummer(interval)
    setCount(count + 1);
  }, 1000);


  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const interval = getInterval()

  //     console.log('setInterval')

  //     setUntilMidsummer(interval)
  //     setCount((latestCount) => latestCount + 1)
  //   }, 1000)

  //   return () => {
  //     clearInterval(intervalId)
  //   }
  // }, [])

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
