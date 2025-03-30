console.log("Reduce Method in Javascript");

let numbers = [10,20,30,40,50];

//! reduce method

//?array.reduce((acc,cValue,cIndex ,cArray)=>{})

let sum = numbers.reduce((acc,cValue,cIndex)=>{
    console.log("acc: ",acc, "Index",cIndex, "Value: ",cValue);
    return acc + cValue;
});
console.log("Total Sum = ",sum);
