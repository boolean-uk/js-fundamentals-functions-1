// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function increments(num) {
  return num + 1
}

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalises(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

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
function personName(name) {
  return `Hi, ${name.charAt(0).toUpperCase() + name.slice(1)} :)`
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
function dataArray(nStrings) {
  let countStrings = 0
  for (let i = 0; i < nStrings.length; i++) {
    if (typeof nStrings[i] === 'string') {
      countStrings = countStrings + 1
    }
  }
  return countStrings
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
function add(anObject) {
  if (Object.keys(anObject).includes('edward')) {
    return anObject
  } else {
    anObject.edward = 'amazing'
    return anObject
  }
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increments, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalises, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: personName, // etc
  d: dataArray,
  e: add
}
