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

function differenceArray(lowNum, highNum){
  let newArray = []
  for (i = lowNum; i <= highNum; i++){
     newArray.push(i)
  }
  return newArray
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

function warningIntensifier(string, num){
  return `${string.toUpperCase()}${'!'.repeat(num)}`
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

function timeTraveller(time, addedMins){
  //convert time input into overall minutes

  let numArr = [] // this is going to be the array that holds the time in as numbers

  let timeArr = time.split('') //Converts time input into an array
  timeArr.splice(timeArr.indexOf(':'), 1) //Splices out the colon

  for (let i = 0; i < timeArr.length; i++){ //Converts each string in the array into a number
    numArr.push(parseInt(timeArr[i]))
  }
   
  let inputMins = numArr[numArr.length-1] + (numArr[numArr.length-2] * 10) //This is finding the minutes from the input (after the colon)
  let inputHours = numArr.length === 4 ? ((numArr[0] * 10) + numArr[1]) : numArr[0]  //This is calculating the total number of hours from before colon

  let totalTime = ((inputHours * 60) + inputMins) + addedMins // This totals the original input plus the mins (in mins)
  let newHours = Math.floor(totalTime/60) //Calculates the hours that will go before the colon in output
  let newMins = totalTime % 60 //Calculates the minutes that will go after the colon in output
  
  if (newHours > 23){ //Cycles down the time to 00 (24-hour format) if the time has gone above 24 hours (00:00)
    while (newHours > 23){
      newHours -= 24
    }
  }

  if (newHours === 0){ //Adds an extra zero if hours have reached '0'
    newHours = '00'
  }

  if (newMins.toString().length < 2){ //Adds a zero before the minutes, if it is a single digit
    newMins = `0${newMins}`
  }
  
 return `${newHours}:${newMins}`
}

console.log(timeTraveller('12:40', 1))

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: differenceArray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: warningIntensifier, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: timeTraveller // etc
}
