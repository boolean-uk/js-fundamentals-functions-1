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
const fillNums = (min, max) => {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
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
const screamAndShout = (words, num) => {
  return words.toUpperCase() + '!'.repeat(num);
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
const toTime = (time, increment) => {
  const temp = time.split(':');
  let h = Number(temp[0]);
  let m = Number(temp[1]) + Number(increment);
  
  h += Math.floor(m / 60);
  h = h % 24;
  m = m % 60;

  if ( h == 0 ) h = String("0" + h);
  if ( m < 10 ) m = String("0" + m);

  return h + ':' + m;
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: fillNums, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: screamAndShout, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: toTime // etc
}
