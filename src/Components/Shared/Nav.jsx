import React from 'react'
import { FaBowlingBall } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const Nav = () => {
    const links = <>
    <li><NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
Find Jobs
</NavLink></li>
    <li><NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
Browse Companies
</NavLink></li>
    </>
  return (
    <div className='container mx-auto'><div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {links}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl font-bold">
        <FaBowlingBall className='text-purple-700'/>
        JobHuntly</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
       {links}
      </ul>
    </div>
    <div className="navbar-end text-2xl">
      <a className="btn mr-2 text-purple-800 bg-transparent border-none hover:bg-purple-800 hover:text-white">Login</a>
      <Link to="/signup" className="btn text-white bg-purple-800 hover:bg-white hover:text-purple-800">Signup</Link>
    </div>
  </div></div>
  )
}
