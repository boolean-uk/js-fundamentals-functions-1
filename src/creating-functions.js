/* eslint-disable prettier/prettier */
// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function addition(number) {
  return number + 1
}
console.log(addition(1))

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalise(word) {
  const modifiedWord = word[0].toUpperCase()
  const newWord = modifiedWord + word.slice(1)
  return newWord
}
console.log(capitalise('hello'))

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
function nameWithSmilly(name) {
  const modifiedName = name[0].toUpperCase()
  const newName = 'Hi, ' + modifiedName + name.slice(1) + ' :)'
  return newName
}
console.log(nameWithSmilly('edward'))
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
function amountOfStrings(array) {
  let amount = 0
  for (let x = 0; x < array.length; x++) {
    if (typeof array[x] === 'string'){
      amount += 1
    }
  }
  return amount
}
console.log(amountOfStrings(['fhff', '1']))
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
function edwardIsAmazing(name) {
  if (name.edward === undefined) {
      name.edward = 'amazing'
  }
  return name
}
console.log(edwardIsAmazing({ edward: 'amazing' }))
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: addition, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalise, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: nameWithSmilly, // etc
  d: amountOfStrings,
  e: edwardIsAmazing
}
