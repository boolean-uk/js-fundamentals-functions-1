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
function func1(lower, upper)
{
  let arr = []
  for (let i = lower; i <= upper; i++)
  {
    arr.push(i)
  }
  return arr

}

console.log(func1(1, 10))

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
function func2(string, nums)
{
  string = string.toUpperCase();
  for (let i = 0; i < nums; i++)
  {
    string += '!'
  }
  return string
} 
console.log(func2('disaster', 3))
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
function func3(timeStr, additionalMinutes) {
  // Parse the input time string to extract hour and minute components
  const [hourStr, minuteStr] = timeStr.split(':');
  let hour = parseInt(hourStr);
  let minute = parseInt(minuteStr);
  
  // Add the additional time in minutes
  minute += additionalMinutes;

  // Adjust the hour component if necessary
  hour += Math.floor(minute / 60);
  minute %= 60;

  // Ensure the hour component remains within the range of 0 to 23
  hour %= 24;

  // Format the hour and minute components into the desired time format
  //const formattedHour = hour.toString();
  //const formattedMinute = minute.toString();
  const formattedHour = hour < 1 ? '0' + hour : hour.toString();
  const formattedMinute = minute < 10 ? '0' + minute : minute.toString();

  return formattedHour + ':' + formattedMinute;
}


// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: func1, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: func2, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: func3 // etc
}
