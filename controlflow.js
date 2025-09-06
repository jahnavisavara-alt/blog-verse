let days=5;
switch(days){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
   case 5:
        console.log("friday");
        break;
   case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid")
           break;
        }
        

let i=3;
while(i==3)
for(i=0;i<=5;i++)
    console.log(i)

let colours=["pink","blue","black"]
for(let i=0;i<colours.length;i++){
    console.log((colours[i]))
}
let person={
    name:"hyma",
    age:18,
    college:"jntugv"
}
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}

for(let i=5;i>=0;i--){
    if(i===3){
        continue;
    }else if(i===2){
        break;
    }
    console.log(i)
}