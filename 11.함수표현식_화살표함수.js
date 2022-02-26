//함수 표현식

showError();

let showError = function(){
  console.log('error');
}

- - -
    
//함수 선언문

showError();

function showError(){
  console.log('error');
}


- - -

 //화살표 함수

let showError = () => {
  console.log("error");
}


- - - - -
  
//화살표 함수 변형

const sayHello = function(name) { 
  const msg = `Hello, ${name}`;
  console.log(msg);
};

=>

const sayHello = (name) => { 
  const msg = `Hello, ${name}`;
  console.log(msg);
};

- - - - -
  
const add = function (num1, num2) {
  const result = num1 + num2;
  return result;
}

=>

const add = (num1, num2) => {
  const result = num1 + num2
  return result;
}

=>

const add = (num1, num2) => {
  return num1 + num2;
}

=>

const add = (num1, num2) => (
  num1 + num2;
)

=>

const add = (num1, num2) => num1 + num2;
