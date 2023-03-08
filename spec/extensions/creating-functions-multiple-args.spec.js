<<<<<<< HEAD
const {
  a,
  b,
  c
} = require('../../src/extensions/creating-functions-multiple-args')
=======
const { a, b, c } = require('../../src/extensions/creating-functions-multiple-args')
>>>>>>> a7839d4cd33ae100fb4a4ff3d0f609de3f2807f9

describe('Creating Functions Multiple Args:', () => {
  describe('Task 1', () => {
    it('First function returns range 1 to 3', () => {
      expect(a(1, 3)).toEqual([1, 2, 3])
    })
    it('First function returns range -1 to 1', () => {
      expect(a(-1, 1)).toEqual([-1, 0, 1])
    })
  })

  describe('Task 2', () => {
    it('Second function returns oh no with single exclamation', () => {
      expect(b('oh no', 1)).toEqual('OH NO!')
    })

    it('Second function returns watch out with 6 exclamations', () => {
      expect(b('watch out', 6)).toEqual('WATCH OUT!!!!!!')
    })
  })

  describe('Task 3', () => {
    it('adds time', () => {
      expect(c('7:50', 4)).toEqual('7:54')
    })
    it('adds time', () => {
      expect(c('7:50', 72)).toEqual('9:02')
    })
    it('adds time', () => {
      expect(c('11:50', 20)).toEqual('12:10')
    })
    it('adds time', () => {
      expect(c('12:50', 120)).toEqual('14:50')
    })
    it('adds time', () => {
      expect(c('23:50', 30)).toEqual('00:20')
    })
  })
})
