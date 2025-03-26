// 1. Print your name and check pallindrome

// const printYourName = (str)=>{
//     const newStr = str.split(' ').reverse().join(' ')
// return newStr===str
// }
// const str = 'naman'

// console.log(printYourName(str));


// 2. Anagram

// const checkAnagram = (str1,str2)=>{
//     if(str1.length!==str2.length)
//         return false

//     const sortedStr1 = str1.split('').sort().join('')
//     const sortedStr2 = str2.split('').sort().join('')

//     return sortedStr2===sortedStr1
// }
// const str1 = 'hellb'
// const str2 = 'hloel'
// console.log(checkAnagram(str1,str2));


// 3. First character of your name

// const findCharacters = (myName) => {

//     return myName.split(' ').map(word => word[0].toUpperCase()).join('')
// }
// const myName = 'Aman Something'
// console.log(findCharacters(myName));

// 4. Sentence case

// input=> 'hello my name is aman'
// output=> 'Hello My Name Is Aman'

// const findCharacters = (myName) => {

//     return myName.split(' ').map(word =>word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
// }
// const myName = 'aman something'
// console.log(findCharacters(myName));


// const obj = [{
//     name:'aman',
//     age:12,
//     isStudent:true,
//     hobbies:['a','b','c']
// },
// {
//     name:'raman',
//     age:10,
//     isStudent:false,
//     hobbies : ['d','e','f']
// },
// {
//     name:'vikas',
//     age:120,
//     isStudent:true,
//     hobbies: ['e','w','q']
// },
// {
//     name:'shivam',
//     age:20,
//     isStudent:false,
//     hobbies: ['t','y','u']
// },
// {
//     name:'saurabh',
//     age:35,
//     isStudent:true,
//     hobbies: ['z','e','g']
// },]

// const mapArr = obj.map(({name,age})=>console.log(name,age))

// const {name,age} = newObj

// console.log(name,age);

// const sortName = obj.sort((a,b)=>a.name.localeCompare(b.name))
// console.log(sortName);

// const arr = [0,4,7,1,8]
// console.log(arr[3]);
// for(let i in arr){
    //     console.log(arr[i]);
// }

// for(let i of arr){
    //     console.log(i);
    // }
    
    // const findOccurance = (str)=>{
    //         const newStr = str.split(' ').join('')
    //         const hashedObj = {}
        
    //         for(let char of newStr){
    //                 if(!hashedObj[char])
    //                     hashedObj[char] =1
    //                 else hashedObj[char]+=1
    //             }

    //             // return hashedObj
                
    //             for(let [key,value] of Object.entries(hashedObj)){
    //                 if(value>1){
    //                     return key
    //                 }
    //             }
    //         }
    //         const str = 'hello world'
    //         console.log(findOccurance(str))
            
            // const newObj = {
            //     name:'saurabh',
            //     age:35,
            //     isStudent:true,
            //     hobbies: ['z','e','g']
            // }
            
            // console.log(Object.entries(newObj));