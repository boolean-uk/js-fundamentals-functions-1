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
function Range(lower, upper){
  let result = []
  for(let i = lower; i <= upper; i++)
    result.push(i)
  return result
}

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
function Yell(text, numExclamations){
  return text.toUpperCase() + '!'.repeat(numExclamations);
}

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
function addMinutesToTime(timeString, minutes) {
  const [hoursStr, minutesStr] = timeString.split(':');
  let hoursInt = parseInt(hoursStr);
  let minutesInt = parseInt(minutesStr);

  minutesInt += minutes;
  hoursInt += Math.floor(minutesInt / 60);

  hoursInt %= 24;
  minutesInt %= 60;

  const formattedHours = (hoursInt == 0) ? "00" : hoursInt.toString()
  const formattedMinutes = minutesInt.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: Range, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: Yell, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addMinutesToTime // etc
}
