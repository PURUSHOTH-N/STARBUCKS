import React from 'react'
import BattleFieldLogo from "../../asset/head.png"

const Logo = () => {
  return (
    <aside className='basis-[10%]'>
        <figure className=' w-full h-full flex justify-center items-center'>
            <img src={BattleFieldLogo} alt="Logo" className='w-[130px] h-[110px] ml-[75px] ' />
            <h1 className='text-2xl font-bold'>LIGHTNING</h1>
        </figure>
    </aside>
  )
}

export default Logo;