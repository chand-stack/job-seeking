import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import img from "../../../src/assets/user.gif"

export const Alljobs = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(10);
    const {data:jobs=[], refetch, isLoading} = useQuery({
        queryKey:["jobs"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/all-job?page=${currentPage}`)
            return res.data
        }
        
    })
    const pages = Math.ceil(jobs.length / itemPerPage);
    const totalPages = [...Array(pages).keys()];
  console.log(totalPages);
    console.log(jobs);

    const prevHandler = () => {
        if (currentPage > 0) {
          setCurrentPage(currentPage - 1);
        }
      };
    
      const nextHandler = () => {
        if (currentPage < totalPages.length) {
          setCurrentPage(currentPage + 1);
        }
      };
  return (
    <div>

        <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>Featured<span className='text-blue-500'>jobs</span></h1>

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
                        
                        <p>
                          Posted on {new Date(job?.postingDate).toLocaleString()}
                        </p>
                      </div>
                    </div>


                    <div className="">
                      <p>
                        <span className="text-xl font-semibold text-blue-500">
                          Employment Type:{" "}
                        </span>{" "}
                        <span className="text-lg">
                          {job?.employment}
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow">
                      <p>
                        <span className="text-xl font-semibold text-blue-500">
                          Job Type:{" "}
                        </span>{" "}
                        <span className="text-lg">
                          {job?.jobtype}
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow">
                      <p className="text-xl">
                        <span className="text-blue-500">Salary Range:</span> $
                        {job?.salary} per year
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <Link to={`/jobDetail/${job?._id}`}>
                        <button className="btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white">
                          Apply
                        </button>
                      </Link>
                      <div className="flex items-center gap-2">
                        <FaPeopleGroup className="text-2xl" />
                        <p>{job?.applicants} Location</p>
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
        {totalPages.map((item) => (
          <button
            onClick={() => setCurrentPage(item)}
            key={item}
            className={
              currentPage === item
                ? "btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white"
                : "btn bg-blue-500 text-white"
            }
          >
            {item + 1}
          </button>
        ))}
        <button onClick={nextHandler} className="btn bg-blue-500 text-white">
          Next
        </button>
      </div>
</div>
    </div>
  )
}
