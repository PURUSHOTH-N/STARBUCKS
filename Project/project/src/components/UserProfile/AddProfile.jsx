import React,{useContext, useState} from 'react'
import toast from 'react-hot-toast';
import Languages from "./JSON/languages.json"
import Countries from "./JSON/countries.json"
import Cities from "./JSON/cities.json"
import States from "./JSON/states.json"
import { AuthUserContext } from"../../context/AuthContextApi"
import { doc, setDoc } from 'firebase/firestore';
import { useLocation, useNavigate } from 'react-router-dom';
import { __DB } from '../../backend/firebaseconfig';


const AddProfile = () => {
  let {authUser} = useContext(AuthUserContext);
  let navigate = useNavigate();
  let location = useLocation();
  // let [role ,setRole] = useState("");
  
  let [userDetails,setUserDetails] = useState({
    username: location?.state?.username,
    contactNumber:location?.state?.contactNumber,
    gender:location?.state?.gender,
    dob:location?.state?.dob,
    age:location?.state?.age,
    lang:location?.state?.lang,
    country:location?.state?.country,
    state:location?.state?.state,
    city:location?.state?.city,
    address:location?.state?.address,
    role:"user"
  })

  //! Destructuring the user details
  let {username,contactNumber,gender,dob,age,lang,country,state,city,address,role} = userDetails;

  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserDetails({...userDetails,[name]: value})
  }

  let handleSubmit = async (e) => {
    e.preventDefault ();
    try {
      //! Extracting four properties from the authUser
      let {displayName, photoURL,email,uid} = authUser

      //! Create an object to send inside the database 
      //! Payload object
      //? Payload is nthg but the actual object which is sent to the database
      //? In the programming language actual object is called as payload
      let payload = {
        ...userDetails,
        displayName,
        photoURL,
        email,
        uid
      }

      //! Step-1: Create a document reference inside the
      //!    databse  (Cloud Firestore)
      let user_profile_collection = doc(__DB,"user_details",uid);

      //! Step-2: Set or store the data inside the database
      await setDoc(user_profile_collection, payload);
      navigate("/user/profile");
      toast.success("User details has been updated successfully")


    } catch (error) {
      toast.error(error.code.slice(5));
      console.log("Error while uploading data:" ,error);
      
    }
    
  }
  return (
    <section className="w-[100%] h-[calc(100vh-70px)] flex flex-col justify-center items-center">
      <article className="w-[80%] bg-[#000000] p-6 rounded-lg shadow-lg">
        <header className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">PERSONAL DETAILS</h1>
        </header>
        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-white mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your name"
              className="py-2 px-4 rounded-lg bg-[#0C0C50] text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleInputChange}
              value= {username}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="contactNumber" className="text-white mb-2">
              Contact Number:
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              placeholder="Enter your contact number"
              className="py-2 px-4 rounded-lg bg-[#0C0C50] text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleInputChange}
              value={contactNumber}

            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender" className="text-white mb-2">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              className="py-2 px-4 rounded-lg bg-[#0C0C50] text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleInputChange}

            >
              <option value="" selected disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="dob" className="text-white mb-2">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="py-2 px-4 rounded-lg bg-[#0C0C50] text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleInputChange}
              value={dob}

            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="age" className="text-white mb-2">
              Age:
            </label>
            <input
              type="tel"
              id="age"
              name="age"
              placeholder="Enter your age"
              className="py-2 px-4 rounded-lg bg-[#0C0C50] text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleInputChange}
              value={age}


            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lang" className="text-white mb-2">
              Language:
            </label>
            <input
              type="text"
              id="lang"
              name="lang"
              placeholder="Enter your language"
              className="py-2 px-4 rounded-lg bg-[#0C0C50] text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleInputChange}
              list="langList"
              value={lang}


            />
            <datalist id="langList">
              {
                Languages.map((language,index) => {
                  return <option key={index}>{language}</option>
                })
              }
            </datalist>
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="text-white mb-2">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter your city"
              className="py-2 px-4 rounded-lg bg-[#0C0C50] text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleInputChange}
              list = "citylist"
              value={city}


            />
             <datalist id="citylist">
              {
                Cities.map((cities,index) => {
                  return <option key={index}>{cities}</option>
                })
              }
            </datalist>
          </div>
        
          <div className="flex flex-col">
            <label htmlFor="state" className="text-white mb-2">
              State:
            </label>
            <input
              type='text'
              id="state"
              name="state"
              className="py-2 px-4 rounded-lg bg-[#0C0C50] text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              placeholder='Enter your state'
              onChange={handleInputChange}
              list = "stateList"
              value={state}


            />
             <datalist id="stateList">
              {
                States.map((state,index) => {
                  return <option key={index}>{state}</option>
                })
              }
            </datalist>
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="text-white mb-2">
              Country:
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Enter your country"
              className="py-2 px-4 rounded-lg bg-[#0C0C50] text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleInputChange}
              list="countryList"
              value={country}


            />
            <datalist id="countryList">
              {
                Countries.map((country,index) => {
                  return <option key={index}>{country}</option>
                })
              }
            </datalist>
          </div>

        
          <div className="flex flex-col col-span-3">
            <label htmlFor="address" className="text-white mb-2">
              Address:
            </label>
            <textarea
              id="address"
              name="address"
              placeholder="Enter your address"
              className="py-2 px-4 rounded-lg bg-[#0C0C50] text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              required
              onChange={handleInputChange}
              value={address}
            ></textarea>
          </div>
          <div className="col-span-3 flex justify-center">
            <button
              type="submit"
              className="py-2 px-6 bg-[#0C0C70] hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Add Profile
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default AddProfile;