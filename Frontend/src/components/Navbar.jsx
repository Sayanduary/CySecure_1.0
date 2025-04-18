import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className=' flex fixed w-[100%] '>
      <div className='w-1/2 bg-gray-700/35 py-4 px-7 '> <span className='text-4xl  bg-gradient-to-tr from-purple-400 via-white to-black bg-clip-text text-transparent font-bold'>Cysecure</span></div>
      <ul className='bg-gray-700/35 flex justify-between gap-2  4 px-9 w-1/2 items-center'>
        <NavLink to="/" className={(e)=>e.isActive?" bg-green-600 text-white font-bold":"text-white"}><li className='p-4 '>Home</li></NavLink>
        <NavLink to="/dashboard" className={(e)=>e.isActive?"bg-green-600 font-bold text-white":"text-white"} ><li className='p-4'>Dashboard</li></NavLink>
        <NavLink to="/logs"  className={(e)=>e.isActive?"bg-green-600 font-bold text-white":"text-white"} ><li className='p-4'>Logs</li></NavLink>
        <NavLink to="/alert" className={(e)=>e.isActive?"bg-green-600 font-bold text-white":"text-white"} ><li className='p-4'>Alert</li></NavLink>
        <NavLink to="/about" className={(e)=>e.isActive?"bg-green-600 font-bold text-white":"text-white"}  ><li className='p-4'>About</li></NavLink>
      </ul>
      
    </div>
  )
}

export default Navbar
