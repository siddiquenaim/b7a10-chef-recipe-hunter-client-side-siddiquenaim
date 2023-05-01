import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="bg-[#F9F9FF]">
      <nav className="navbar flex flex-col lg:flex-row lg:w-[90%] mx-auto py-8">
        <div className="lg:navbar-start">
          <div className="dropdown mr-7">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow rounded-box w-52 border font-bold bg-white"
            >
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                    background: isActive ? "#9674FF" : "#F9F9FF",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                    background: isActive ? "#9674FF" : "#F9F9FF",
                  })}
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-3xl font-extrabold logo"
          >
            TasteTurkish
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 description">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                  background: isActive ? "#9674FF" : "#F9F9FF",
                })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                  background: isActive ? "#9674FF" : "#F9F9FF",
                })}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="lg:navbar-end items-center mt-5 lg:mt-0">
          <NavLink to="/login">
            <button className="btn normal-case">Login</button>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
