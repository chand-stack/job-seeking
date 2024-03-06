import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import Swal from 'sweetalert2'

export const Banner = () => {

  const {loginUser}= useContext(AuthContext)

    const loginHandler = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value 
        console.log(email,password);
        loginUser(email,password)
        .then(()=> {
          Swal.fire({
            title: "Good job!",
            text: "Successfully Loged In!",
            icon: "success"
          });
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  return (
    <div className='w-full'>

<div className="hero min-h-screen bg-slate-50">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Discover <br /> More Than <br /> <span className='text-blue-500'>5000 Jobs</span></h1>
      <p className="py-6">Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={loginHandler}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-semibold">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary text-white bg-purple-800">Login</button>
        </div>
        <label className="label">
           <h1 className='font-semibold'>Dont have an account? Please <Link className='font-bold text-purple-800'>Signup</Link></h1>
          </label>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}
