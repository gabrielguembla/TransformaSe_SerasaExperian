
// 1º Desafio
console.log(`1º Dasafio\n`);
const fullName00 = 'Gabriel Guembla';
const age00 = 25;
const currentDate00 = Date(Date.now());

const currentPhrase00 = `Meu nome é ${fullName00}, e tenho ${age00}. A data atual de hoje é ${currentDate00}.`;

console.log(currentPhrase00);


const firstResult00 = window.document.querySelector('.firstResult00');

firstResult00.innerHTML = currentPhrase00;


// 2º Desafio
console.log(`2º Dasafio\n`);
const fullName01 = 'Gabriel Guembla';
const age01 = 25;
const studyStatus = true;

const currentPhrase01 = `Meu nome é ${fullName01}, e tenho ${age01}.\n<br>Você está estudando? ${(studyStatus) ? "Sim! ;)" : "Não! :("}.`;

console.log(currentPhrase01);


const firstResult01 = window.document.querySelector('.firstResult01');

firstResult01.innerHTML = currentPhrase01;


// 3º Desafio
console.log(`3º Dasafio\n`);
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
console.log(`4º Dasafio\nExiba no console as seguintes oprações aritméticas:`);
const currentPhrase03_1 = 
`15 + 8 = ${15 + 8},<br>
30 - 12 = ${30 - 12},<br>
7 * 6 = ${7 * 6},<br>
45 / 9 = ${45 / 9},<br>
17 % 5 = ${17 % 5},<br>
3 ** 4 = ${3 ** 4},<br>
36 / 6 = ${36 / 6},<br>
8 ** 6 = ${8 ** 6},<br>
88 - 24 = ${88 - 24},<br>
125 + 251 = ${125 + 251},<br>
9 * 7 = ${9 * 7},<br>
5 % 3 = ${85 % 3}`;

const currentPhrase03_2 = 
`15 + 8 = ${15 + 8},\n
30 - 12 = ${30 - 12},\n
7 * 6 = ${7 * 6},\n
45 / 9 = ${45 / 9},\n
17 % 5 = ${17 % 5},\n
3 ** 4 = ${3 ** 4},\n
36 / 6 = ${36 / 6},\n
8 ** 6 = ${8 ** 6},\n
88 - 24 = ${88 - 24},\n
125 + 251 = ${125 + 251},\n
9 * 7 = ${9 * 7},\n
5 % 3 = ${85 % 3}`;

console.log(currentPhrase03_2);

const firstResult03 = window.document.querySelector('.firstResult03');

firstResult03.innerHTML = `Resolvendo as seguintes operações aritméticas:<br> ${currentPhrase03_1}`;



// 5º Desafio

console.log(`5º Dasafio\nQual será o resultado?`);




const currentPhrase04_1 =
`O valor de 10 > 5 é ${10 > 5} | ${true}<br>
O valor de 3 === 3 é  ${3 === 3} | ${true}<br>
O valor de 7 <= 5 é ${7 <= 5} | ${false}<br>
O valor de 10 === "10" é ${10 === "10"} | ${false}<br>
O valor de 10 !== 5 é ${10 !== 5} | ${true}<br>
O valor de 5 != "5" é ${5 != "5"} | ${false}`;

const currentPhrase04_2 = `
O valor de 10 > 5 é ${10 > 5} | ${true}\n
O valor de 3 === 3 é  ${3 === 3} | ${true}\n
O valor de 7 <= 5 é ${7 <= 5} | ${false}\n
O valor de 10 === "10" é ${10 === "10"} | ${false}\n
O valor de 10 !== 5 é ${10 !== 5} | ${true}\n
O valor de 5 != "5" é ${5 != "5"} | ${false}`;

// console.log(10 > 5, 'True');
// console.log(3 === 3, 'True');
// console.log(7 <= 5, 'False');
// console.log(10 === "10", 'False');
// console.log(10 !== 5, 'True');
// console.log(5 != "5", 'False');

const firstResult04 = window.document.querySelector('.firstResult04');

firstResult04.innerHTML = currentPhrase04_1;
console.log(currentPhrase04_2);

// 6º Desafio

console.log(`6º Dasafio\nQual será o resultado?`);
let n1 = 4;
let n2 = 3;


const currentPhrase05_1 = `Calculadora<br>
${n1} + ${n2} = ${n1 + n2}<br>
${n1} - ${n2} = ${n1 - n2}<br>
${n1} * ${n2} = ${n1 * n2}<br>
${n1} / ${n2} = ${n1 / n2}<br>
${n1} % ${n2} = ${n1 % n2}<br>
${n1} ^ ${n2} = ${n1 ^ n2}<br>`;

const currentPhrase05_2 = `Calculadora<br>
${n1} + ${n2} = ${n1 + n2}\n
${n1} - ${n2} = ${n1 - n2}\n
${n1} * ${n2} = ${n1 * n2}\n
${n1} / ${n2} = ${n1 / n2}\n
${n1} % ${n2} = ${n1 % n2}\n
${n1} ^ ${n2} = ${n1 ^ n2}\n`;


// console.log(n1 + n2);
// console.log(n1 - n2);
// console.log(n1 * n2);
// console.log(n1 / n2);
// console.log(n1 % n2);
// console.log(n1 ^ n2);

console.log(currentPhrase05_2);

const firstResult05 = window.document.querySelector('.firstResult05');

firstResult05.innerHTML = currentPhrase05_1;