import { Link, NavLink, Outlet } from "react-router-dom";
import { BsMenuButtonWideFill, BsFillBookmarkStarFill } from "react-icons/bs";
import { GrDocumentTest } from "react-icons/gr";
import { FaBowlingBall, FaHome } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin()
  console.log(isAdmin?.userRole);
  return (
    <div className="flex font-poppin mx-auto">
      <div className="lg:w-1/4 min-h-screen bg-slate-50">
        <div className="hidden lg:flex items-center gap-2 justify-center py-5">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
        <FaBowlingBall className='text-purple-700'/>
        JobHuntly</Link>
        </div>
        <div className="hidden lg:contents">
          <ul className="menu-vertical space-y-4 p-4">
            
           {isAdmin?.userRole === "admin" ?    <>
                {/* admin routes */}

                
                
                <li className="text-lg rounded-xl py-1 border-y font-semibold">
                  <NavLink
                    to="/dashboard/alljobs"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-600 flex items-center gap-2"
                        : "flex items-center gap-2 "
                    }
                  >
                    <GrDocumentTest /> All Jobs
                  </NavLink>
                </li>
                <li className="text-lg rounded-xl py-1 border-y font-semibold">
                  <NavLink
                    to="/dashboard/addjob"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-600 flex items-center gap-2"
                        : "flex items-center gap-2 "
                    }
                  >
                    <IoIosAddCircle /> Add A Job
                  </NavLink>
                </li>
                <li className="text-lg rounded-xl flex  py-1 border-y font-semibold">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-600 flex items-center gap-2"
                        : "flex items-center gap-2"
                    }
                  >
                    <FaHome />
                    Home
                  </NavLink>
                </li>
              </>: <>
              <li className="text-lg rounded-xl flex  py-1 border-y font-semibold">
                  <NavLink
                    to="/dashboard/appliedjobs"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-600 flex items-center gap-2"
                        : "flex items-center gap-2"
                    }
                  >
                    <FaHome />
                    Applied Jobs
                  </NavLink>
                </li>
              <li className="text-lg rounded-xl flex  py-1 border-y font-semibold">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-600 flex items-center gap-2"
                        : "flex items-center gap-2"
                    }
                  >
                    <FaHome />
                    Home
                  </NavLink>
                </li>
              </>}
         
          </ul>
        </div>
        <div className="lg:hidden fixed z-50">
          {/* drawer for mobile */}
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-2"
                className="pt-2 pl-1 drawer-button lg:hidden"
              >
                <BsMenuButtonWideFill className="text-3xl" />
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <ul className="menu-vertical p-4 w-80 space-y-4 min-h-full bg-base-200">
                <div className="flex items-center gap-2 justify-center py-5">
                <Link to="/" className="btn btn-ghost text-xl font-bold">
        <FaBowlingBall className='text-purple-700'/>
        JobHuntly</Link>
                </div>
                {/* Sidebar content here */}
                
                  <>
                    {/* admin routes */}
                    <li className="btn w-full text-lg btn-sm rounded-xl">
                      <NavLink
                        to="/dashboard/alljobs"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "bg-blue-600 text-white w-full h-full rounded-xl"
                            : ""
                        }
                      >
                        All Jobs
                      </NavLink>
                    </li>
                    <li className="btn w-full text-lg btn-sm rounded-xl">
                      <NavLink
                        to="/dashboard/addjob"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "bg-blue-600 text-white w-full h-full rounded-xl"
                            : ""
                        }
                      >
                        Add A Job
                      </NavLink>
                    </li>
                    <li className="btn w-full text-lg btn-sm rounded-xl">
                      <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "bg-blue-600 text-white w-full h-full rounded-xl"
                            : ""
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                  </>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;