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

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function CapitaliseAString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
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
function sayHiWithASmiley(str) {
  const temp = CapitaliseAString(str)
  return `Hi, ${temp} :)`
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
function TellMeHowManyStringsInArray(array) {
  let arrayCounter = 0
  if (array.length === 0) {
    return arrayCounter
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      arrayCounter++
    }
  }
  return arrayCounter
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
function CheckObjectForEdward(obj) {
  if (!Object.hasOwn(obj, 'edward')) {
    obj.edward = 'amazing'
    return obj
  } else {
    return obj
  }
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementNumber, // 1. change undefined to be the name of the function you defined for the first TODO
  b: CapitaliseAString, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: sayHiWithASmiley, // etc
  d: TellMeHowManyStringsInArray,
  e: CheckObjectForEdward
}
