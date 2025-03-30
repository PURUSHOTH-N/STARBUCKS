import React, { useState } from 'react'

const NameStateChange = () => {

    let [name,setName] = useState("Purushoth");
    let [age, setAge] = useState(18);
    console.log(name);
    console.log(age);
    let ChangeRaghu = () => {
        setName("Raghu");
        setAge(20);
    };

    let ChangePrasanna = () => {
        setName("Prasanna");
        setAge(19);
    };
    
  return (
    <div>
        <h1>NameStateChange</h1>
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
        <button onClick={ChangeRaghu}>Raghu</button><br/>
        <button onClick={ChangePrasanna}>Prasanna</button>

    </div>
  );
};

export default NameStateChange;