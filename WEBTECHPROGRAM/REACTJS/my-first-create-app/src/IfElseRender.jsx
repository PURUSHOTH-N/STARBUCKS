import React from 'react'

const IfElseRender = () => {
    let isLoggedInUser = true;

    if(isLoggedInUser){
        return <h1>Welcome User</h1>;
    }
    else{
        return <h1>Login User</h1>;
    }
  return (
    <div>IfElseRender</div>
  );
};

export default IfElseRender;