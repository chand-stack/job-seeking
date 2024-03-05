import React from 'react'

export const Banner = () => {
  return (
    <div className='w-full'>

<div className="hero min-h-screen bg-slate-50">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Discover <br /> More Than <br /> <span className='text-blue-500'>5000 Jobs</span></h1>
      <p className="py-6">Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white bg-purple-800">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}
