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
let num = 5; 
let numResult = incrementNumber(num);
console.log(numResult);

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

function cap(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
 console.log(cap("hello"));

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

function Smiley(name) {
  const caps = name.charAt(0).toUpperCase() + name.slice(1);
  const greeting = "Hi, ";
  const Smiley = greeting + caps + " :)";
  return Smiley;
  
}

const name = "Edward";
const greeting = "Hi, ";
const nameSmiley = Smiley(greeting + name);
console.log(nameSmiley);

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

function strings(array0) {
  let countstring = 0;
  for (let i = 0; i < array0.length; i++) {
    if (typeof array0[i] === 'string') {
      countstring++;
    }
  }
  return countstring;
}

console.log(strings(['edward']));
console.log(strings(['edward', 'aiyana']));

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
function EdwardProperty(object) {
  if (!object.hasOwnProperty('edward')) {
    object.edward = 'amazing';
  }
  return object;
}
let object1 = {};
let object2 = { aiyana: 'fantastic' };
let object3 = { edward: 'fabulous' };

console.log(EdwardProperty(object1)); 
console.log(EdwardProperty(object2)); 
console.log(EdwardProperty(object3));



// TODO: change each undefined below to be the name of the functions you defined

module.exports = {
  a: incrementNumber, // 1. change undefined to be the name of the function you defined for the first TODO
  b: cap, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: Smiley, // etc
  d: strings,
  e: EdwardProperty
}
