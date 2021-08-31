import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const { pathname } = location;
  console.log(pathname);
  return (
    <nav className="flex justify-between w-full bg-white text-gray p-4 shadow-md">
      <NavLink className="font-semibold text-xl tracking-tight" to="/">
        Jobber
      </NavLink>
      <div className="md:items-center md:w-auto flex">
        {pathname === "/" && (
          <NavLink
            className="block mr-4 p-2 ml-2 bg-white text-black font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100"
            activeClassName="active"
            to="/login"
          >
            Login
          </NavLink>
        )}
        {pathname === "/" && (
          <NavLink
            className="block p-2 ml-2 bg-yellow-400 text-black font-semibold leading-none border border-yellow-400 rounded hover:border-transparent hover:bg-yellow-500"
            activeClassName="active"
            to="/signup"
          >
            Signup
          </NavLink>
        )}
        <NavLink
          className="block p-2 ml-2 bg-yellow-400 text-black font-semibold leading-none border border-yellow-400 rounded hover:border-transparent hover:bg-yellow-500"
          activeClassName="active"
          to="/job/new"
        >
          Post a Job
        </NavLink>
        <NavLink
          className="block p-2 ml-2 bg-yellow-400 text-black font-semibold leading-none border border-yellow-400 rounded hover:border-transparent hover:bg-yellow-500"
          activeClassName="active"
          to="/profile/new"
        >
          Create Profile
        </NavLink>
        {/* <small>(Access with token only)</small> */}
      </div>
    </nav>
  );
};

export default Navigation;
