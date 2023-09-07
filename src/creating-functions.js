// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function incrementByOne(numOne){
  return ++numOne
}

// 2. Define a function that capitalizes any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function capitalized(stringValue){
  const capValue = stringValue.charAt(0).toUpperCase()+stringValue.slice(1)
  return capValue
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
function capitalizedString(givenValue){
  const capValue1 = givenValue.charAt(0).toUpperCase()+givenValue.slice(1)
  return `Hi, ${capValue1} :)`
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
function stringHowMany(givenData){
  let numCount = 0
  givenData.forEach((element)=>{if(typeof element === 'string') numCount++})
  return numCount
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
function addObjects(takenObject){
  if(!takenObject.edward) takenObject.edward = 'amazing'
  return takenObject
}
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementByOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalized, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: capitalizedString, // etc
  d: stringHowMany,
  e: addObjects
}
