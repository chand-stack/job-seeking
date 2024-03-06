import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaBowlingBall } from 'react-icons/fa'
import Swal from 'sweetalert2';

export const AddJob = () => {
    const { register, handleSubmit } = useForm();
    const currentDate = new Date()
  const onSubmit = async (data) => {
    
    const jobtitle = data.jobtitle
    const salary = data.salary
    const jobtype = data.jobtype
    const employment = data.employment 
    const description = data.description
    const postingDate = currentDate
    const jobInfo = {
        jobtitle,salary,jobtype,employment,description,postingDate
    }
const res = await axios.post("http://localhost:5000/post-job", jobInfo)
console.log(res.data.insertedId);
if(res.data.insertedId){
   return Swal.fire({
        title: "Good job!",
        text: "Job Posted Successfully",
        icon: "success"
      });
}
}
    

    

  return (
    <div>
        
        <div className='flex items-center gap-2 justify-center'>
        <h1 className='text-2xl font-bold'>Post A Job </h1>
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
                  {...register("jobtitle")}
                    type="text"
                    placeholder="job title"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-1">
                      Salary
                    </span>
                  </label>
                  <input
                  {...register("salary")}
                    type="text"
                    placeholder="salary"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className='md:flex w-full gap-2'>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-1">
                      Job Type
                    </span>
                  </label>
                  <select  className="select select-bordered w-full "  {...register("jobtype")}>
  <option value="onsite" >Onsite</option>
  <option value="remote" >Remote</option>
</select>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-1">
                    Type of employment
                    </span>
                  </label>
                  <select className="select select-bordered w-full "   {...register("employment")}>
  <option value="intern">Intern</option>
  <option value="party-time">Part-Time</option>
  <option value="full-time">Full-Time</option>
</select>
                </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-lg flex items-center gap-1">
                      Job Description
                    </span>
                  </label>
                  <textarea {...register("description")} name='description' className="textarea textarea-bordered h-24" placeholder="job description"></textarea>
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white"
                  >
                    Post Job
                  </button>
                </div>
               
              </form>
        </div>
    </div>
  )
}
