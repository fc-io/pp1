import { expect, test } from 'vitest'
import getInterval from './getInterval'
import { parseISO } from 'date-fns'

test('duration until midsummer – on midsummer', () => {
  const midsummer = '2023-06-24T00:00:00'
  const start = parseISO('2023-06-24T12:00:00')

  expect(getInterval(midsummer, start))
    .toEqual({
      "days": 0,
      "hours": 0,
      "minutes": 0,
      "months": 0,
      "seconds": 0,
      "years": 0,
    })
})

test('duration until midsummer', () => {
  const midsummer = '2023-06-24T00:00:00'
  const start = parseISO('2023-02-24T00:00:00')

  expect(getInterval(midsummer, start))
    .toEqual({
      "days": 0,
      "hours": 0,
      "minutes": 0,
      "months": 4,
      "seconds": 0,
      "years": 0,
    })
})

test('duration until midsummer – next year', () => {
  const midsummer = '2024-06-22T00:00:00'
  const start = parseISO('2023-06-25T00:00:00')

  expect(getInterval(midsummer, start))
    .toEqual({
      "days": 28,
      "hours": 0,
      "minutes": 0,
      "months": 11,
      "seconds": 0,
      "years": 0,
    })
})
