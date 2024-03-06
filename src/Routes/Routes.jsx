import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../Components/Pages/Home/Home'
import { Root } from '../MainLayout/Root';
import Signup from '../Components/Pages/Signup/Signup';
import Login from '../Components/Pages/Login/Login';
import Dashboard from '../MainLayout/Dashboard';
import { AllJobs } from '../Components/Pages/AllJobs/AllJobs';
import { AddJob } from '../Components/Pages/AddJob/AddJob';
import { UpdateJob } from '../Components/Pages/UpdateJob/UpdateJob';
import { AppliedJobs } from '../Components/Pages/AppliedJobs/AppliedJobs';

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
    {
        path:"/dashboard",
        element:<Dashboard/>,
        children:[
            {
                path:"alljobs",
                element:<AllJobs/>
            },
            {
                path:"addjob",
                element:<AddJob/>
            },
            {
                path:"updateJob/:id",
                loader: ({params})=> fetch(`http://localhost:5000/update-job/${params.id}`),
                element:<UpdateJob/>

            },
            {
                path:"appliedjobs",
                elementp:<AppliedJobs/>
            }
        ]
    }
  ]);
