// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function addOne(num) {
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
function capitalized(str) {
  return str[0].toUpperCase() + str.slice(1)
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

function niceGreetings(name) {
  return `Hi, ` + capitalized(name) + ` :)`
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

function countStringsInArray(arr) {
  let tally = 0
  if (typeof arr !== `object`) {  //filter out strings, only let arrays pass
    return 0
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === `string`) {
      tally++
    }
  }
  return tally
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

function addEdward(obj) {
  if (typeof obj === `object` && obj.edward === undefined) {
    obj.edward = `amazing`
  }
  return obj
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: addOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalized, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: niceGreetings, // etc
  d: countStringsInArray,
  e: addEdward
}
