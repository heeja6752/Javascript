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

- - -
//줄임, ture, false
  
function makeObject(name, age){
  return{
    name,
    age,
    hobby : 'football'
  }
}

const Mike = makeObject("Mike",30);
console.log(Mike);

console.log("age" in Mike);
console.log("birthday" in Mike);


- - - - -
  

//객체 in

function isAdult(user){
  if(!('age' in user) ||
    user.age < 20) {
    return false;
  }
  return true;
}

const Mike = {
  name: "Mike",
  age: 30
};

const Jane = {
  name: "Jane"
};

console.log(isAdult(Jane))

- - -
  
// 객체 for ... in

const Mike = {
  name: "Mike",
  age : 30
};

for (x in Mike){
  console.log(Mike[x]) //Mike['age']
}
