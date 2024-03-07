import React from 'react'
import { Nav } from '../../Shared/Nav'
import { Banner } from '../../Shared/Banner'
import { Alljobs } from '../../Shared/Alljobs'
import { Companies } from '../../Shared/Companies'

export const Home = () => {
  return (
    <div>
        
        <Banner/>
        <Companies/>
        <Alljobs/>
    </div>
  )
}
