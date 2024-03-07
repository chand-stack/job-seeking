import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { FaBowlingBall } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export const AllJobs = () => {

  const {data:jobs=[], refetch, isLoading} = useQuery({
    queryKey:["jobs"],
    queryFn: async () => {
        const res = await axios.get(`http://localhost:5000/admin/all-job`)
        return res.data
    }
})



const deleteHandler = async (id) => {



  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

      try {
        console.log(id);
        const res = axios.delete(`http://localhost:5000/admin/delete-job/${id}`);
        console.log(res);
        refetch()
    } catch (error) {
        console.error("Error deleting job:", error.response.data || error.message);
    }

refetch()
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });




  
};


  return (
    <div>
      <div className='flex items-center gap-2 justify-center'>
        <h1 className='text-2xl font-bold'>All Jobs</h1>
        <FaBowlingBall className='text-purple-700 text-xl'/>
        </div>

        <div>


        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Job Title</th>
        <th>Employment</th>
        <th>Job Type</th>
        <th>Salary</th>
        <th>Salary Type</th>
        <th>Delete Post</th>
        <th>Update Post</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        jobs.map(job => <tr key={job?._id}>
          
          <td>
            <div className="flex items-center gap-3">
              
              <div>
                <div className="font-bold">{job?.jobtitle
}</div>
                <div className="text-sm opacity-50">{job?.joblocation}</div>
              </div>
            </div>
          </td>
          <td>
            {job?.employment}
          </td>
          <td>{job?.jobtype}</td>
          <td>{job?.salary}</td>
          <td>{job?.salaryType}</td>
          <th>
            <button onClick={()=>deleteHandler(job._id)} className="btn btn-ghost btn-xs text-white bg-red-600">delete</button>
          </th>
          <th>
            <Link to={`/dashboard/updateJob/${job._id}`} className="btn btn-ghost btn-xs text-white bg-blue-500">update</Link>
          </th>
        </tr>)
      }
     
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
      <th>Job Title</th>
        <th>Employment</th>
        <th>Job Type</th>
        <th>Salary</th>
        <th>Salary Type</th>
        <th>Delete Post</th>
        <th>Update Post</th>
      </tr>
    </tfoot>
    
  </table>
</div>

        </div>
    </div>
  )
}
