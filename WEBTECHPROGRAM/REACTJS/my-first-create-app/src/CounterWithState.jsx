import React, { useState } from 'react'

const CounterWithState = () => {
  //! UseState -> hook
  let[count,setCount] = useState(0);
  console.log(count);
  

    let handleIncrement = () =>{
        setCount(count+1);
    }
    let handleDecrement = () =>{
        setCount(count-1);
    }
    let handleReset = () =>{
        setCount(0);
    }
  return (
    <div>
        <h1>CounterWithState</h1>
        <h1>Counter:{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default CounterWithState;