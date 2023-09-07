// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementBy1 (num) {
  return num+1
}
// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitaliseString (str) {
  const firstLetter = str[0].toUpperCase()
  const restLetters = str.slice(1)
  return `${firstLetter}${restLetters}`
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
function smiley (name) {
  const firstLetter = name[0].toUpperCase()
  const restLetters = name.slice(1)
  const sentence = `Hi, ${firstLetter}${restLetters} :)`

  return sentence
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
function stringCheck (arr) {
  let counter = 0
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] === 'string') {
      counter += 1
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
function addEdward (obj) { 
  const keys = Object.keys(obj)
  if (keys.includes('edward') === false) {
    obj.edward = 'amazing'
  }
  return obj
}
console.log(addEdward({edward: 'fabulous'}))

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementBy1, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitaliseString, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smiley, // etc
  d: stringCheck,
  e: addEdward
}
