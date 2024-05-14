import { IoPersonAddOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";

import bed from "../../assets/images/room1.jpg";
import bed1 from "../../assets/images/room2.jpg";
import bed2 from "../../assets/images/room3.jpg";
import offer from "../../assets/images/fifteen.png";
import sp from "../../assets/images/sp.png";
import useAuth from "../../hook/useAuth";
import React from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [showModal, setShowModal] = React.useState(false);

  const handleclose = () => {
    setShowModal(false);
  };

  const handleHome = () => {
    setShowModal(true);
  };

  const navlinks = (
    <>
      <NavLink
        onClick={handleHome}
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
      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#FA4612] lg:border-b-2 underline-offset-2 border-[#FA4612] text-lg font-semibold"
              : "font-semibold text-lg"
          }
          to={`/mybookings`}
        >
          My Bookings
        </NavLink>
      )}
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
    <div className="shadow-xl sticky top-0 z-50 bg-white">
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
          <Link to="/" className="btn btn-ghost text-xl">Ocean Heaven Hotel</Link>
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
                  <button
                    onClick={handlerLogout}
                    className="btn text-[white] font-semibold hover:border-[#FA4612] bg-[#FA4612] hover:bg-transparent hover:text-[#FA4612]"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-transparent hover:bg-[#fa441230] text-[#FA4612] border-none"
                    : "btn font-bold bg-transparent hover:bg-[#fa441230] text-[black] border-none"
                }
              >
                <IoPersonAddOutline /> Sign In
              </NavLink>
              <span className="font-bold text-lg text-[#FA4612]">|</span>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold bg-transparent hover:bg-[#fa441230] text-[#FA4612] border-none"
                    : "btn font-bold bg-transparent hover:bg-[#fa441230] text-[black] border-none"
                }
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto lg:max-w-2xl max-w-[250px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <figure className="lg:px-20 lg:py-10">
                  <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full flex-col">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="lg:text-3xl text-xl font-semibold">
                          Executive Suite
                        </h3>
                      </div>
                      <div className="relative">
                        <img src={bed} className="w-full" />
                        <img
                          src={offer}
                          alt=""
                          className="lg:w-[150px] w-12 bottom-5 left-24 -rotate-12  absolute"
                        />
                        <img
                          src={sp}
                          alt=""
                          className="lg:w-[150px] w-12 top-0 left-5 -rotate-12 absolute"
                        />
                      </div>
                    </div>
                    <div
                      id="item2"
                      className="carousel-item w-full flex-col relative"
                    >
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="lg:text-3xl text-lg font-semibold">
                          {" "}
                          Deluxe King
                        </h3>
                      </div>
                      <div className="relative">
                        <img src={bed1} className="w-full" />
                        <img
                          src={offer}
                          alt=""
                          className="lg:w-[150px] w-12 bottom-5 left-24 -rotate-12  absolute"
                        />
                        <img
                          src={sp}
                          alt=""
                          className="lg:w-[150px] w-12 top-0 left-5 -rotate-12 absolute"
                        />
                      </div>
                    </div>
                    <div
                      id="item3"
                      className="carousel-item w-full flex-col relative"
                    >
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="lg:text-3xl text-lg font-semibold">
                          Executive Suite
                        </h3>
                      </div>
                      <div className="relative">
                        <img src={bed2} className="w-full" />
                        <img
                          src={offer}
                          alt=""
                          className="lg:w-[150px] w-12 bottom-5 left-24 -rotate-12  absolute"
                        />
                        <img
                          src={sp}
                          alt=""
                          className="lg:w-[150px] w-12 top-0 left-5 -rotate-12 absolute"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">
                      1
                    </a>
                    <a href="#item2" className="btn btn-xs">
                      2
                    </a>
                    <a href="#item3" className="btn btn-xs">
                      3
                    </a>
                  </div>
                </figure>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase lg:px-5 lg:py-3 px-2 border-red-500 border-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 absolute -top-5 -right-8 bg-white rounded-full"
                    type="button"
                    onClick={handleclose}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
