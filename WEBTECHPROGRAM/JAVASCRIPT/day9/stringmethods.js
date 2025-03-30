//1.toUpperCase()=>
    let str1 = "hello world";
console.log(str1.toUpperCase()); //HELLO WORLD

//2.toLowerCase()=>
    let str2 = "HELLO WORLD";
console.log(str2.toLowerCase()); // hello world

// 3.substring() =>
//? Syntax -> substring(startIndex, endIndex)
    let str3 = "hello world";
    let extractedString = str3.substring(0,5);
    console.log(extractedString); //hello
console.log(str3.substring(6, 11)); //world

// 4.concat()=>
    //? Syntax -> concat(str1, str2, str3)
let str4 = "hello";
let str5 = "world";
let mergedString = str4.concat(str5);
console.log(mergedString); //helloworld

//5.trim()=>
    let str6 = " Welcome to Battle Field ";
    console.log(str6.length);
    let removeSpaces = str6.trim();
    console.log(removeSpaces.length);

// 6.split()=>
    //? Syntax -> split(separator, limit("" , " ", "  "))
let str7 = "The students of battle field are smart and intelligent";
console.log(str7);
let splitString = str7.split(" "); 
console.log(splitString); //["The", "students", "of", "battle", "field", "are", "smart", "and", "intelligent"]
let split = str7.split("");
console.log(split);

// 7.charAt()=>
    //?syntax -> charAt(index -> number)
let str8 = "Something is better than nothing";
console.log(str8.charAt(6));

// 8.includes()=>
  //? Syntax -> includes("String") -> boolean value
  //~ boolean -> present -> true ; not present -> false
let str9 = "Reading book";
let isPresent = str9.includes("books");
console.log(isPresent);

//9. slice() =>
    //? Syntax -> slice(startIndex, endIndex);
let str10 = "Panimalar Engineering College";
let slicedstring = str10.slice(10,21);
console.log(slicedstring);
console.log(str10.slice(10,21));


// 10.replace ()=>
    //?Syntax -> replace(SearchValue , NewValue);
let str11 = "Hello World! Bye World";
let replaceWorld = str11.replace("World" , "Universe");
console.log(replaceWorld);
let replaceAll = str11.replaceAll("World" , "Universe");
console.log(replaceAll);


//negative
let newStr = "Hello World";
console.log(newStr.slice(-5));//World
console.log(newStr.slice(-5,9));//Wor


