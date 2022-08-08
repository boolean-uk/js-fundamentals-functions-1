const { a, b } = require('../src/creating-functions')

describe('Creating Functions:', () => {
  it('increment adds 1', () => {
    expect(a(1)).toEqual(2)
  })

  it('returns string with smiley', () => {
    expect(b('edward')).toEqual('Hi, Edward :)')
  })

  it('returns string with smiley', () => {
    expect(b('Aiyana')).toEqual('Hi, Aiyana :)')
  })
})
