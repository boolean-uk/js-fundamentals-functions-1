// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

// Plan
// Function that takes a number and increment by 1

function increment(num) {
  return num + 1
}

console.log(increment(1)) // 2
console.log(increment(2)) // 3

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code

// Plan
// Capitalise any string

function capitaliseString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

console.log(capitaliseString('hello')) // Hello
console.log(capitaliseString('world')) // World
console.log(capitaliseString('Hello')) // Hello

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

// We want enter a name but add hi at the beginning and smiley at the end
// but has to have a capital first letter on name

function nameAndSmiley(name) {
  const firstLetterCapital = name.charAt(0).toUpperCase() + name.slice(1)

  return `Hi, ${firstLetterCapital} :)`
}

console.log(nameAndSmiley('edward'))
console.log(nameAndSmiley('aiyana'))

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

// Plan
// count the amount of strings within an array
// create a count variable after the function and before the loop
// use a function and then a loop to loop through the arrays

function countingStringsInArr(arr) {
  // Create counter, set to 0
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      count++
    }
  }
  return count
}
console.log(countingStringsInArr(['edward']))
console.log(countingStringsInArr(['edward', 1]))


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

// function that passes through object
// adds a property 'edward' : 'amazing' if it does exist then add 'amazing'

function addingPropertyAndValue(obj) {
  if (!obj.hasOwnProperty('edward')) {
    obj.edward = 'amazing'
  }
  return obj
}
console.log(addingPropertyAndValue({}))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: increment, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitaliseString, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: nameAndSmiley, // etc
  d: countingStringsInArr,
  e: addingPropertyAndValue
}
