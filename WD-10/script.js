// const a = 10
// const b = '56789'

// console.log(a==b);
// console.log(a===b);

// NaN=>not a number

// console.log(isNaN(a));

// console.log(isNaN(b));

// console.log(typeof a);
// console.log(typeof b);

// type coercion=> it is a phenomenon in js
// which convert one data type to another
// deep down js engine

// const c='33'+3
// console.log(c); //333 , invalid
// console.log(typeof c);
// console.log(33+'3');
// console.log(33-'3');
// console.log('33'-'3');
// console.log('33'-3);

// console.log(typeof isNaN());

// console.log(typeof Number('bcjvsbdjn'))
// console.log(typeof toString(6789));

// const a = 10
// const b = '10'

// console.log(a===b);=>value=>true, 
// datatype=>false
// console.log(a!==b);
// =>value=>true,datatype=>false

// console.log(isNaN(10))


// AND or OR

// a    b     OR(||)
// 0    0      0
// 0    1      1
// 1    0      1
// 1    1      1

// 0=>false; 1=>true

// const a = 100
// const b = 10000
// console.log(a||b);

// a       b       AND(&&)
// 0       0       0
// 0       1       0
// 1       0       0
// 1       1       1

// const a = 100
// const b = 10
// console.log(a&&b);


// const numb = 45


// console.log(numb%7===0);
// console.log(numb%2===0||numb%7===0) 
// => 1 0 0

// let a = 10
// console.log(a, 'before increment');
// a = a + 1000
// a+=100
// console.log(a);
// console.log(a, 'after increment');

// a++=>assign operation=>post increment
// ++a=>opeation assign=>pre increment

// console.log(a++);
// console.log(a);


const numb = 95

numb % 4 === 0 ? console.log('divisible by 4') : numb % 5===0 ? console.log('divisible by 5') : console.log('divisible by nothing')
