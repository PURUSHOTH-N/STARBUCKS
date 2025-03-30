import React from 'react';

import Greet1 from './Greet1';
import Parent2 from './Parent2';

const TernaryRender = () => {
    let user = true;
    let num = 10;
    let isLoggedInUser = false;
  return (
    <div>
        <h1>Conditional Rendering with the help of Ternary operator</h1>
        {user ? <h1>Welcome User</h1>:<h1>Login User</h1>}
        {num > 20 ? <h1>Number is greater</h1> : <h1>Number</h1>}
        {isLoggedInUser ? <Greet1/> :<Parent2/>}
    </div>
  );
};

export default TernaryRender;