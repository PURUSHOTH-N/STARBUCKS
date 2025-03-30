import React from 'react';
import toast from "react-hot-toast";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const LoginForm = () => {
    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-[250px] bg-gray-800 text-white p-5 rounded-xl">
                <h1 className="text-center text-2xl py-1">Login Form</h1>
                <div className="flex flex-col mb-2">
                    <label htmlFor="" className="mb-2">Username</label>
                    <input
                        type="email"
                        id="username"
                        className="outline-none rounded-full ring-1 focus:ring-indigo-600 px-2"
                    />
                </div>
                <div className="flex flex-col mb-2 relative">
                    <label htmlFor="password" className="mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="outline-none rounded-full ring-1 focus:ring-indigo-600 px-2"
                    />
                </div>
                <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-full">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;