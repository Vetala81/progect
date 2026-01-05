"use strict" ;

//alert ('hello');

//const result = confirm('Are you hear ?');
//console.log(result);

//const answer = +prompt('Вам есть 18?', '18');
//console.log(typeof(answer));
/*
const answers = [];

answers[0] = prompt('Как ваше имя', '');
answers[1] = prompt('Как ваша фамилия ', '');
answers[2] = prompt('Какой ваш номер телефона', '');

console.log(typeof(answers));




/*
const arr = ['a', 'b', 'c'];
const objNew = {
    0: 'a',
    1: 'b',
    2: 'c'
};

const b = 'b'
//objNew.b = '1231';
objNew[b] = '1231';

console.log(objNew ['b']);

//const obj = {a: 1, b: 2};

const obj = {
    Anna: 500,
    'Alica': 800
};
console.log(obj);


/*
const obj = {
    name: 'John',
    age: 24,
    isMarryed: false
};



console.log(obj.age);
console.log(obj ['isMarryed']);

let arr = ['plan.png', 'apple.bmp', 6, 'orange.jpg', {}, []];

console.log(arr[1])





const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Vet' ;

alert(`Hello ${user}`);
*/
/*
let incr = 10,
    decr = 10;

//++incr;
//--decr;

console.log(++incr);
console.log(--decr);


const isCheked = false,
      isClose = false ;
      
console.log(isCheked || !isClose);  
*/
/*
let num = 50;
/*
while (num < 55) {
    console.log(num);
    num++;
};
*/
/*
for ( let i = 1; i < 8; i++ ) {
    
    if (i === 6) {
       // break;
       continue;
    }
    console.log(i);
    
}
    */
/*
for (let i = 0; i < 3; i++){
    console.log(i);
    for (let j = 0; j < 3; j++){
    console.log(j);
    }
}
*/

/*
let result = '';
const lenght = 10;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++ ){
        result += '*';
    }
    result += '\n';
}

console.log(result);

*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMuvieDB = {
    count: numberOfFilms,
    muvies: {},
    actors: {},
    genres: [],
    privat:false,
};



const a = prompt('Один из последних фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMuvieDB.muvies[a] = b;
personalMuvieDB.muvies[c] = d;

console.log(personalMuvieDB);