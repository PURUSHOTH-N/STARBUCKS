import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiAccountBoxFill } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";
import { MdAddPhotoAlternate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";




const ProfileSidebar = () => {
    return (
        <aside className="basis-[17%] bg-[#0C0C50] text-white h-[calc(100vh-70px)]">
            <nav className='w-full'>
                <ul className='w-full p-5 flex flex-col'>
                    <li>
                        <NavLink 
                            to={"/user/profile/my-account"}
                            className={"flex bg-blue-900 items-center gap-2 py-2 px-4 rounded-md hover:bg-blue-700 cursor-pointer mb-2 font-semibold"}>
                            <span className='text-xl'><RiAccountBoxFill /></span>
                            <span>My Account</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            to={"/user/profile/add-profile"}
                            className={"flex bg-blue-900 items-center gap-2 py-2 px-4 rounded-md hover:bg-blue-700 cursor-pointer mb-2 font-semibold"}>
                            <span className='text-xl'><HiUserAdd /></span>
                            <span>Add Profile</span>
                        </NavLink>
                        <li>
                            <NavLink 
                                to={"/user/profile/upload-profile-photo"}
                                className={"flex bg-blue-900 items-center gap-2 py-2 px-4 rounded-md hover:bg-blue-700 cursor-pointer mb-2 font-semibold"}>
                                <span className='text-xl'><MdAddPhotoAlternate /></span>
                                <span>Upload Profile Photo</span>
                            </NavLink>
                            <li>
                                <li>
                                    <NavLink 
                                        to={"/user/profile/change-password"}
                                        className={"flex bg-blue-900 items-center gap-2 py-2 px-4 rounded-md hover:bg-blue-700 cursor-pointer mb-2 font-semibold"}>
                                        <span className='text-xl'><RiLockPasswordFill /></span>
                                        <span>Change Password</span>
                                    </NavLink>
                                </li>
                                <NavLink 
                                    to={"/user/profile/delete-account"}
                                    className={"flex bg-blue-900 items-center gap-2 py-2 px-4 rounded-md hover:bg-blue-700 cursor-pointer mb-2 font-semibold"}>
                                    <span className='text-xl'><MdDelete /></span>
                                    <span>Delete Account</span>
                                </NavLink>
                            </li>
                        </li>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default ProfileSidebar