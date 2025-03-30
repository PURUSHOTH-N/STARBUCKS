import React from 'react'
import NavbarContainer from '../components/NavBarBlock/NavbarContainer'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <div>
      <Toaster />
        <NavbarContainer/>
        <Outlet/>
    </div>
  )
}

export default Layout