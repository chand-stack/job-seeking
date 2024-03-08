import React from 'react'
import { FaPencilRuler } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GrAnnounce } from "react-icons/gr";
import { FaMoneyBills } from "react-icons/fa6";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
export const Explore = () => {
  return (
    <div className='container mx-auto my-20'>
       <h1 className='text-start text-3xl md:text-5xl font-bold my-10'>Explore by<span className='text-blue-500'> category</span></h1> 
       
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
       <div className='group'>
<div className='bg-white border-2 shadow-md space-y-3 py-5 px-5 group-hover:bg-purple-800  group-hover:text-white group-hover:duration-1000'>
<FaPencilRuler className='text-6xl text-purple-800 group-hover:text-white'/>
<h1 className='text-2xl font-bold text-black text-start group-hover:text-white'>Design</h1>
<div className='text-2xl text-slate-600 flex items-center gap-5 group-hover:text-white'><p>235 jobs available </p>
<FaLongArrowAltRight/>
</div>
</div>
</div>
       <div className='group'>
<div className='bg-white border-2 shadow-md space-y-3 py-5 px-5 group-hover:bg-purple-800  group-hover:text-white group-hover:duration-1000'>
<FcSalesPerformance className='text-6xl text-purple-800 group-hover:text-white'/>
<h1 className='text-2xl font-bold text-black text-start group-hover:text-white'>Sales</h1>
<div className='text-2xl text-slate-600 flex items-center gap-5 group-hover:text-white'><p>756 jobs available </p>
<FaLongArrowAltRight/>
</div>
</div>
</div>
       <div className='group'>
<div className='bg-white border-2 shadow-md space-y-3 py-5 px-5 group-hover:bg-purple-800  group-hover:text-white group-hover:duration-1000'>
<GrAnnounce className='text-6xl text-purple-800 group-hover:text-white'/>
<h1 className='text-2xl font-bold text-black text-start group-hover:text-white'>Marketing</h1>
<div className='text-2xl text-slate-600 flex items-center gap-5 group-hover:text-white'><p>140 jobs available </p>
<FaLongArrowAltRight/>
</div>
</div>
</div>
       <div className='group'>
<div className='bg-white border-2 shadow-md space-y-3 py-5 px-5 group-hover:bg-purple-800  group-hover:text-white group-hover:duration-1000'>
<FaMoneyBills className='text-6xl text-purple-800 group-hover:text-white'/>
<h1 className='text-2xl font-bold text-black text-start group-hover:text-white'>Finance</h1>
<div className='text-2xl text-slate-600 flex items-center gap-5 group-hover:text-white'><p>325 jobs available </p>
<FaLongArrowAltRight/>
</div>
</div>
</div>
       <div className='group'>
<div className='bg-white border-2 shadow-md space-y-3 py-5 px-5 group-hover:bg-purple-800  group-hover:text-white group-hover:duration-1000'>
<MdOutlineScreenshotMonitor className='text-6xl text-purple-800 group-hover:text-white'/>
<h1 className='text-2xl font-bold text-black text-start group-hover:text-white'>Technology</h1>
<div className='text-2xl text-slate-600 flex items-center gap-5 group-hover:text-white'><p>436 jobs available </p>
<FaLongArrowAltRight/>
</div>
</div>
</div>
       <div className='group'>
<div className='bg-white border-2 shadow-md space-y-3 py-5 px-5 group-hover:bg-purple-800  group-hover:text-white group-hover:duration-1000'>
<FaCode className='text-6xl text-purple-800 group-hover:text-white'/>
<h1 className='text-2xl font-bold text-black text-start group-hover:text-white'>Engineering</h1>
<div className='text-2xl text-slate-600 flex items-center gap-5 group-hover:text-white'><p>542 jobs available </p>
<FaLongArrowAltRight/>
</div>
</div>
</div>
       <div className='group'>
<div className='bg-white border-2 shadow-md space-y-3 py-5 px-5 group-hover:bg-purple-800  group-hover:text-white group-hover:duration-1000'>
<MdBusinessCenter className='text-6xl text-purple-800 group-hover:text-white'/>
<h1 className='text-2xl font-bold text-black text-start group-hover:text-white'>Business</h1>
<div className='text-2xl text-slate-600 flex items-center gap-5 group-hover:text-white'><p>211 jobs available </p>
<FaLongArrowAltRight/>
</div>
</div>
</div>
       <div className='group'>
<div className='bg-white border-2 shadow-md space-y-3 py-5 px-5 group-hover:bg-purple-800  group-hover:text-white group-hover:duration-1000'>
<FaUsers className='text-6xl text-purple-800 group-hover:text-white'/>
<h1 className='text-2xl font-bold text-black text-start group-hover:text-white'>Human Resource</h1>
<div className='text-2xl text-slate-600 flex items-center gap-5 group-hover:text-white'><p>346 jobs available </p>
<FaLongArrowAltRight/>
</div>
</div>
</div>
       </div>

       
    </div>
  )
}
