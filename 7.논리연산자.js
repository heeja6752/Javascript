// OR
// 이름이 TOM 이거나, 성인이면 통과

const name = "Mike";
const age = 30;

if(name==='Tom' || age > 19){
  console.log('통과');
}

- - - - -
  
// AND
// 이름이 Mike이고, 성인이면 통과

const name = "Mike";
const age = 30;  //10

if(name==='Mike' && age > 19){
  console.log('통과');
} 
else {
  console.log('돌아가.')
}

- - - - -
// NOT
// 나이를 입력받아 성인 아니면 돌아가라고..

const age = prompt('나이가..?')
const isAge = age > 19;

if(!isAge){
  console.log('돌아가..')
}

console.log('---------')
