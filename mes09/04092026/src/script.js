
// 1º Desafio
const fullName00 = 'Gabriel Guembla';
const age00 = 25;
const currentDate00 = Date(Date.now());

const currentPhrase00 = `Meu nome é ${fullName00}, e tenho ${age00}. A data atual de hoje é ${currentDate00}.`;

console.log(currentPhrase00);


const firstResult00 = window.document.querySelector('.firstResult00');

firstResult00.innerHTML = currentPhrase00;


// 2º Desafio
const fullName01 = 'Gabriel Guembla';
const age01 = 25;
const studyStatus = true;

const currentPhrase01 = `Meu nome é ${fullName01}, e tenho ${age01}.\n<br>Você está estudando? ${(studyStatus) ? "Sim! ;)" : "Não! :("}.`;

console.log(currentPhrase01);


const firstResult01 = window.document.querySelector('.firstResult01');

firstResult01.innerHTML = currentPhrase01;


// 3º Desafio
const fullName02 = 'Gabriel Guembla';
const age02 = 25;
const myHeight = 1.81;
const studyStatus02 = true;
const email = 'gabrieln.miguel@hotmail.com';
const maritalStatus = null;


const currentPhrase02 = `Meu nome é ${fullName01}, e tenho ${age01} e ${myHeight}m de altura.\n<br>Você está estudando? ${(studyStatus) ? "Sim! ;)" : "Não! :("}.\n<br>Qual é o seu e-mail? Meu e-mail é ${email}.\n<br>Você é casado? ${(maritalStatus) ? "Casado! :)" : (false) ? "Solteiro! =(" : "Null"}`;

console.log(currentPhrase02);


const firstResult02 = window.document.querySelector('.firstResult02');

firstResult02.innerHTML = currentPhrase02;



// 4º Desafio
const currentPhrase03 = `15 + 8 = ${15 + 8},\n<br> 30 - 12 = ${30 - 12},\n<br> 7 * 6 = ${7 * 6},\n<br> 45 / 9 = ${45 / 9},\n<br> 17 % 5 = ${17 % 5},\n<br> 3 ** 4 = ${3 ** 4},\n<br> 36 / 6 = ${36 / 6},\n<br> 8 ** 6 = ${8 ** 6},\n<br> 88 - 24 = ${88 - 24},\n<br> 125 + 251 = ${125 + 251},\n<br>9 * 7 = ${9 * 7} e  \n<br>85 % 3 = ${85 % 3}`;

console.log(currentPhrase03);

const firstResult03 = window.document.querySelector('.firstResult02');

firstResult03.innerHTML = `Resolvendo as seguintes operações aritméticas:\n<br>` + currentPhrase03;



// 5º Desafio

console.log(`5º Dasafio\nQual será o resultado?`);

console.log(10 > 5, 'True');
console.log(3 === 3, 'True');
console.log(7 <= 5, 'False');
console.log(10 === "10", 'False');
console.log(10 !== 5, 'True');
console.log(5 != "5", 'False');

const firstResult04 = window.document.querySelector('.firstResult04');

// firstResult04.innerHTML = currentPhrase04;


// 6º Desafio

console.log(`6º Dasafio\nQual será o resultado?`);
let n1 = 4;
let n2 = 3;

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(n1 ^ n2);

const firstResult05 = window.document.querySelector('.firstResult05');

// firstResult05.innerHTML = currentPhrase05;