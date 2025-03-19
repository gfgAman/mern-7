// var a = 10
// {
//     var a = 100
// }
// console.log(a);

// var a = 10

// function abc(){
//     var a = 100
//     console.log(a);
// }

// abc()

// console.log(a);

//function statement

// function abc(){
//     return 'hello world'
//     console.log('hello');
// }

// const func = abc()
// console.log(func);

//function expression

// const abc = function xyz(){
//     return 'hello'
// }

// console.log(abc);

//anonymous function

// const abc = function(){
//     return 'hello world'
// }
// console.log(abc());

// const abc = ()=>'this is arrow function'

// console.log(abc());

// console.log(this);

// const abc = (a,b)=>a+b //parameters

// console.log(abc(1,2)); //arguments

// const isPrime = (numb)=>{
//     const sqrt = Math.ceil(Math.sqrt(numb))
//     console.log(sqrt)


//     for(let i=2;i<=sqrt;i++){
//         if(numb%i===0) return false
//     }
//   return true 
// }
// console.log(isPrime(101))

// console.log(Math.sqrt(100))
// const numb = 1.7
// console.log(Math.ceil(numb),'ceil')
// console.log(Math.floor(numb),'floor')


// Array methods

const arr = [1, 4, 2, 4, 2, 7, 6, 9,100]
// // 1. length

// // console.log(arr.length);


// // 2. sort
// const sortedArr = arr.sort((a,b)=>a-b);
// console.log(sortedArr);

// 3.push, pop, shift, unshift
// arr.push(10)
// console.log(arr, 'push');

// arr.pop()
// console.log(arr, 'pop');

// arr.shift()
// console.log(arr, 'shift');

// arr.unshift(100)
// console.log(arr, 'unshift');

// 4. indexOf
// console.log(arr.indexOf(100));

// 5. splice and slice
// const newArr = arr.slice(2,4)
// console.log(newArr,'slice');
// console.log(arr);

// arr.splice(2,0,12,45,88)
// console.log(arr);
// console.log(arr);

// 6. every
// const check = arr.every(i=>i>=1)
// console.log(check);

// 7. split and join
const str = 'hello there, my name is Aman'

// const newstr = str.split(',')
// console.log(newstr);
// const joinStr = newstr.join(' ')
// console.log(joinStr);

// 8. reverse

// const rev = newstr.reverse()
// console.log(rev);

const newStr = str.split('').reverse().join('')
console.log(newStr);
