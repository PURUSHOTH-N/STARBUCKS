console.log("Spread Operator");
//? Syntax of Spread operator
//& ...varName

let arr1=[];
let arr2=[6,7,8,9,10];

console.log("Array 1:",arr1);
console.log("Array 2:",arr2);

arr1=[1,2,3,4,5,...arr2];  
console.log("Array 1:",arr1);//^ 1,2,3,4,5,6,7,8,9,10

let newArr = [...arr1,11,12,13,14,15]; 
console.log(newArr);//^ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15

//* spread operator in object
let obj1={
    name:"Punithan",
    age:20,
};

let obj2={...obj1,City:"Dubai",Address:"Dubai kurukku sandhu dubai"}; //^ here ...obj1 is the spread operator
console.log(obj2);


