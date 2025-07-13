import React from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';



const NavBar = () => {
  
  return (
      <div className='flex itmes-centre justify-between py-4 font-medium px-10 bg-gray-400'>
        <Link to='/' > <h1>TRANSLATOR</h1> </Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700 mr-10'>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
          </NavLink>
        </ul>
      </div>
      )

}

export default NavBar