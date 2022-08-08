const { a, b } = require('../src/creating-functions-multiple-args')

describe('Creating Functions Multiple Args:', () => {
  it('First function returns range 1 to 3', () => {
    expect(a(1, 3)).toEqual([1, 2, 3])
  })

  it('First function returns range -1 to 1', () => {
    expect(a(-1, 1)).toEqual([-1, 0, 1])
  })

  it('Second function returns oh no with single exclamation', () => {
    expect(b('oh no', 1)).toEqual('OH NO!')
  })

  it('Second function returns watch out with 6 exclamations', () => {
    expect(b('watch out', 6)).toEqual('WATCH OUT!!!!!!')
  })
})
