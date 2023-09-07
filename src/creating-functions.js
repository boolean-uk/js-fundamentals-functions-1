// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incriment(num) {
  num++
  return num
}

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello
function capitalises(string) {
  const newString = string[0].toUpperCase() + string.slice(1, string.length)
  return newString
}
console.log(capitalises('hi'))

// TODO: write code below

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
function smile(name) {
  //  name[0] = name[0].toUpperCase()
  const capName = name[0].toUpperCase() + name.slice(1, name.length)
  const output = 'Hi, ' + capName + ' :)'
  return output
}

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
function stringCount(array) {
  let counter = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      counter++
    }
  }
  return counter
}

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
function edwardKey(object) {
  if (object.edward !== undefined) {
    return object
  } else {
    object.edward = 'amazing'
    return object
  }
}

console.log(edwardKey({ edward: 'fabuloo=s' }))
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incriment, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalises, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smile, // etc
  d: stringCount,
  e: edwardKey
}
