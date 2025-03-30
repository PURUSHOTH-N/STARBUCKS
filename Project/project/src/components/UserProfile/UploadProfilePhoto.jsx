import { updateProfile } from 'firebase/auth';
import React, { useState, useContext } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthUserContext } from '../../context/AuthContextApi';
import Spinner from '../../helper/Spinner';

const UploadProfilePhoto = () => {
    let {authUser} = useContext (AuthUserContext);
    let navigate = useNavigate();
    let [photoFile, setPhotoFile] = useState("");
    let [photoPreview, setPhotoPreview] = useState(null);
    let [isLoading, setIsLoading]= useState(false);

    let handleFileInputChange = (e) => {
        let file = e.target.files[0];
  
         // console.log(file);
         setPhotoFile(file);
        //! URL.createObjectURL(file)
        setPhotoPreview(URL.createObjectURL(file));
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if(!photoFile){
                toast.error("Please select a file before uploading");
                return;
            }
            //! Converting iage into binary data
            //? FormData() -> API
            let fileData = new FormData();
            fileData.append("file",photoFile);
            fileData.append("upload_preset","project")
            fileData.append("cloud_name","dfpaj0hfg");

            //! Upload your binary data to the cloudinary

            let response = await fetch("https://api.cloudinary.com/v1_1/dfpaj0hfg/image/upload",{

                method:"POST",
                body:fileData
            });
            let result = await response.json();
            let imageUrl = result.url;

            await updateProfile(authUser,{
                photoURL:imageUrl
            }); 
            toast.success("Profile photo updated successfully");
            navigate("/user/profile/my-account");

            //! Update the profile

        }catch (error){
            toast.error (error.code.slice(5));
            console.log("Error while uploading " ,error);
            
        }
        setIsLoading(false);
    }
    return (
        <section className="w-[100%] h-[calc(100vh-70px)] flex justify-center items-center flex-col text-white">
            <article className='w-[35%] bg-[#152C80] flex flex-col justify-center items-center'>
                <header className='w-full'>
                    <h1 className='text-3xl text-center font-bold uppercase py-6 '>Upload Profile Photo</h1>
                </header>
                {photoPreview === null ? <><div className='w-[150px] h-[150px] border rounded-full flex justify-center items-center bg-blue-900'>
                    No File Chosen
                </div></> : <><img src={photoPreview} alt="" className='w-[150px] h-[150px] border rounded-full flex justify-center items-center bg-blue-900' /></>}
            </article>
            <main className='w-[35%] bg-[#152C80]'>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col justify-center my-3 px-6'>
                        <label htmlFor="profile" className='font-semibold text-lg py-2'>Upload Your Profile Photo here</label>
                        <input
                            type="file"
                            name='photofile'
                            id='profile'
                            className='border py-2 px-4 border-white border-dotted file:bg-white file:text-black file:p-1 file:rounded cursor-pointer file:cursor-pointer'
                            onChange={handleFileInputChange}
                        />
                    </div>
                    <div className='flex justify-center items-center mt-3 mb-5'>
                        <button className='py-2 px-6 bg-blue-700 cursor-pointer hover:bg-blue-800 rounded text-lg'>
                            Upload Profile
                        </button>
                    </div>
                </form>
            </main>
            {isLoading && (<section className="w-[100%] h-[100vh] bg-black/50 fixed top-0 ">
        <Spinner/>
        </section>)}
        </section>
    )
}

export default UploadProfilePhoto