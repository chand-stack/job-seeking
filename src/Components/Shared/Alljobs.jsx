import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import img from "../../../src/assets/user.gif"
import { useForm } from 'react-hook-form';
import { FaLocationDot } from "react-icons/fa6";

export const Alljobs = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(10);
    const [jobtitle, setJobtitle] = useState("")
    const [joblocation,setJoblocation] = useState("")
    const [salarytype,setSalarytype] = useState("")
    const [jobtype, setJobtype] = useState("")
    const [postingdate,setPostingdate]= useState("")

    const { register, handleSubmit } = useForm();

    const {data:jobs=[], refetch, isLoading} = useQuery({
        queryKey:["jobs",currentPage,jobtitle,joblocation,salarytype,jobtype,postingdate],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/all-job?page=${currentPage}&itemperpage=${itemPerPage}&jobtitle=${jobtitle}&joblocation=${joblocation}&salarytype=${salarytype}&jobtype=${jobtype}&postingdate${postingdate}`)
            return res.data
        }
    })

    const currentDate = new Date();

    const pages = Math.ceil(jobs.length / itemPerPage);
    console.log(pages);
    const totalPages = [...Array(pages).keys()];
  console.log(totalPages);
    console.log(jobs);

    const prevHandler = () => {
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1);
          refetch()
        }
      };
    
      const nextHandler = () => {
        if (currentPage < totalPages.length) {
          setCurrentPage(currentPage + 1);
          refetch()
        }
      };

      const onSubmit = async data => {
        console.log(data);
      setJobtitle(data.searchjob)
      setJoblocation(data.joblocation)
      setSalarytype(data.salarytype)
      setJobtype(data.jobtype)
      setPostingdate(data.postingdate)
      }

  return (
    <div>

        <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>Featured<span className='text-blue-500'>jobs</span></h1>

        <form className='' onSubmit={handleSubmit(onSubmit)}>
        <div className=' flex flex-wrap justify-center'>
  <div>
    <div>
      <input  {...register("searchjob")} className="input input-bordered join-item" placeholder="Search Jobs"/>
    </div>
  </div>
  <select className="select select-bordered join-item" {...register("joblocation")}>
    <option value="">Location</option>
    <option value="Sylhet" >Sylhet</option>
  <option value="Dhaka" >Dhaka</option>
  <option value="Chittagong" >Chittagong</option>
  <option value="Rajshahi" >Rajshahi</option>
  <option value="Barisal" >Barisal</option>
  <option value="Rangpur" >Rangpur</option>
  </select>
  <div>
  <select className="select select-bordered join-item" {...register("jobtype")}>
    <option value="">Job Type</option>
    <option value="Onsite">Onsite</option>
  <option value="Remote">Remote</option>
  </select>
  </div>
  <div>
  <select className="select select-bordered join-item" {...register("salarytype")}>
    <option value="">Salary Type</option>
    <option value="Per Hour">Per Hour</option>
  <option value="Per Month">Per Month</option>
  <option value="Per Year">Per Year</option>
  </select>
  </div>
  <div>
  <select className="select select-bordered join-item" {...register("postingdate")}>
    <option value="">Posting Date</option>
    <option value={new Date(currentDate - 24 * 60 * 60 * 1000)}>Last 24 Hour</option>
  <option value={new Date(currentDate - 7 * 24 * 60 * 60 * 1000)}>Last 7 Days</option>
  <option value={new Date(currentDate).setMonth(new Date(currentDate).getMonth() - 1)}>Last Month</option>
  </select>
  </div>
  <div className="indicator">
    <span className="indicator-item badge badge-secondary">new jobs</span> 
    <button type='submit' className="btn join-item">Search Job</button>
  </div>
</div>
        </form>

<div className='min-h-screen'>

{isLoading ? (
              <div className="flex justify-center">
                <span className="loading loading-spinner text-info loading-lg mx-auto h-[50vh] text-center"></span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-3">
                {jobs?.map((job) => (
                  <div
                    key={job._id}
                    className="space-y-3 border border-gray-700 bg-slate-200 p-3 rounded-lg flex flex-col"
                  >
                    
                    <h1 className="text-2xl md:text-3xl font-semibold text-blue-500">
                      {job?.jobtitle}
                    </h1>

                    <div className="flex flex-grow items-center gap-3">
                      <img className="rounded-full h-12" src={img} alt="" />
                      <div>
                        
                        <p className='font-semibold'>
                          Posted on {new Date(job?.postingDate).toLocaleString()}
                        </p>
                      </div>
                    </div>


                    <div className="">
                      <p>
                        <span className="text-xl font-semibold text-blue-500">
                          Employment Type:{" "}
                        </span>{" "}
                        <span className="text-lg font-semibold">
                          {job?.employment}
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow">
                      <p>
                        <span className="text-xl font-semibold text-blue-500 ">
                          Job Type:{" "}
                        </span>{" "}
                        <span className="text-lg font-semibold">
                          {job?.jobtype}
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow">
                      <p className="text-xl font-semibold">
                        <span className="text-blue-500 font-semibold">Salary Range:</span> $
                        {job?.salary} {job?.salaryType}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <Link to={`/jobDetail/${job?._id}`}>
                        <button className="btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white">
                          Apply
                        </button>
                      </Link>
                      <div className="flex items-center gap-2">
                        <FaLocationDot className="text-2xl font-semibold" />
                        <p className='font-semibold'>{job?.joblocation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

<div>
<div className="container mx-auto flex justify-center items-center mb-10 gap-4">
        <button onClick={prevHandler} className="btn bg-blue-500 text-white">
          Prev
        </button>
        
        <button onClick={nextHandler} className="btn bg-blue-500 text-white">
          Next
        </button>
      </div>
</div>

</div>


    </div>
  )
}
