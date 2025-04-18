import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <ul className='bg-purple-700 flex justify-end gap-24 px-9'>
        <NavLink to="/" className={(e)=>e.isActive?" bg-green-600  font-bold":""}><li className='p-4'>Home</li></NavLink>
        <NavLink to="/dashboard" className={(e)=>e.isActive?"bg-green-600 font-bold text-white":"text-white"} ><li className='p-4'>Dashboard</li></NavLink>
        <NavLink to="/logs"  className={(e)=>e.isActive?"bg-green-600 font-bold text-white":"text-white"} ><li className='p-4'>Logs</li></NavLink>
        <NavLink to="/alert" className={(e)=>e.isActive?"bg-green-600 font-bold text-white":"text-white"} ><li className='p-4'>Alert</li></NavLink>
        <NavLink to="/about" className={(e)=>e.isActive?"bg-green-600 font-bold text-white":"text-white"}  ><li className='p-4'>About</li></NavLink>
      </ul>
    </div>
  )
}

export default Navbar
