// 함수 작성

function showError(){
  alert('에러가 발생했습니다. 새로고침 해주세요.')
}

showError();

- - - - -
  
// 매개변수가 있는 함수


function sayHello(name){
  const msg = `Hello, ${name}`;
  console.log(msg);
}

sayHello('Mike');
sayHello('Tom');
sayHello('Jane'); 


- - -
  
function sayHello(name){
  let msg = 'Hello';
  if(name){
    msg += ` , ${name}`;
  }
  console.log(msg);
}

sayHello();
sayHello('Mike');

- - - 
  
let msg = 'Hello'; //전역 변수 (global varable)
console.log('함수 호출 전')
console.log(msg)

function sayHello(name){
  if(name){
    msg += ` , ${name}`;
  }
  console.log('함수 내부')
  // 지역 변수 (local varable)
  console.log(msg);
}

sayHello('Mike');
console.log('함수 호출 후')
console.log(msg)

- - - - -

  // 전역 변수와 지역 변수

let msg = "welcome";
console.log(msg)

function sayHello(name){
  let msg = "Hello"
  console.log(msg + ' ' + name);
}

sayHello('Mike');
console.log(msg)

- - -
  
let msg = "Mike";

function sayHello(name){
  console.log(name)
}

sayHello();
sayHello('Jane')

- - -
  
// OR


function sayHello(name){
  let newName = name || 'friend';
  let msg = `Hello, ${newName}`
  console.log(msg)
}

sayHello();
sayHello('Jane');


- - - 
  
// default


function sayHello(name = 'friend'){
  let msg = `Hello, ${name}`
  console.log(msg)
}

sayHello();
sayHello('Jane');

- - - - -
  
// return 으로 값 변환


function add(num1, num2){
  return num1 + num2;
}

const result = add(2,3);
console.log(result)


- - -
  

function showError(){
  alert('에러가 발생했습니다.');
  return;
  alert('이 코드는 절대 실행되지 않습니다.')
}
const result = showError();
console.log(result);
  
