// do not edit the below
function sayHello () {
  return 'Hello'
}

function sayHelloTo (name) {
  return 'Hello ' + name + '!'
}

function sayHelloManyTimes (name, times) {
  let hello = ''
  for (let i = 0; i < times; i++) {
    hello += 'Hello ' + name + '!'
  }

  return hello
}

// TODO: Add and update code here to make the tests pass

// Set this variable to 'Hello' by calling the sayHello function
const hello = ''

// Set this variable variable to 'Hello Jane' calling the sayHelloTo function
const helloToJane = ''

// Set this variable to 'Hello Bob! Hello Bob! Hello Bob!' calling the sayHelloManyTimes function
const helloToBob3Times = ''



// do not edit below this line
module.exports = {
  a: hello,
  b: helloToJane,
  c: helloToBob3Times
}
