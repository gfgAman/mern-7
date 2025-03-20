//callback:calling a function back

const add = (a,b)=>a+b

const multiply = (a,b)=>a*b
const calc = (x,y,func)=>{
    return func(x,y)
}

console.log(calc(1,2,add));
console.log(calc(10,20,multiply));