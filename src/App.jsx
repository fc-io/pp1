import { useEffect, useState } from "react";
import { parseISO, intervalToDuration } from 'date-fns'
// import reactLogo from './assets/react.svg'
import "./App.css";

function App() {
  const [untilMidsummer, setUntilMidsummer] = useState({})

  useEffect(() => {
    const intervalId = setInterval(() => {
      const midsummer = parseISO('2023-06-24T00:00:00')
      const interval = intervalToDuration({
        start: new Date(),
        end: midsummer
      })

      setUntilMidsummer(interval)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="App">
      <div className="outerContainer">
        <div className="leftContainer">
          <h1 className="days">{untilMidsummer.months} months<br/>
            {untilMidsummer.days} days<br />
            {untilMidsummer.hours}:{untilMidsummer.minutes}:{untilMidsummer.seconds}</h1>
          <h2 className="time">{count}</h2>
        </div>
        <div className="rightContainer"></div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
