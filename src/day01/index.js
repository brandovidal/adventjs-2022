/**
 * It takes an array of strings and returns an array of strings
 * @param {string[]} gifts - an array of strings
 * @returns An array of strings.
 */
export default function wrapping (gifts) {
  return gifts.map((gift) => {
    const WRAP = '*'.repeat(gift.length)
    return [`${WRAP}**\n*${gift}*\n**${WRAP}`].join('\n')
  })
}
