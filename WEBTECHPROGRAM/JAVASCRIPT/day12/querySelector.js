//? documents.querySelector("css_selector");

//! Targetting h1 with the help of id selector (#head)
let heading = document.querySelector("#head");
console.log(heading);

//! Targeting p with the help of class selector (.para)
let paraElement = document.querySelector("p");
console.log(paraElement);

//? document.querySelectorAll();
//queryselectorall returns the node list
//! Targetting all the elements with the help of class selector (.para)
let allElements = document.querySelectorAll(".para");
console.log(allElements); //NodeList

// allElements.syle.color= "red" ;
console.log(Array.isArray(allElements)); //false

//! First convert nodelist into an array 
let arr =  Array.from(allElements);
console.log(arr);
console.log(Array.isArray(arr));

arr.map((ele,index)=>{
    ele.style.color="red";
    if(index == 2){
        ele.style.backgroundColor = "yellow";
        ele.style.fontSize = "30px"
    }
}
);




