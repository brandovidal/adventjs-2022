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
