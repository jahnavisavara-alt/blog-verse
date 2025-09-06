let person={
    name:"hyma vathi",
    age:19
}
console.log(person.name)
console.log(person["age"])
const{name,age}=person;//destructing assignment
console.log(name)
console.log(age)

let fruits=["guava","mango","apple"]
console.log(fruits[0])
let numbers=[1,2,3,4,5]

let squares=numbers.map((num)=>num*num);//transform each element
console.log(squares)

let even=numbers.filter((num)=>num%2==0)//filter values
console.log(even)

let sum=numbers.reduce((present,num)=>present+num,0)//reduce values
console.log(sum)
let number=[1,2,3,4,5]
let colour=["pink","blue","black"]
let persons=[{
    name:"nandhu",
    marks:45
},{
    name:"sindhu",
    marks:50
},{
    name:"priya",
    marks:49
}
]
let maxmarks=0;
let topper="";
for( let person of persons){
    if(person.marks>maxmarks){
        maxmarks=person.marks;
        topper=person.name;
    }
}
console.log(`topper is $(topper)`)