import React, { useContext } from "react";
import { FaUserXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { AuthUserContext } from "../../context/AuthContextApi";
import { BackendUserContext } from "../../context/FetchUserContext";
import { TbPhotoEdit } from "react-icons/tb";
import { MdEdit } from "react-icons/md";

const MyAccount = () => {
  let { authUser } = useContext(AuthUserContext);
  let { userData } = useContext(BackendUserContext);
  console.log(userData);

  return (
    <section className="w-[100%] h-[calc(100vh-70px)] flex justify-center items-center pt-[70px] text-white">
      <article className="w-[80%] bg-[#000000] flex flex-col justify-center p-2 rounded">
        <header className="w-full h-[120px] bg-[#0C0C50] rounded-lg flex flex-col gap-2 justify-center items-center">
          <img
            src={authUser?.photoURL}
            alt=""
            className="w-[120px] h-[120px] border rounded-full mt-[-100px]"
          />
          <h1>{authUser?.displayName}</h1>
          <p>{authUser?.email}</p>
          <span className="p-2 rounded-full bg-black text-white cursor-pointer hover:bg-white hover:text-black text-lg absolute top-40 right-[39%]"><NavLink to={"/user/profile/upload-profile-photo"}><TbPhotoEdit/></NavLink></span>
        </header>
        <main className="w-[100%] flex flex-col">
          <div className="w-ful flex justify-between items-center px-[300px]"><h1 className="text-center text-2xl font-bold uppercase py-3">
            Personal Details
          </h1>
          <span className="flex items-center gap-2"><NavLink to={"/user/profile/add-profile"}
           state={userData}
           className={"py-2 px-4 bg-[#0C0C50] rounded-md hover:bg-blue-600 flex gap-2 items-center"} ><span>Edit</span><MdEdit/></NavLink></span>
          </div>
          {
            userData === null?(<aside className="w-full">
              <div className="flex flex-col justify-center items-center">
                <FaUserXmark className="text-9xl" />
                <h1 className="text-lg">User Data Not Found!!</h1>
              </div>
              <div className="flex justify-center items-center">
                <NavLink
                  to={"/user/profile/add-profile"}
                  className={
                    "py-2 px-10 my-5 bg-blue-600 rounded-lg text-lg font-semibold cursor-pointer"
                  }
                >
                  Add Profile
                </NavLink>
              </div>
            </aside>) : (<aside className="w-full">
            <article className="flex gap-3 py-2 px-6">
              <div className="w-[300px] flex items-center gap-2 bg-[#0C0C50] p-4 rounded">
                <span className="text-lg font-semibold py-1">Name</span>
                <span className="border w-[230px] h-[30px] border-blue-600 rounded text-blue-300 px-3 flex items-center">{userData?.username}</span>
              </div>
              <div className="w-[300px] flex items-center gap-2 bg-[#0C0C50] p-4 rounded">
                <span className="text-lg font-semibold py-1">Contact</span>
                <span className="border w-[230px] h-[30px] border-blue-600 rounded text-blue-300 px-3 flex items-center">{userData?.contactNumber}</span>
              </div>
              <div className=" w-[300px] flex items-center gap-2 bg-[#0C0C50] p-4 rounded">
                <span className="text-lg font-semibold py-1">Gender</span>
                <span className="border w-[230px] h-[30px] border-blue-600 rounded text-blue-300 px-3 flex items-center">{userData?.gender}</span>
              </div>
            </article>
            <article className="flex gap-3 py-2 px-6">
              <div className="w-[300px] flex items-center gap-2 bg-[#0C0C50] p-4 rounded">
                <span className="text-lg font-semibold py-1">DOB</span>
                <span className="border w-[230px] h-[30px] border-blue-600 rounded text-blue-300 px-3 flex items-center">{userData?.dob}</span>
              </div>
              <div className="w-[300px] flex items-center gap-2 bg-[#0C0C50] p-4 rounded">
                <span className="text-lg font-semibold py-1">Age</span>
                <span className="border w-[230px] h-[30px] border-blue-600 rounded text-blue-300 px-3 flex items-center">{userData?.age}</span>
              </div>
              <div className="w-[300px] flex items-center gap-2 bg-[#0C0C50] p-4 rounded">
                <span className="text-lg font-semibold py-1">Language</span>
                <span className="border w-[230px] h-[30px] border-blue-600 rounded text-blue-300 px-3 flex items-center">{userData?.lang}</span>
              </div>
            </article>
            <article className="flex gap-3 py-2 px-6">
              <div className="w-[300px] flex items-center gap-2 bg-[#0C0C50] p-4 rounded">
                <span className="text-lg font-semibold py-1">Country</span>
                <span className="border w-[230px] h-[30px] border-blue-600 rounded text-blue-300 px-3 flex items-center">{userData?.country}</span>
              </div>
              <div className="w-[300px] flex items-center gap-2 bg-[#0C0C50] p-4 rounded">
                <span className="text-lg font-semibold py-1">State</span>
                <span className="border w-[230px] h-[30px] border-blue-600 rounded text-blue-300 px-3 flex items-center">{userData?.state}</span>
              </div>
              <div className="w-[300px] flex items-center gap-2 bg-[#0C0C50] p-4 rounded">
                <span className="text-lg font-semibold py-1">City</span>
                <span className="border w-[230px] h-[30px] border-blue-600 rounded text-blue-300 px-3 flex items-center">{userData?.city}</span>
              </div>
            </article>
            <article className="flex py-2 px-6">
              <div className="flex items-center gap-2 bg-[#0C0C50] p-4 rounded">
                <span className="text-lg font-semibold py-1">Address</span>
                <span className="border w-[810px] h-[60px] border-blue-600 rounded text-blue-300 px-3 flex items-center">{userData?.address}</span>
              </div>
            </article>
          </aside>)
          }
        </main>
      </article>
    </section>
  );
};

export default MyAccount;