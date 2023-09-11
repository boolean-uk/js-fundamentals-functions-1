
// TODO: Add and update code here to make the tests pass

// 1. Set this variable to 'Hello' by calling the sayHello function
let hello = ''
function sayHello() {
   return hello += 'Hello'
  
}
console.log(sayHello())
// 2. Set this variable variable to 'Hello Jane' calling the sayHelloTo function
let helloToJane = ''
function sayHelloTo(name) {
  helloToJane += `Hello ${name}!`
  return helloToJane;
}
console.log(sayHelloTo("Jane"))
// 3. Set this variable to 'Hello Bob! Hello Bob! Hello Bob!' calling the sayHelloManyTimes function

let helloToBob3Times = ''
function sayHelloManyTimes(name, times) {
  let hello = ''
  for (let i = 0; i < times; i++) {
    helloToBob3Times += 'Hello' +" "+ name + '!'
    
  }

  return helloToBob3Times
}
console.log(sayHelloManyTimes("Bob", 3))
// do not edit below this line
module.exports = {
  a: hello,
  b: helloToJane,
  c: helloToBob3Times
}
