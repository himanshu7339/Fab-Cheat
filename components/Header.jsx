import DarkMode from '@/app/DarkMode'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='flex justify-between p-3 bg-[#B0FFFF] align-middle border-b-2 border-black dark:bg-black dark:border-white '>
        <div>
            <h1 className='font-bold text-2xl '>Fab Cheat</h1>
        </div>
        <div className='flex gap-5 align-middle  '>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>JavaScript</Link>
          <Link href={"/"}>MongoDb</Link>
          <Link href={"/"}>Git Github</Link>
          <div><DarkMode/></div>
        </div>
    </nav>
  )
}

export default Header