console.log("callback function in javascript");

//creating a simple function
//? higher order function
function mainFunction(demo){
    console.log("This is the callback function");
    demo();
}

// creating a callback function

function callbackFunction(){
    console.log("this is the main function");
}

//! calling the main function
