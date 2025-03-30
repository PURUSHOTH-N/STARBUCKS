import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';
import { __AUTH } from '../backend/firebaseconfig';
import { FaRegEye } from "react-icons/fa6";
import { LuEyeClosed } from "react-icons/lu";
import Spinner from '../helper/Spinner';


const Login = () => {
  let navigate = useNavigate();
  let [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  let [showPassword, setshowPassword] = useState(false)
  let [isLoading, setIsLoading] = useState(false);
  // !Destructuring of an user data
  let { email, password } = userData;

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value })
  }
  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      let loggedInUser = await signInWithEmailAndPassword(
        __AUTH, email, password
      )
      console.log(loggedInUser);
      console.log("jjjj")
      if (loggedInUser.user.emailVerified === true) {
        toast.success("User has been logged in");
        navigate("/");
      } else {
        toast.error("Email is not yet verified");
      }
    } catch (error) {
      toast.error(error.message);
    }
    setIsLoading(false);
  }
  let togglePassword = (e) => {
    setshowPassword(!showPassword)
  }
  return (
    <section className="text-white w-[100vw] min-h-[90vh] flex justify-center items-center">
      <article className="w-[30%] bg-black p-5 rounded-xl">
        <header className="text-center text-3xl font-bold py-3">
          <h1>Login</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-1 p-3 relative">
            <label htmlFor="email" className="font-semibold text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="outline-none border border-white p-2 rounded-lg"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <span className="absolute bottom-[25px] right-[20px] text-lg cursor-pointer">
              <FaUser />
            </span>
          </div>
          <div className="flex flex-col mb-1 p-3 relative">
            <label htmlFor="password" className="font-semibold text-lg mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              className="outline-none border border-white p-2 rounded-lg"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <span
              onClick={togglePassword}
              className="absolute bottom-[25px] right-[20px] cursor-pointer text-lg"
            >
              {showPassword ? <FaRegEye /> : <LuEyeClosed />}
            </span>
          </div>
          <div className="flex flex-col mb-1 p-3">
            <button className="bg-[#0C0C70] py-2 text-lg rounded-lg cursor-pointer font-semibold hover:bg-[#0C0D99]">
              Login
            </button>
          </div>
          <div className="flex justify-center items-center">
            <NavLink
              to={"/auth/register"}
              className={"hover:text-blue-600 hover:underline mb-2"}>
              Don't have an account?
            </NavLink>
          </div>
          <div className="flex justify-center items-center">
            <NavLink
              to={"/auth/reset-password"}
              className={"hover:text-blue-600 hover:underline"}>
              Forgot Password?
            </NavLink>
          </div>
        </form>
      </article>
      {isLoading && (<section className='w-[100%] h-[100vh] bg-blue-900/50 fixed top-0'>
        <Spinner/>
      </section>)}
    </section>
  )
}

export default Login