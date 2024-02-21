// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function NumbersInBetween(lower, upper){
  const result = [];
  for (let i = lower; i <= upper; i++){
    result.push(i);
  }
  return result
}
// Test cases
console.log(NumbersInBetween(1, 3));   // Output: [1, 2, 3]
console.log(NumbersInBetween(10, 13)); // Output: [10, 11, 12, 13]
console.log(NumbersInBetween(-1, 1));  // Output: [-1, 0, 1]

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function makeUpperCaseWithExclamation(str, num) {
  return str.toUpperCase() + '!'.repeat(num);
}

// Test cases
console.log(makeUpperCaseWithExclamation('disaster', 5)); // Output: "DISASTER!!!!!"
console.log(makeUpperCaseWithExclamation('error', 10));   // Output: "ERROR!!!!!!!!!!"



// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'

// TODO: write code below
function addTimeInMinutes(time, minutes) {
  // Split the time string into hours and minutes
  const [hourStr, minuteStr] = time.split(':');
  let hour = parseInt(hourStr);
  let mins = parseInt(minuteStr);
  
  // Add the additional minutes
  let totalMinutes = hour * 60 + mins + minutes;
  
  // Calculate the new hours and minutes
  let newHour = Math.floor(totalMinutes / 60) % 24;
  let newMin = totalMinutes % 60;
  
  // Format the new time
  let formattedHour = newHour === 0 ? '00' : newHour.toString();
  let formattedMin = newMin < 10 ? '0' + newMin.toString() : newMin.toString();
  
  return `${formattedHour}:${formattedMin}`;
}

// Test cases
console.log(addTimeInMinutes('7:50', 4));    // Output: "7:54"
console.log(addTimeInMinutes('7:50', 72));   // Output: "9:02"
console.log(addTimeInMinutes('11:50', 20));  // Output: "12:10"
console.log(addTimeInMinutes('12:50', 120)); // Output: "14:50"
console.log(addTimeInMinutes('23:50', 30));  // Output: "00:20"


// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: NumbersInBetween, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: makeUpperCaseWithExclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTimeInMinutes // etc
}
