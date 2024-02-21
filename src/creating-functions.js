// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function addOne(number) {
  return number + 1
}
console.log(addOne(6))
// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function getCapialised(word) {
  return word[0].toUpperCase() + word.substring(1, word.length)
}
console.log(getCapialised('hamada'))

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
function smilyName(name) {
  return `Hi, ${
    name[0].toUpperCase() + name.substring(1, name.length).toLowerCase()
  } :)`
}
console.log(smilyName('Hamada'))

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
function numberOfStrings(array) {
  const stringsFound = []
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') stringsFound.push(array[i])
  }
  return stringsFound.length
}
console.log(numberOfStrings(['milk', 2, true, 'apple', 'orange']))

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

function addNewProperty(object) {
  let key
  for (const prop in object) {
    if (prop === 'edward') {
      key = true
    }
  }
  if (key) {
    return object
  }
  object.edward = 'amazing'
  return object
}
console.log(addNewProperty({ aiyana: 'fantastic' }))

// TODO: change each undefined below to be the name of the functions you defined

module.exports = {
  a: addOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: getCapialised, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smilyName, // etc
  d: numberOfStrings,
  e: addNewProperty
}
