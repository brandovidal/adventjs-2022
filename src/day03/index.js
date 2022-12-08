/**
 * It takes two arrays, one of gifts and one of reindeers, and returns the number of gifts each
 * reindeer should get
 * @param {string[]} packOfGifts - an array of strings, each string representing a gift
 * @param {string[]} reindeers - an array of reindeer names
 * @returns The number of gifts that each reindeer will get.
 */
export default function distributeGifts (packOfGifts, reindeers) {
  const packWeight = packOfGifts.join('').length
  const reindeersWeight = reindeers.join('').length * 2
  return Math.floor(reindeersWeight / packWeight)
}
