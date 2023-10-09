import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <nav className="grid gap-2 md:flex justify-between py-7 mx-14 md:mx-5">
        <Link to={"/"}>
        <Logo></Logo>
        </Link>
        
        <ul className="flex gap-5 text-xl font-semibold">

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
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#A2783A] underline" : ""
              }
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#A2783A] underline" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#A2783A] underline" : ""
              }
            >
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#A2783A] underline" : ""
              }
            >
              Sign up
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;