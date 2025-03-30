console.log("Array Methods in JavaScript");

//^ 1. push() => adds element at the last
let numbers =[10,20,30,40,50];
console.log(numbers);
numbers.push(60,70);
console.log(numbers);

//^ 2.pop()=> removes the last element
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);

//^ 3.shift()=> removes the first element
numbers.shift();
console.log(numbers);

//^ 4.unshift()=> add elements in the first
numbers.unshift(100,90,80,70);
console.log(numbers);

//^ 5.slice()=>
//? syntax -> slice(startIndex,endIndex);
//(7)[100,90,80,70,20,30,40]
let slicedElements = numbers.slice(1,6);
console.log(slicedElements);

//^ 6.splice() =>
//? syntax -> splice(StartIndex ,deleteCount,addElements)
let names = ["vijay","rajni","srk","surya","Ajith"];
console.log(names);
names.splice(3,2,"STR" ,"NTR");
console.log(names);
console.log(names);


//^ 7. concat()=> 

    let arr1 = [10,20,30];
    let arr2 = [40,50];
    let mergedArray = arr1.concat(arr2);
    console.log(mergedArray);

//^ 8.reverse()=>
    let arr3 = ["Hello","World","Bye","World"];
let reversedArray = arr3.reverse();
console.log(reversedArray);
// weakly dynamically typed language,client side scripting lang, interpreted lang,

//^ 9.join()=>
//? syntax -> join(separator -> symbol (-,@,#,$) )
let arr4 =["Hello","World","Bye","World"];
console.log(arr4.join("-"));

//^ 10.includes()=>
    let books = ["Wings of Fire","PS-I","Silent Man","Atomic Habits"];
console.log(books.includes( "PS-I" )); //~true
console.log(books.includes("Demo")); //~false

//^ 11.indexOf()=>
    console.log(books.indexOf("PS-I"));
    console.log(books.indexOf("Demo"));

//^ 12. isArray()=> it is used to check array or not.
let arr = (1,2,3,4,5);
let newArr = [1,2,3,4,5];
console.log(Array.isArray(arr));//false
console.log(Array.isArray(newArr));//true
console.log(Array.isAt);