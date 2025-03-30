//? getElementsByClassName

let paraElements = document.getElementsByClassName("para");
console.log(paraElements); //HTML Collection

console.log(Array.isArray(paraElements)); //false

//! style
// paraElements.style.color = "blue"; //undefined

//! First convert HTML collection into an array
//? 1 .Array.from(htmlcollection);

let newArray = Array.from(paraElements);
console.log(newArray);
console.log(Array.isArray(newArray));

//? By using spread operator)  (...varName)
let newArray2 = [...paraElements];
console.log(newArray2);
console.log(Array.isArray(newArray2));
//?Now we successfully converted HTML collection into an array and we can use array methods on it.

newArray.map((ele,index)=>{
    ele.style.color = "blue";
    if(index == 1){
        ele.style.backgroundColor = "yellow";
    }
});
   



