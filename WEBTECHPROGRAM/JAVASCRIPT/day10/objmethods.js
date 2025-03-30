console.log("Object methods");
//! 1. keys() => It will return you the key of an object in the form of array
//? syntax -> object.keys()

let obj = {
    name: "Purushoth",
    age: 19,
    city: "kanchipuram",
    skills:["HTML","CSS","JS"]
};

console.log(obj);
console.log(Object.keys(obj));

//! 2. values() => It will return you the values of the objects in the form of array 
//? Syntax -> Object.values()
console.log(Object.values(obj));

//! 3 entries() => It will return you the each key value pair in the form of array.
console.log(Object.entries(obj));

