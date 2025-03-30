console.log("Anonymous function in javascript");
//first way: storing inside the variable and call than

let fun= function(){
    console.log("This is an anonymous function");
}

//call the function with the help of variable name
fun();
//second way: with the help of () and call immediately
(function(a,b)
{
    console.log("another anonymous function");
    console.log(a+b);   
})(1,6);