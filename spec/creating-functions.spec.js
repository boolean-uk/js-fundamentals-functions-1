const { a, b, c, d, e } = require('../src/creating-functions')

describe('Creating Functions:', () => {
  describe('Task 1', () => {
    it('increment adds 1', () => {
      expect(a(1)).toEqual(2)
    })
  })

  describe('Task 2creating', () => {
    it('capitalises any string', () => {
      expect(b('hello')).toEqual('Hello')
    })
    it('capitalises any string2', () => {
      expect(b('Hello')).toEqual('Hello')
    })
  })

  describe('Task 3', () => {
    it('returns string with smiley', () => {
      expect(c('edward')).toEqual('Hi, Edward :)')
    })

    it('returns string with smiley2', () => {
      expect(c('Aiyana')).toEqual('Hi, Aiyana :)')
    })
  })

  describe('Task 4', () => {
    it('returns string count1', () => {
      expect(d(['edward'])).toEqual(1)
    })
    it('returns string count2', () => {
      expect(d(['edward', 'aiyana'])).toEqual(2)
    })
    it('returns string count3', () => {
      expect(d([1])).toEqual(0)
    })
    it('returns string count4', () => {
      expect(d([1, 'edward'])).toEqual(1)
    })
  })

  describe('Task 5', () => {
    it('adds prop to object if it does not exist1', () => {
      expect(e({})).toEqual({ edward: 'amazing' })
    })
    it('adds prop to object if it does not exist2', () => {
      expect(e({ aiyana: 'fantastic' })).toEqual({
        aiyana: 'fantastic',
        edward: 'amazing'
      })
    })
    it('adds prop to object if it does not exist3', () => {
      expect(e({ edward: 'fabulous' })).toEqual({ edward: 'fabulous' })
    })
  })
})
