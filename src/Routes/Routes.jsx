import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../Components/Pages/Home/Home'
import { Root } from '../MainLayout/Root';
import Signup from '../Components/Pages/Signup/Signup';
import Login from '../Components/Pages/Login/Login';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [{
        path:"/",
        element:<Home/>
      },
{
    path:"/signup",
    element:<Signup/>
},
{
    path:"/login",
    element:<Login/>
}]
    },
  ]);
