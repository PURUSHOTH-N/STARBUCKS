import React, { createContext } from 'react';

//! Step-1: Create Global Context
export let secretProperty = createContext();


const Grandpa = ({children}) => {
    let grandPaTreasure = {
        house : "Big Villa",
        gold : "100 Gold Coins",
        wisdom : "Ancient Life Lessons",
    };
  return (
    <secretProperty.Provider value={grandPaTreasure}>{children}</secretProperty.Provider>
  );
};

export default Grandpa;