import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthUserContext } from '../../context/AuthContextApi'
  import { TbLogout } from "react-icons/tb";


const Menu = () => {
  let { authUser, logout } = useContext(AuthUserContext);
  console.log(authUser);

  //! this is for the unkmown user - first time
  let AnonymousUser = () => {
    return <>
      <li>
        <NavLink to={"/auth/login"} className={({ isActive }) => `${isActive ? "bg-[#0C0C70] text-white" : ""} px-4 py-2 font-semibold hover:bg-blue-800 hover:text-white cursor-pointer rounded-2xl`}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/auth/register"} className={({ isActive }) => `${isActive ? "bg-[#0C0C70] text-white" : ""} px-4 py-2 font-semibold hover:bg-blue-800 hover:text-white cursor-pointer rounded-2xl`}>Register</NavLink>
      </li>
    </>
  };

  //! this is for the authenticated user - verified user
  let AuthenticatedUser = () => {
    return <>
      <li>
        <NavLink to={"/user/profile"} className={({ isActive }) => `${isActive ? "bg-[#0C0C70] text-white" : ""} px-4 py-2 font-semibold hover:bg-blue-800 hover:text-white cursor-pointer flex gap-2  rounded-2xl`} >
              <span>{authUser?.displayName}</span>  
              <img src={authUser?.photoURL} alt="profile-photo" className='w-[25px] h-[25px] rounded-full '/>     
        </NavLink>
      </li>
      <li>
        <button onClick={logout} className={` px-4 py-2 font-semibold hover:bg-red-800 hover:text-white cursor-pointer rounded-2xl flex`} >
          <span>LogOut</span>
          <span className="ml-2 mt-1"><TbLogout /></span>
        </button>
      </li>
    </>
  }

  return (

    <div className="basis-[30%] h-[70px]">
      <ul className="w-full h-[70px] flex justify-evenly items-center">
        <li>
          <NavLink to={"/"} className={({ isActive }) => `${isActive ? "bg-[#0C0C70] text-white" : ""} px-4 py-2 font-semibold hover:bg-blue-800 hover:text-white cursor-pointer rounded-2xl`} >Home</NavLink>
        </li>

        {authUser === null ? <AnonymousUser /> : <AuthenticatedUser />}
      </ul>
    </div>
  )
}

export default Menu