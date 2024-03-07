import React, { useContext } from 'react'
import { FaBowlingBall } from 'react-icons/fa'
import { AuthContext } from '../../../AuthProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const AppliedJobs = () => {
const {user} = useContext(AuthContext)

const { data: jobs, isLoading } = useQuery({
  queryKey: ["jobs", user],
  queryFn: async () => {
    try {
      const res = await axios.get(`http://localhost:5000/applied/jobs/${user?.email}`);
      console.log(res.data);
      if (res.data && res.data !== undefined) {
        return res.data
      } else {
        return null; 
      }
    } catch (error) {
      console.error("Error fetching admin data:", error);
      throw error;
    }
  },
});

  return (
    <div>
      <div className='flex items-center gap-2 justify-center'>
        <h1 className='text-2xl font-bold'>Applied Jobs </h1>
        <FaBowlingBall className='text-purple-700 text-xl'/>
        </div>


        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Job Title</th>
        <th>Employment</th>
        <th>Job Type</th>
        <th>Salary</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        jobs?.map(job => <tr key={job?._id}>
          
          <td>
            <div className="flex items-center gap-3">
              
              <div>
                <div className="font-bold">{job?.jobTitle
}</div>
                <div className="text-sm opacity-50">{job?.joblocation}</div>
              </div>
            </div>
          </td>
          <td>
            {job?.
jobEmployment}
          </td>
          <td>{job?.
jobType
}</td>
          <td>{job?.jobSalary
}</td>
          <td>{job?.
jobLocation}</td>
          
          <th>
            
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
        <th>Location</th>
      </tr>
    </tfoot>
    
  </table>
</div>


    </div>
  )
}
