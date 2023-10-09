
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleSignOut = () =>{
    logOut()
    .then()
    .catch()
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <nav className="grid gap-2 md:flex justify-center py-7 mx-14 md:mx-5">

        
        <ul className="grid grid-cols-3 gap-2 text-center md:flex md:gap-5 text-md lg:text-xl font-semibold">

          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#A2783A] underline" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#A2783A] underline" : ""
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#A2783A] underline" : ""
              }
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#A2783A] underline" : ""
              }
            >
              Sign Up
            </NavLink>
          </li>
          {
            user ?
            <li onClick={handleSignOut} className="cursor-pointer">Sign Out</li>
            :
            <li>
            <NavLink
              to="/signin"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#A2783A] underline" : ""
              }
            >
              Sign in
            </NavLink>
          </li>
          }


        </ul>
      </nav>
    </div>
  );
};

export default Navbar;