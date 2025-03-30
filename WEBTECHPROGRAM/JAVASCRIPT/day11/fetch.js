//! create a function to fetch the data
async function fetchData(){

    // step-1 Fetch the data with the help of fetch API
    let data= await fetch("https://fakestoreapi.com/products");
    console.log(data);
    //! Step-2 convert that JSON String to JS Object using JSON()
     data=await data.json();
     console.log(data);
     
   } 
   
   fetchdata();
