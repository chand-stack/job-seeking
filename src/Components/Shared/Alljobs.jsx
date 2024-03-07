import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import img from "../../../src/assets/user.gif"
import { useForm } from 'react-hook-form';
import { FaLocationDot } from "react-icons/fa6";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Swal from 'sweetalert2';

export const Alljobs = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin()
    const [currentPage, setCurrentPage] = useState(0);
    const [itemPerPage, setItemPerPage] = useState(10);
    const [jobtitle, setJobtitle] = useState("")
    const [joblocation,setJoblocation] = useState("")
    const [salarytype,setSalarytype] = useState("")
    const [jobtype, setJobtype] = useState("")
    const [postingdate,setPostingdate]= useState("")


    const [appliedTitle,setappliedTitle] = useState("")
    const [appliedEmployment,setappliedEmployment] = useState("")
    const [appliedSalary,setappliedSalary] = useState("")
    const [appliedJobtype,setappliedJobtype] = useState("")
    const [appliedLocation,setappliedLocation] = useState("")

    const { register, handleSubmit } = useForm();

    const {data:jobs=[], refetch, isLoading} = useQuery({
        queryKey:["jobs",currentPage,jobtitle,joblocation,salarytype,jobtype,postingdate],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/all-job?page=${currentPage}&itemperpage=${itemPerPage}&jobtitle=${jobtitle}&joblocation=${joblocation}&salarytype=${salarytype}&jobtype=${jobtype}&postingdate=${postingdate}`)
            return res.data
        }
    })

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

      const nonApplyHandler = ()=> {
        Swal.fire({
          title: "Please log in to apply for this job?",
          text: " Create an account or sign in",
          icon: "question"
        });
      }

      const applyHandler =(title,employment,salary,jobtype,location)=> {
        
        setappliedTitle(title)
        setappliedEmployment(employment)
        setappliedSalary(salary)
        setappliedJobtype(jobtype)
        setappliedLocation(location)
        document.getElementById('my_modal_1').showModal()
        document.getElementById('appliedbtn').addEventListener("click", ()=> {
          document.getElementById('my_modal_1').close()
        })
      }

      const resumehandler = async (e) => {
        e.preventDefault()
        const resume = e.target.resume.value 
        const userInfo = {
          resume :resume,
          userEmail : user?.email,
          jobTitle :appliedTitle,
          jobEmployment : appliedEmployment,
          jobSalary : appliedSalary,
          jobType : appliedJobtype,
          jobLocation : appliedLocation
        }
        
        const res = await axios.post("http://localhost:5000/applied/jobs", userInfo)
        if(res.data.insertedId){
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
          return
        }
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
    <option value="last24hours">Last 24 Hour</option>
  <option value="last7days">Last 7 Days</option>
  <option value="lastmonth">Last Month</option>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-3 my-10">
                {jobs?.map((job) => (
                  <div
                    key={job._id}
                    className="space-y-3 border p-3 rounded-lg flex flex-col shadow-md"
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


                    <div className="text-start">
                      <p>
                        <span className="text-xl font-semibold text-blue-500">
                          Employment Type:{" "}
                        </span>{" "}
                        <span className="text-lg font-semibold">
                          {job?.employment}
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow text-start">
                      <p>
                        <span className="text-xl font-semibold text-blue-500 ">
                          Job Type:{" "}
                        </span>{" "}
                        <span className="text-lg font-semibold">
                          {job?.jobtype}
                        </span>
                      </p>
                    </div>
                    <div className="flex-grow text-start">
                      <p className="text-xl font-semibold">
                        <span className="text-blue-500 font-semibold">Salary Range:</span> $
                        {job?.salary} {job?.salaryType}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      {user ? <button onClick={()=> applyHandler(job?.jobtitle,job?.employment,job?.salary,job?.jobtype,job?.joblocation)} className="btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white">
                          Apply
                        </button>
                      : <button onClick={()=>nonApplyHandler()} className="btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white">
                      Apply
                    </button>
                  }
                        
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


<div>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Ready to take the next step?</h3>
    <h3 className="font-bold text-lg"> Submit your CV or resume Link</h3>
    <p className="py-4">Your application is just a click away! 🚀</p>
    <form className="modal-action" onSubmit={resumehandler}>

    <input type="text" name='resume' placeholder="Type here" className="input input-bordered w-full max-w-xs " />
      {/* <form method="dialog"> */}
        {/* if there is a button in form, it will close the modal */}
        
        <button id='appliedbtn' type='submit' className="btn bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white">Apply</button>
      {/* </form> */}
    </form>
  </div>
</dialog>
</div>



</div>

</div>


    </div>
  )
}
