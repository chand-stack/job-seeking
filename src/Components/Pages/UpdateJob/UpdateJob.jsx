import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaBowlingBall } from 'react-icons/fa'
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

export const UpdateJob = () => {
    const { register, handleSubmit } = useForm();
    const currentDate = new Date()

const loadedData = useLoaderData()
console.log(loadedData);

  const onSubmit = async (data) => {
    
    const jobtitle = data.jobtitle
    const salary = data.salary
    const jobtype = data.jobtype
    const employment = data.employment 
    const description = data.description
    const salaryType = data.salaryType
    const joblocation = data.joblocation
    const postingDate = currentDate
    const jobInfo = {
        jobtitle,salary,jobtype,employment,description,postingDate,salaryType,joblocation
    }
const res = await axios.patch(`http://localhost:5000/update/job/${loadedData._id}`, jobInfo)
console.log(res);
if(res.data.acknowledged){
   return Swal.fire({
        title: "Good job!",
        text: "Job Updated Successfully",
        icon: "success"
      });
}
}
    

    

  return (
    <div>
        
        <div className='flex items-center gap-2 justify-center'>
        <h1 className='text-2xl font-bold'>Update Job </h1>
        <FaBowlingBall className='text-purple-700 text-xl'/>
        </div>
        <div>
        <form className="card-body text-black" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-1">
                      Job Title
                    </span>
                  </label>
                  <input
                  defaultValue={loadedData?.jobtitle}
                  {...register("jobtitle")}
                    type="text"
                    placeholder="job title"
                    className="input input-bordered"
                    required
                  />
                </div>



                <div className='md:flex w-full gap-2'>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-1">
                    Salary
                    </span>
                  </label>
                  <input
                  defaultValue={loadedData.salary}
                  {...register("salary")}
                    type="text"
                    placeholder="salary"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-1">
                    Salary Type
                    </span>
                  </label>
                  <select className="select select-bordered w-full "   {...register("salaryType")}>
  <option value="Per Hour">Per Hour</option>
  <option value="Per Month">Per Month</option>
  <option value="Per Year">Per Year</option>
</select>
                </div>
                </div>



                <div className='md:flex w-full gap-2'>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-1">
                      Job Type
                    </span>
                  </label>
                  <select  className="select select-bordered w-full "  {...register("jobtype")}>
  <option value="Onsite" >Onsite</option>
  <option value="Remote" >Remote</option>
</select>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-1">
                    Type of employment
                    </span>
                  </label>
                  <select className="select select-bordered w-full "   {...register("employment")}>
  <option value="Intern">Intern</option>
  <option value="Part Time">Part-Time</option>
  <option value="Full Time">Full-Time</option>
</select>
                </div>
                </div>

                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-1">
                      Location
                    </span>
                  </label>
                  <select  className="select select-bordered w-full "  {...register("joblocation")}>
  <option value="Sylhet" >Sylhet</option>
  <option value="Dhaka" >Dhaka</option>
  <option value="Chittagong" >Chittagong</option>
  <option value="Rajshahi" >Rajshahi</option>
  <option value="Barisal" >Barisal</option>
  <option value="Rangpur" >Rangpur</option>
</select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-1">
                      Job Description
                    </span>
                  </label>
                  <textarea defaultValue={loadedData?.description} {...register("description")} name='description' className="textarea textarea-bordered h-24" placeholder="job description"></textarea>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white"
                  >
                    Update Post
                  </button>
                </div>
               
              </form>
        </div>
    </div>
  )
}
