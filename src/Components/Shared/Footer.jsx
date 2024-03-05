import React from 'react'
import { FaBowlingBall } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className=' w-full'><footer className="footer p-10 bg-slate-800 text-white">
    <nav>
      <div>
      <h1 className="btn btn-ghost text-xl font-bold">
        <FaBowlingBall className='text-white'/>
        JobHuntly</h1>
        <h1 className='py-2'>Great platform for the job seeker that <br /> passionate about startups. Find your dream job easier.</h1>
      </div>
    </nav> 
    <nav>
      <h6 className="footer-title">Company</h6> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Legal</h6> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav> 
    <form>
      <h6 className="footer-title">Get job notifications</h6> 
      <fieldset className="form-control w-80">
        <label className="label">
          <span className="label-text text-white">Enter your email address</span>
        </label> 
        <div className="join">
          <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
          <button className="btn btn-primary join-item">Subscribe</button>
        </div>
      </fieldset>
    </form>
  </footer>
  <footer className="footer footer-center p-4 bg-slate-700 text-white">
  <aside>
    <p>Copyright © 2024 - All right reserved by JobHuntly</p>
  </aside>
</footer>
  </div>
  )
}
