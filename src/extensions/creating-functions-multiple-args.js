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
function betweenNumbers(lower,upper){
const arr=[]
for(let i=lower;i<=upper;i++){
arr.push(i)
}
return arr;
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
function scream(str,num){
str=str.toUpperCase()
for(let i=0;i<num;i++){
  str+='!'
}
return str
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
function addTime(str,num){
  
  time=str.split(":")
  hours=parseInt(time[0])
  minutes=parseInt(time[1])
 
  minutes+=num
  newhours=Math.floor(minutes/60)
  newminutes=minutes%60
  hours+=newhours
  console.log(minutes,newhours,newminutes,hours)
  if(hours>24){
    hours=hours%24
  }
  result=''
  if(hours==24){
    hours=0
    result+='0'
  }
  result+=hours+':'
  if(newminutes<10){
    result+='0'
  }
  result+=newminutes
  return result
}
// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: betweenNumbers, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: scream, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: addTime // etc
}
