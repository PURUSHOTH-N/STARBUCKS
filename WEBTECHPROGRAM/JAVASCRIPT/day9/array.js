console.log("array in javascript");

//* How to create an array?
//~ [] -> Array Literals

//& Homogeneous Array -> Same type of data or elements
let numbers = [10,20,30,40,50];
console.log(numbers);

let names = ["Shivaselvam","Panda","Pillayar"]
console.log(names);


//^ Heterogenous Array -> Different type of data or elements
let heteroArray = [10,"john",true,null]
console.log(heteroArray);

//! Accessing the array elements
let todolist =[
    "sleeping",
    "complete the task",
    "Practice code",
    "revision of code",
];
console.log(todolist);
console.log(todolist[3]);
console.log(todolist[1]);

//~ updating the array elements
todolist[2]="Forget the task"
console.log(todolist);

//~ remove the elements
todolist[3]= " ";
console.log(todolist);