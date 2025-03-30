import React from 'react'

const Counter = () => {
    let count = 0;

    //! Event handler which will increment the count by 1
    const handleCount = () => {
        count++;
        console.log("Count",count);
        
    }
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={}>Increment</button>
    </div>
  );
};

export default Counter;