import React from 'react'
import { FindjobBanner } from '../../Shared/Findjob/FindjobBanner'
import { Alljobs } from '../../Shared/Alljobs'
import { Companies } from '../../Shared/Companies'

export const Findjob = () => {
  return (
    <div>
        <FindjobBanner/>
        <Alljobs/>
        <Companies/>
    </div>
  )
}
