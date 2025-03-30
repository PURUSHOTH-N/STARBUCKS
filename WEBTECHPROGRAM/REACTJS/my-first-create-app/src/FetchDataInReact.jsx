import React, { useEffect, useState } from 'react'

const FetchDataInReact = () => {
    let [data,setData]=useState([]);
    let fetchProducts=async ()=>{
        let response =await fetch("https://fakestoreapi.com/products");
        let jsonData =await response.json();
        console.log(jsonData);
        setData(jsonData);
    };

    //useEffect(callbackFunction,dependency_array)
    useEffect(()=>{
        fetchProducts();
    },[]);
  return (
    <div>FetchData</div>
  )
}

export default FetchDataInReact;