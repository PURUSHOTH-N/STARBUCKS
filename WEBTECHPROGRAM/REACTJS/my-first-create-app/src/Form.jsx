import React from 'react'

const Form = () => {
    let handleSubmit = (e) =>{
        //! This method will prevent the default behaviour of the form lkke reload or refresh
        e.preventDefault();
        console.log(e);
        console.log(e.target);
       
    };
    let handleChange = (e) => {
        console.log("Typed Value:", e.target.value);
    };
  return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <button>Submit</button>
        </form>
    </div>
  );
};

export default Form;