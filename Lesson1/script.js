'use strict';
const arrObj = {
	a: 'a',
	1: 'b',
	2: 'c',
};
const b = 'b';

// arrObj.b = '1234';
arrObj[b] = '1234';

console.log(arrObj['b']);
// console.log(arrObj.b);

let guest = {
	name: 'John',
	age: 30,
};

let key = 'age';

// доступ к свойству через переменную
console.log(guest[key]); // John (если ввели "name")

let user = {
	name: 'John',
	age: 30,
	isAdmin: true,
};

for (let key in user) {
	// ключи
	alert(key); // name, age, isAdmin
	// значения ключей
	alert(user[key]); // John, 30, true
}

const answer = prompt('Вам есть 18?', '');
console.log(answer + 5);

let result = '';
const length = 7;

console.log(result);
