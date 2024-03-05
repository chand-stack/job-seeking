import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../Components/Pages/Home/Home'
import { Root } from '../MainLayout/Root';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [{
        path:"/",
        element:<Home/>
      }]
    },
  ]);
