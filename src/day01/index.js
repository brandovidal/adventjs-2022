const gifts = ['book', 'game', 'socks']

/**
 * It takes an array of strings and returns an array of strings
 * @param {array} gifts - an array of strings
 * @returns An array of strings.
 */
function wrapping(gifts) {
  return gifts.map((gift) => {
    const WRAP = '*'.repeat(gift.length)
    return `${WRAP}**\n*${gift}*\n**${WRAP}`
  })
}

const wrapped = wrapping(gifts)
console.log(wrapped)
