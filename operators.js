let x=10,y=15;
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)
//assignment operators
let z=5;
z+=3;
console.log(z)
z-=4;
console.log(z)
z*=2;
console.log(z)
//comparision operators
let a=10,b="10";
console.log(a==b)
console.log(a!=b)
console.log(a===b)
console.log(a!==b)
console.log(a<=b)
console.log(a>=b)
console.log(a>b)
console.log(a<b)
//logical operators
let age=15;
console.log(age>=15&&age<=30)
console.log(age<15||age>15)
//string operators
let firstname="hyma"
let lastname="vathi"
let fullname=firstname+""+lastname;
console.log(fullname)
let correctname=`hello ${firstname} ${lastname},welcome to devastra`
console.log(correctname)
//ternary operators
let myage=19;
if(myage>=18){
    console.log("eligible to vote")
    //result="eligible to vote"
}else{
    console.log("you cannot vote")
}
let result=myage>=18?"eligible to vote":"you cannot vote"
console.log(result)
//increment and decrement operators
let count=5;
console.log(count++)
console.log(count)
console.log(++count)
//typeof operators
console.log(typeof count)
console.log(typeof "hyma")
console.log(typeof 18)