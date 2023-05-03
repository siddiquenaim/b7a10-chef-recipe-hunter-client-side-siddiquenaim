import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="bg-[#F2F2F2]">
      <nav className="navbar flex lg:flex-row lg:w-[90%] mx-auto py-8">
        <div className="lg:navbar-start bg-[#F2F2F2]">
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
              className="dropdown-content menu p-2 shadow rounded-box w-52 border font-bold bg-[#F2F2F2]"
            >
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                    background: isActive ? "#301c04e4" : "#F2F2F2",
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
                    background: isActive ? "#301c04e4" : "#F2F2F2",
                  })}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                {!user ? (
                  <NavLink
                    to="/login"
                    style={({ isActive }) => ({
                      color: isActive ? "#fff" : "#545e6f",
                      background: isActive ? "#301c04e4" : "#F2F2F2",
                    })}
                  >
                    Login
                  </NavLink>
                ) : (
                  <NavLink
                    onClick={handleLogOut}
                    style={{
                      color: "#545e6f",
                      background: "#F2F2F2",
                    }}
                  >
                    Logout
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="normal-case text-3xl font-extrabold logo hidden lg:flex"
          >
            TasteTurkish
          </Link>
        </div>
        <div className="navbar-center lg:hidden mx-auto">
          <Link to="/" className="normal-case text-3xl font-extrabold logo">
            TasteTurkish
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 description">
            <li className="mr-3">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#545e6f",
                  background: isActive ? "#301c04e4" : "#F2F2F2",
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
                  background: isActive ? "#301c04e4" : "#F2F2F2",
                })}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="w-10 tooltip tooltip-left lg:hidden navbar-end"
          data-tip={user?.displayName}
        >
          <img className="rounded-full" src={user?.photoURL} />
        </div>
        <div className="navbar-end items-center mt-5 lg:mt-0 hidden lg:flex">
          {!user ? (
            <NavLink to="/login">
              <button className="btn btn-custom normal-case">Login</button>
            </NavLink>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <div
                className="w-10 tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img className="rounded-full" src={user?.photoURL} />
              </div>

              <button
                onClick={handleLogOut}
                className="btn btn-custom normal-case"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
