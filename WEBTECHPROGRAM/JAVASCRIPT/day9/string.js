console.log("String in Javascript");

//1st way to create string -> Double Quotes
let str = "Hello World!";
console.log(str);

//2nd way to create string -> Single Quotes
let str2 = 'Hello World!'
console.log(str2);

//3rd way to create string -> Template  Literals (Backticks)
//Backticks ->``

function getName(name)
{
    console.log(`Mynname is ${name}`); //string interpretation
}

getName("John");

let name = `John`; 
console.log(name);

//Multiline strings
let multilineString = `This is first line
This is second line
This is third line`;
console.log(multilineString);

