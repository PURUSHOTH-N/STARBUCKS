import React from 'react';

const Child2 = (props) => {
 console.log(props);
 let {eName ,eSalary,eId ,eDesignation } = props .employee;
    
  return (
    <div>
        <h1>Child Component</h1>
        <h2>Employee Name:{eName}</h2>
        <h2>Employee Salary:{eSalary}</h2>
        <h2>Employee Id:{eId}</h2>
        <h2>Employee Designation:{eDesignation}</h2>
    </div>
  );
};

export default Child2;