const { a, b } = require('../src/example.js')

describe('example function', () => {
  it("returns the string 'Hi, Ed'", () => {
    expect(a()).toEqual('Hi, Ed!')
  })

  it('increments 1 to 2', () => {
    expect(b(1)).toEqual(2)
  })
})
