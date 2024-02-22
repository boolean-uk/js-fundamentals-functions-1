// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

function incrementByOne(number){
  return number + 1
}
console.log(incrementByOne(1))
console.log(incrementByOne(2))

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalizeStrings(string){
  return string.charAt(0).toUpperCase() + string.slice(1)
}

console.log(capitalizeStrings("hello"))
console.log(capitalizeStrings("world"))


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

function greetWithSmiley(name) {
  // Capitalize the first letter of the name
  const capitalized_name = name.charAt(0).toUpperCase() + name.slice(1);
  // Add a smiley face to the capitalized name
  return `Hi, ${capitalized_name} :)`
}

console.log(greetWithSmiley("edward"))
console.log(greetWithSmiley("Aiyana"))


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
function countString(array){
  let count = 0;
  for (let i = 0; i < array.length; i++){
    if (typeof array[i] ==='string'){
      count++
    }
  }
  return count
}

console.log(countString(['edward']))
console.log(countString(['edward', 'aiyana']))
console.log(countString(['1']))
console.log(countString(['1', 'edward']))

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
function addEdwardProperty(obj){
  if (!obj.hasOwnProperty('edward')){
    obj.edward = 'amazing'
  }
  return obj
}

console.log(addEdwardProperty({})); 
console.log(addEdwardProperty({ aiyana: 'fantastic' })); 
console.log(addEdwardProperty({ edward: 'fabulous' })); 

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementByOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalizeStrings, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: greetWithSmiley, // etc
  d: countString,
  e: addEdwardProperty
}
