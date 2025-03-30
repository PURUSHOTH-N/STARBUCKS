import React,{useState} from "react";

const Theme = () => {
    const[mode, setMode]=useState(true);
    let hT = () =>{
        setMode(!mode);
    };
  return (
    <div className={`w-[100vw] h-[100vh] ${
        mode ? "bg-white text-black":"bg-black text-white"
    }`}>
        <h1 className="text-center p-10">
            {mode ? "light theme":"dark theme"}
        </h1>
        <button onClick={hT} className={`border ml-[630px] mt-[30px] p-2 rounded-2xl ${
            mode ? "bg-black text-white":"bg-white text-black"
        } cursor-pointer`}>
            {mode ? "Change to dark theme":"Change to light theme"}
        </button>
    </div>
  );
};

export default Theme;