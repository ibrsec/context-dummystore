import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-white flex gap-3 py-4 px-2'>
        <NavLink to='/home' >Home</NavLink>
        <NavLink to='/about' >About</NavLink>
        <NavLink to='/products' >Products</NavLink>
        <NavLink to='/' >Login</NavLink>
    </div>
  )
}

export default Navbar