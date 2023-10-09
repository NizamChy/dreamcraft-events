import { Outlet } from "react-router-dom";
import Header from "../pages/shared/header/Header";
import Navbar from "../pages/shared/navbar/Navbar";
import Footer from "../pages/footer/Footer";

const Root = () => {
  return (
    <div className=" bg-[#F8714726] max-w-screen-2xl mx-auto">
      <Header></Header>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
