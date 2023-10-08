import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div className="border-8 border-red-600 max-w-screen-2xl mx-auto bg-[#F8714726]">
       <Outlet></Outlet>
    </div>
  );
};

export default Root;