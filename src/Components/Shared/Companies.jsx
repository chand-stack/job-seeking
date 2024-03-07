import React from 'react'
import { SiVodafone } from "react-icons/si";
import { SiIntel } from "react-icons/si";
import { SiTesla } from "react-icons/si";
import { SiAmd } from "react-icons/si";
export const Companies = () => {
  return (
    <div className='container mx-auto my-20'>
<h1 className='font-bold text-slate-400 text-center md:text-start my-9 text-2xl'>Companies we helped grow</h1>
<div className='text-slate-400 flex flex-wrap items-center justify-between'>
<div className='flex items-center gap-2'>
    <SiVodafone className='text-6xl'/>
    <h1 className='text-5xl font-bold'>Vodafone</h1>
</div>
<div>
<SiIntel className='text-9xl'/>
</div>
<div className='flex items-center gap-2'>
<SiTesla className='text-6xl'/>
    <h1 className='text-5xl font-bold'>Tesla</h1>
</div>
<div>
<SiAmd className='text-9xl'/>
</div>
<div>
<h1 className='text-6xl font-bold'>Talkit</h1> 
</div>
</div>
    </div>
  )
}
