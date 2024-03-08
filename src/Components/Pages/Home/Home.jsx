import React from 'react'
import { Nav } from '../../Shared/Nav'
import { Banner } from '../../Shared/Banner'
import { Alljobs } from '../../Shared/Alljobs'
import { Companies } from '../../Shared/Companies'
import { useLoaderData } from 'react-router-dom'
import { Explore } from '../../Shared/Explore'

export const Home = () => {
  const jobCount = useLoaderData()
  // console.log(jobCount);
  return (
    <div>
        
        <Banner/>
        <Companies/>
        <Alljobs jobCount={jobCount}/>
        <Explore/>
    </div>
  )
}
