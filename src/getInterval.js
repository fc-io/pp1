import { parseISO, intervalToDuration, isSameDay } from 'date-fns'

function getInterval(midsummer, start = new Date()) {
  const end = parseISO(midsummer)
  const interval = intervalToDuration({
    start: start,
    end: end
  })

  if (isSameDay(end, start)) {
    return {
      "days": 0,
      "hours": 0,
      "minutes": 0,
      "months": 0,
      "seconds": 0,
      "years": 0,
    }
  } else {
    return interval
  }
}

export default getInterval
