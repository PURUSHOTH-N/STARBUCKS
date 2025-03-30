import React from 'react'

const Expression = () => {
    let food = "spicy chicken";
    console.log(food);

    let foodIsGood = false;
    let iceCreamIsThere = null;
    let areYouHappy = undefined;
    console.log(foodIsGood);
    console.log(iceCreamIsThere);
    console.log(areYouHappy);
 
    return (
    <>
    <h1>JSX Expression</h1>
    <h2>Food:{food}</h2>
    <h2>foodIsGood:{foodIsGood}</h2>
    <h2>iceCreamIsThere:{iceCreamIsThere}</h2>
    <h2>areYouHappy:{areYouHappy}</h2>
    </>
  );
};

export default Expression;