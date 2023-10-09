import { Link } from "react-router-dom";
import Logo from "../navbar/Logo";

const Header = () => {
  return (
    <div className="flex justify-center">
      <Link to={"/"}>
        <Logo></Logo>
      </Link>

      <div className="ml-12 my-3">
      <h1 className="font-greatVibes text-2xl lg:text-4xl font-bold text-[#A2783A] text-center">DreamCraft Events</h1>

        <h1 className="font-greatVibes text-lg text-center lg:text-2xl font-semibold text-[#A2783A]">Turning Dreams into Unforgettable Moments</h1>
      </div>
    </div>
  );
};

export default Header;
