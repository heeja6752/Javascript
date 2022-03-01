
//array

let days = ["mon", "tue", "wed"];

days[1] = '화요일'

console.log(days)


- - -
  

let days = ["mon", "tue", "wed"];

days[1] = '화요일'

console.log(days.length)

- - -
  
  
let days = ["mon", "tue", "wed"];

days.push('thu')

console.log(days);


- - -
  

let days = ["mon", "tue", "wed"];

days.push("thu")

days.unshift("sun")

console.log(days);


- - - - -
  
//for문
  
let days = ["mon", "tue", "wed"];

days.push("thu")

days.unshift("sun")

for(let index=0;index<days.length;index++){
  console.log(days[index]);
}

- - -

let days = ["mon", "tue", "wed"];

days.push("thu")

days.unshift("sun")

for(let day of days) {
  console.log(day);
}

- - -
  
let days = ["mon", "tue", "wed"];

days.push("thu")

days.unshift("sun")

for(let x of days) {
  console.log(x);
}
