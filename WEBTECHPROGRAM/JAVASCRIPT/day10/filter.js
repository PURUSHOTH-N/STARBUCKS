console.log("Filter Method in Javascript");
let numbers =[2,3,23,12,45,67,33,11,32,1,34,112,1,9,19,334];
//? array.filter((cValue,cIndex,cArray)=>{return})

let filteredNumbers = numbers.filter((cValue,cIndex,cArray)=>{
    if(cValue>25){
        return cValue;
    }
    });


    console.log(filteredNumbers);
    console.log(numbers);
    
    