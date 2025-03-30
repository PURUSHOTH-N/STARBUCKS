import React from 'react'
import Child2 from './Child2';

const Parent2 = () => {
    let employee = {
        eName: "Purushoth",
        eSalary: 50000,
        eId: 101,
        eDesignation: "Web Developer",
        eDoesExist: true,
        eStatus: undefined,
        eBaby: null,
    };
  return (
    <div>
        <h1>Parent Component</h1>
        <Child2 employee={employee}/>
    </div>
  )
}

export default Parent2