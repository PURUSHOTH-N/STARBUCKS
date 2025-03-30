console.log("functions in javascript");
//function
function greet(){
    console.log("how are you?");
}
//calling the function
greet();
greet();
greet();


///Parameter and argument in function
function welcome(name){
    console.log(name);
    console.log(name,"welcome to web technology");
}
welcome("john");


function calculator(a,b){
    console.log("multiplication",a*b);
    console.log("addition",a+b);
    console.log("subtraction",a-b);  
}
calculator(5,5);
calculator(4,2);