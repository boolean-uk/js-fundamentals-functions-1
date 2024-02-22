// 1. Define a function that takes a number and increments it by 1.

function incrementNumber(num){
return num + 1;

}
console.log(incrementNumber(2))
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

// 2. Define a function that capitalises any string
function capitalizeFirstLetter(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  
}
const sentence = "hello world";
const capitalizedSentence = capitalizeFirstLetter(sentence);
console.log(capitalizedSentence)
// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

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
function capitalizeFirstLetters(str) {
  
  const capitalizedName = str.charAt(0).toUpperCase() + str.slice(1);
  return `Hi, ${capitalizedName} :)`;
}
console.log(capitalizeFirstLetters('edward'));
console.log(capitalizeFirstLetters('Aiyana')); 
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
function countStrings(str){
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (typeof str[i] === 'string') {
      count++; 
    }
  }
  return count;
}
const str = ["hello", "world"];
const numStrings = countStrings(str);
console.log("Number of strings:", numStrings);

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// Here is my implementation below: try and edit and add to this to make it work.
function facts(read){
  if( read.edward === undefined || read.edward !== 'fabulous' || read.edward === null){
    read.edward = 'amazing';
  }
  return read;
}
console.log(facts({})); 
console.log(facts({ aiyana: 'fantastic' }));
console.log(facts({ edward: 'fabulous' })); 
// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: incrementNumber, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalizeFirstLetter, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: capitalizeFirstLetters, // etc
  d: countStrings,
  e: facts
}
