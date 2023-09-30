// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function AddNumberByOne(input) {
  return input + 1;
}

const Addnumber = AddNumberByOne(7)
console.log(Addnumber)

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below
function CapitalizedString(TurnToString) {
  return TurnToString.charAt(0).toUpperCase() + TurnToString.slice(1).toLowerCase();
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
function Smiley(PersonName) {
  const capitalized = CapitalizedString(PersonName);
  return `Hi, ${capitalized} :)`;
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
function ReturnNumberOfArray(Array_Of_Data) {
  let count = 0;
  for (const item of Array_Of_Data) {
    if (typeof item === 'string') {
      count++;
    }
  }
  return count;
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
const empty_object = {}

function AddObject(obj) {
  if (!obj.hasOwnProperty('edward')) {
    obj.edward = 'amazing';
  }
  return obj;
}



// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: AddNumberByOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: CapitalizedString, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: Smiley,                // etc
  d: ReturnNumberOfArray,
  e: AddObject,
};

