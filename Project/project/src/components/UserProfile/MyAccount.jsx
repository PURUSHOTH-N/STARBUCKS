import React, { useContext } from 'react'
import { FaUserTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { AuthUserContext } from '../../context/AuthContextApi';


const MyAccount = () => {
    let { authUser } = useContext(AuthUserContext)
    return (
        <section className="w-[100%] h-[calc(100vh-70px)] flex justify-center items-center">
            <article className="w-[50%] bg-[#152c80]  border p-3 rounded-2xl">
                <header className="w-full h-[120px] bg-black flex flex-col justify-center items-center rounded-lg gap-2 text-white">
                    <img src={authUser?.photoURL} alt="" className="w-[120px] h-[120px] rounded-full border mt-[-100px]" />
                    <h1>
                        {authUser?.displayName}
                    </h1>
                    <p>{authUser?.email}</p>
                </header>
                <main className="w-[100%]   text-white">
                    <h1 className="text-center text-2xl font-bold uppercase py-3">Personal Details</h1>
                    <div className='text-9xl  flex flex-col justify-center items-center'>
                        <FaUserTimes className='ml-9' />
                        <h1 className='text-2xl'>User data not found !</h1>

                        <NavLink
                            to={"/user/profile/add-profile"}
                            className={"py-2 mt-3 px-10 bg-blue-400 rounded-lg font-semibold text-lg cursor-pointer"}>
                            Add Profile
                        </NavLink></div>

                </main>
            </article>
        </section>
    )
}

export default MyAccount