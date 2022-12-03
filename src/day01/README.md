# Automating Christmas gift wrapping!

### Solution

```javascript
export default function wrapping (gifts) {
  return gifts.map((gift) => {
    const WRAP = '*'.repeat(gift.length)
    return [`${WRAP}**\n*${gift}*\n**${WRAP}`].join('\n')
  })
}
```

### Test

```javascript
import wrapping from './index'

const cases = [
  {
    title: 'wrapping gifts',
    collection: ['cat', 'game', 'socks'],
    expected: [
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******'
    ]
  },
  {
    title: 'wrapping one word',
    collection: ['midu'],
    expected: [
      '******\n*midu*\n******'
    ]
  },
  {
    title: 'wrapping one vowel',
    collection: ['a'],
    expected: [
      '***\n*a*\n***'
    ]
  },
  {
    title: 'return empty array',
    collection: [],
    expected: []
  }
]

describe('Day 1 - AdventJS challengue', () => {
  test.each(cases)('$title', ({ collection, expected }) => {
    expect(wrapping(collection)).toEqual(expected)
  })
})
```

### Screenshot

![Test](./test.png)

[Back to the table of challengues](/README.md)
