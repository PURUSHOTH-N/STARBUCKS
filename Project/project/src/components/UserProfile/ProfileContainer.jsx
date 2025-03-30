import React from 'react'
import ProfileContent from './ProfileContent'
import ProfileSidebar from './ProfileSidebar'

const ProfileContainer = () => {
  return (
    <section className='flex w-[100%]'>
        
        <ProfileSidebar/>
        <ProfileContent/>
    </section>
  )
}

export default ProfileContainer