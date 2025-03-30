console.log("filter out odd and even number");
let numbers =  [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = numbers.filter((cValue,cIndex,cArray)=>{
    if(cValue % 2 == 0){
        return cValue;
    }
    });
console.log(evenNumbers);
let oddNumbers = numbers.filter((cValue,cIndex,cArray)=>{
    if(cValue % 2 !== 0){
        return cValue;
    }
    });
console.log(oddNumbers);
