//function returning another function

// function a(q){
//     return function(w){
//         return function(e){
//             return q+w+e
//         }
//     }
// }

// console.log(a(1)(2)());

const arr = [1, 2, 3, 4]

//map
// const mapArr = arr.map(i=>i>2)
// console.log(mapArr);

//filter
// const filerArr = arr.filter(i=>i%2===0)
// console.log(filerArr);
// console.log(arr);

//reduce

//acc=>sum, curr=>i
// const reduceVal = arr.reduce((acc,curr)=>{
//     acc = acc+curr
//     return acc
// },0)
// console.log(reduceVal);

//foreach
// const a = arr.forEach(i=>console.log(i))
// console.log(a);
// const b = arr.map(i=>console.log(i))
// console.log(b)
// const cart = [
//     {
//         item_name: '1',
//         price: 210
//     },
//     {
//         item_name: '2',
//         price: 210
//     },
//     {
//         item_name: '3',
//         price: 210
//     },
//     {
//         item_name: '4',
//         price: 210
//     },
//     {
//         item_name: '5',
//         price: 210
//     },
//     {
//         item_name: '6',
//         price: 210
//     },
// ]

// const iterate = cart.map()

//destructuring
const obj = {
    username:'aman',
    age:67890
}
const {username,age} = obj
console.log(username,age);