console.log("Map function");

//! Numbers Array
let numbers = [10,20,30,40,50];
console.log(numbers);

//! Map() method
//? array.map((currentValue, currentIndex, currentArray))

let updatedNumbers = numbers.map((cValue ,cIndex, cArray) =>{
    console.log("Index:",cIndex ,"Value:",cValue);
    return cValue + 5;
})

console.log("New Array:" ,updatedNumbers);
console.log("Original Array:",numbers);



//^ second example


let numArray = [10,20,30,40,50,60,70,80,90,100];
console.log(numArray);
let squareNumbers = numArray.map((cValue)=>{
    return cValue * cValue
});

console.log(squareNumbers);
console.log(numArray);


