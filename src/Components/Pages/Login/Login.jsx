import img from "../../../assets/loginjpg.png";
import { AiFillLock } from "react-icons/ai";

import { MdAttachEmail } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
const {loginUser}= useContext(AuthContext)
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const passowrd = form.password.value;
    console.log(email,passowrd);
    loginUser(email,passowrd)
    .then(()=>{
        console.log("login successfully")
        Swal.fire({
          title: "Good job!",
          text: "Successfully Loged In!",
          icon: "success"
        });
        navigate("/")
    })
    .catch((err)=>{
        console.log(err);
    })

  };

  return (
    <>
      <div className="container mx-auto my-20">
        <div className=" mt-10 px-5 lg:px-10">
          <div className="flex flex-col-reverse justify-around md:flex-row items-center">
            <div className="text-center lg:text-left">
              <img className="lg:max-w-md mx-auto md:mx-0" src={img} alt="" />
            </div>
            <div className="card  w-full shadow-2xl border-2 max-w-md flex-grow ">
              <h1 className="font-bold text-2xl md:text-3xl text-center text-black py-5">
                Login <span className="text-[#A582F7]">Now</span>
              </h1>
              <form onSubmit={loginHandler} className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black font-semibold flex items-center gap-1">
                      <MdAttachEmail className="text-[#A582F7] text-2xl" />
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black font-semibold flex items-center gap-1">
                      <AiFillLock className="text-[#A582F7] text-2xl" />
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary bg-gradient-to-t from-[#7367F0] from-10% via-[#A582F7] via-30% to-[#CE9FFC] to-90% border-none text-white"
                  >
                    Login
                  </button>
                </div>
                <p className="text-center mt-3 -mb-3 text-black font-semibold">
                  Dont Have An Account? Please{" "}
                  <Link to="/signup" className="text-[#A582F7] font-bold">
                    Signup
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;