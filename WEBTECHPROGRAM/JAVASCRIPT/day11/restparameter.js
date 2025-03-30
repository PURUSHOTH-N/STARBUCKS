console.log("Rest Parameter");

//? Syntax to create rest parameter
//! ...varName
function number(...num){
    console.log(num);
}
number(3,4,5,22,2);

function names(...name){
    console.log(name);
}
names("djfkff","fjfi","jfns");