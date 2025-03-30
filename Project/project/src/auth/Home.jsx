import React, { useContext } from 'react'
import { AuthUserContext } from '../context/AuthContextApi'

const Home = () => {
  let {authUser} = useContext(AuthUserContext);
  console.log(authUser);
  
  return (
    <div className="w-[80vw] h-[calc(100vh-70px)] ml-36 flex justify-center items-center">
      Home
    </div>
  )
}

export default Home