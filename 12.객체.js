const superman = {
  name : 'clark',
  age : 33,
}

- - -
      
//객체

const superman = {
  name : 'clark',
  age : 30,
}

console.log(superman)
console.log(superman['age'])

- - -
//추가

const superman = {
  name : 'clark',
  age : 30,
}


superman.hairColor = 'black';
superman['hobby'] = 'football' 
console.log(superman)


- - -
//삭제
  
const superman = {
  name : 'clark',
  age : 30,
}


delete superman.age;
console.log(superman)
