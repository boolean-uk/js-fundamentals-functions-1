// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function addOne(numberOne) {
  return numberOne + 1
}

addOne()
console.log('Test 1', addOne(4))

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitaliseString(aString) {
  return aString.charAt().toUpperCase() + aString.slice(1)
}
console.log(capitaliseString('boolean'))

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

function nameWithSmiley(name) {
  return `Hi, ${capitaliseString(name)} :)`
}

console.log(nameWithSmiley('Edward'))

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

function howManyStrings(array) {
  const newArray = []
  for (let i = 0; i <= array.length; i++) {
    if (typeof array[i] === 'string') {
      newArray.push(array[i])
    }
  }
  return newArray.length
}
console.log(
  'test 2 -',
  howManyStrings(['edward', 'aiyana', 'ian', 4, 'carol', 7])
)

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist
// with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below

const anBobject = {
  first: 1,
  edward: 'amazing'
}

function gotEd(anBobject) {
  let propertyEdward = 'edward' in anBobject
  console.log('is ed there? -', propertyEdward)

  if (propertyEdward === false) {
    anBobject.edward = 'amazing'
    console.log('is ed there now?', anBobject)
  }
  return anBobject
}
console.log('are we there yet? -', gotEd(anBobject))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: addOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitaliseString, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: nameWithSmiley, // etc
  d: howManyStrings,
  e: gotEd
}
