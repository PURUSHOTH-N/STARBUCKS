import React from 'react'

const InlineEvent2 = () => {

    //! external event
    let handleClick = () =>{
        alert("Button Clicked");
    }
  return (
    <div>
        <h1>InlineEvent2</h1>
        <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default InlineEvent2;