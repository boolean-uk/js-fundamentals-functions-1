// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementInput(input) {
  return input + 1
}

console.log(incrementInput(1))
console.log(incrementInput(2))

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitaliseStrings(string) {
  const value = string[0].toUpperCase() + string.slice(1, string.length)
  return value
}

console.log(capitaliseStrings('hello'))

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
function smileyHello(name) {
  const smileyMessage = 'Hi, ' + name[0].toUpperCase() + name.slice(1) + ' :)'
  return smileyMessage
}
console.log(smileyHello('edward'))
console.log(smileyHello('aiyana'))

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below
function findStrings(data) {
  let stringCount = 0
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string') {
      stringCount++
    }
  }
  return stringCount
}

console.log(findStrings(['edward']))
console.log(findStrings(['edward', 'aiyana']))
console.log(findStrings([1]))
console.log(findStrings([1, 'edward']))

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below
function returnObject(object) {
  if (object.edward === undefined) {
    object.edward = 'amazing'
    return object
  } else {
    return object
  }
}

console.log(returnObject({ aiyana: 'amazing' }))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementInput, // 2. change undefined to be the name of the function you defined for the second TODO)
  b: capitaliseStrings, // 1. change undefined to be the name of the function you defined for the first TODO
  c: smileyHello, // etc
  d: findStrings,
  e: returnObject
}
