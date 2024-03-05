import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from '../Components/Shared/Nav'
import { Footer } from '../Components/Shared/Footer'

export const Root = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
        </div>
  )
}
