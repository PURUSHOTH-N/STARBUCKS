import React from 'react'

const EventWithParams = () => {
    let handleClick =(name) => {
        alert(`hello I'm ${name}`);
    };
  return (
    <div>
        <h1>EventWithParams</h1>
        <button onClick={() => handleClick("Cristiano Ronaldo")}>Click me</button>
    </div>
  );
};

export default EventWithParams;