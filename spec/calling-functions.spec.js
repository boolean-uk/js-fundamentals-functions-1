const { a, b, c } = require('../src/calling-functions.js')

describe('Calling Functions:', () => {
  it('hello', () => {
    expect(a).toEqual('Hello')
  })

  it('helloToJane', () => {
    expect(b).toEqual('Hello Jane!')
  })

  it('helloToBob3Times', () => {
    expect(c).toEqual('Hello Bob!Hello Bob!Hello Bob!')
  })
})
