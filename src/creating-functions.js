// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below


function incrementByOne(num) {
  return num += 1
}
console.log(incrementByOne(1))

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalizeStrings(string) {
  let firstLetter = string.charAt(0).toUpperCase()
  let restOfIt = string.slice(1)
  return firstLetter + restOfIt
  console.log(restOfIt)
}
console.log(capitalizeStrings("test"))

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
function smiley(smileText) {

  let firstLetter = smileText.charAt(0).toUpperCase()
  let restOfIt = smileText.slice(1)
  let capitalizedName = firstLetter + restOfIt
  return ("Hi, " + capitalizedName + " :)")

}
console.log(smiley("test"))


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
function stringChecker(data) {
  let stringCounter = 0
  console.log(data)
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] === 'string') {
      stringCounter++
    }

  }
  console.log(stringCounter)
  return stringCounter

}
stringChecker(2, "test")

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
function edwardChecker(data) {
  // var objLength = Object.values(data).length;
  // let objectKeys = Object.keys(data)
  // for (let i = 0; i < objLength; i++) {
  // }
  if (data.edward) {
    console.log('do nothing')
  } else {
    data.edward = "amazing"
  }

  return data

}

edwardChecker({ edward: 'amazing' })


// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementByOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalizeStrings, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smiley, // etc
  d: stringChecker,
  e: edwardChecker
}
