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
