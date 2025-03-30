import React from 'react'
import { secretProperty } from './Grandpa'

const GrandChildren = () => {
    let data = useContext(secretProperty);
    console.log(data);
    
  return (
    <div>
    <h1>Grand child</h1>
    <h1>house:{data.house}</h1>
    <div>GrandChildren</div>
  );
};

export default GrandChildren;