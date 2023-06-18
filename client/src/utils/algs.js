/*
algorithm for calculating score. current algorithm:
getting within 1% of the correct place gives full 5000 points. outside of this
range, scales linearly down to 0 points when >= 51% away from correct place.
*/
const MAX_POINTS = 5000;
const MAX_THRESHOLD_PCT = 1
const ZERO_THRESHOLD_PCT = 41 - MAX_THRESHOLD_PCT
export const calcScore = (guessXPct, guessYPct, correctXPct, correctYPct) => {
  const diffXPct = correctXPct - guessXPct
  const diffYPct = correctYPct - guessYPct
  const pctDifference = Math.sqrt(diffXPct ** 2 + diffYPct ** 2)
  if (pctDifference <= MAX_THRESHOLD_PCT) {
    return MAX_POINTS
  } else {
    return Math.trunc(Math.max((ZERO_THRESHOLD_PCT -  (pctDifference - MAX_THRESHOLD_PCT)) / ZERO_THRESHOLD_PCT, 0) * MAX_POINTS)
  }
}

export const calcPct = (location, maxSize, offset) => {
  return (location + offset) / maxSize * 100
}