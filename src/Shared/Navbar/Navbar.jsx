import { useContext } from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navlinks = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#FA4612] lg:border-b-2 underline-offset-2 border-[#FA4612] text-lg font-semibold"
            : "font-semibold text-lg"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#FA4612] lg:border-b-2 underline-offset-2 border-[#FA4612] text-lg font-semibold"
            : "font-semibold text-lg"
        }
        to="/rooms"
      >
        Rooms
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#FA4612] lg:border-b-2 underline-offset-2 border-[#FA4612] text-lg font-semibold"
            : "font-semibold text-lg"
        }
        to="/mybookings"
      >
        My Bookings
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#FA4612] lg:border-b-2 underline-offset-2 border-[#FA4612] text-lg font-semibold"
            : "font-semibold text-lg"
        }
        to="/aboutus"
      >
        About Us
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-[#FA4612] lg:border-b-2 underline-offset-2 border-[#FA4612] text-lg font-semibold"
            : "font-semibold text-lg"
        }
        to="/contactus"
      >
        Contact Us
      </NavLink>
    </>
  );
  const handlerLogout = () => {
    logOut();
    return toast.success("your logout successfull");
  };
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navlinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user
                      ? user?.photoURL
                      : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box border-2 border-[#FA4612] text-[#FA4612] text-center space-y-2 text-base"
            >
              <li>{user?.displayName}</li>
              <li>{user?.email}</li>
              <li>
                <button onClick={handlerLogout} className="btn text-[white] font-semibold hover:border-[#FA4612] bg-[#FA4612] hover:bg-transparent hover:text-[#FA4612]">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <NavLink
              to="/signin"
              className={({isActive}) => isActive ? "btn font-bold bg-transparent hover:bg-[#fa441230] text-[#FA4612] border-none" : "btn font-bold bg-transparent hover:bg-[#fa441230] text-[black] border-none" }
            >
              <IoPersonAddOutline /> Sign In
            </NavLink>
            <span className="font-bold text-lg text-[#FA4612]">|</span>
            <NavLink
              to="/signup"
              className={({isActive}) => isActive ? "btn font-bold bg-transparent hover:bg-[#fa441230] text-[#FA4612] border-none" : "btn font-bold bg-transparent hover:bg-[#fa441230] text-[black] border-none" }
            >
              Sign Up
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
