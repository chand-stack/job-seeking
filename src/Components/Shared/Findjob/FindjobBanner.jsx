import React from 'react'
import img from '../../../assets/jobseekcover.jpg'
export const FindjobBanner = () => {
  return (
    <div className='w-full'><div className="hero min-h-[50vh] w-full" style={{backgroundImage: `url(${img})`}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-white">
      <div className="max-w-md">
      <h1 className="text-5xl font-bold my-2">Find your <span className='text-[#40ccff]'>dreamjob</span></h1>
        <p className="mb-5">Find your next career at companies like HubSpot, Nike, and Dropbox</p>
      </div>
    </div>
  </div></div>
  )
}
