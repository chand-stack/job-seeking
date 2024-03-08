import React from 'react'
import { FindjobBanner } from '../../Shared/Findjob/FindjobBanner'
import { Companies } from '../../Shared/Companies'
import { Explore } from '../../Shared/Explore'

export const Findjob = () => {
  return (
    <div>
        <FindjobBanner/>
        <Explore/>
        <Companies/>
    </div>
  )
}
