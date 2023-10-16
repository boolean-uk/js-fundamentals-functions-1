let stringtime = '23:50'
let addtime = 85
const [hour, minutes] = stringtime.split(':')
let start_h = Number(hour)
let start_m = Number(minutes)
console.log("start hours",start_h)
console.log("start mins",start_m)

// everything in minutes
let mins = start_m + (start_h * 60) + addtime
console.log("total mins",mins)

// check how many hours
let new_h = Math.floor(mins / 60)
new_h = new_h > 23 ? new_h - 24 : new_h < 10 ? '0' + new_h : new_h

// new_h = new_h > 23 ? new_h-24 : new_h
// new_h = new_h < 10 ? '0' + new_h : new_h

console.log("New hours", new_h)

// check how many minutes
let new_m = mins % 60
new_m = new_m < 10 ? '0' + new_m : new_m
console.log("New minutes", new_m)

// the new time
let newtime = new_h + ":" + new_m
console.log("new time", newtime)

// console.log(474%60)