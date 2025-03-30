console.log("Objects in JavaScript");

//! Properties of car
let color = "black";
let model = "A7";
let brand = "Audi";

//! Functionality of the car
function start (){
    console.log("Car has been started");
}
start();

//! Array
//? let car = ["black","audi","a7","6500000"]

//! How to create an object
let car ={
    color:"black",
    brand: "Audi",
    model: "A6",
    fuelType: "Petrol",
    start: ()=> {
        console.log("Car startedd");   
    },
};
//! Accessing the car objecct properties
console.log(car);
console.log(car.model);
console.log(car.brand);

//! Employee object
 let Employee={
    eName: "Purushoth",
    eId: 101 ,
    eSalary: 69000,
    eIsMarried: false, 
 };

 console.log(Employee);

//! Accessing the properties of the Employee
console.log(Employee.eName);

//^ addng propertu=y to the employee object
Employee.eAge = 19;

//! deleting the property of the employee object
delete Employee.eId;

//! human object
let human = {
     name: "Paul",
     age: 23,
     status: true,
     designation: "Software Engineer",
     "emp salary": 250000, //"emp salary" -> special key
     7: "Thala",
};
console.log(human);

//! How to access the special keys in objet
console.log(human["emp salaryy"]);
console.log(human[7]);
console.log(human["name"]);

//! key has a dynamic
//! first  create a keyname with string
let keyName = "city";
//! Add that key to the object with bracket notation
//? And provide the value
human[keyName] = "Chennai";
console.log(human);


 


