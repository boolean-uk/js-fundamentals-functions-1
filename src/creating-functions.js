// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementNumber(num) {
  return num + 1
}
incrementNumber(55)
// 2. Define a function that capitalises any string
function capitalises(lowerCaseWord) {
  return lowerCaseWord[0].toUpperCase() + lowerCaseWord.slice(1)
}
capitalises('macbook')
// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

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
function firstName(name) {
  return `Hi, ${name[0].toUpperCase() + name.slice(1)} :)`
}
firstName('tim')
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
function stringsInArray(array) {
  let numberOfStrings = 0
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      numberOfStrings = numberOfStrings + 1
    }
  }
  return numberOfStrings
}
stringsInArray('edward', 'aiyana', 'tim', 23)

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
function propertyObject(objectParameter) {
  if (Object.keys(objectParameter).includes('edward')) {
    return objectParameter
  } else {
    objectParameter.edward = 'amazing'
    return objectParameter
  }
}
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementNumber, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalises, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: firstName, // etc
  d: stringsInArray,
  e: propertyObject
}
