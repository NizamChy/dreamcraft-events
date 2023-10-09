import { useLoaderData } from "react-router-dom";
import Services from "../services/Services";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import Banner from "./Banner";
const Home = () => {


  const services = useLoaderData();

  return (
    <div>
      {/* <div className="text-2xl text-center py-8">
        <h1 className="font-greatVibes text-3xl font-bold text-[#A2783A]">DreamCraft Events</h1>
        <h1 className="font-plexSerif font-semibold  text-[#A2783A]">Nizam&apos;s Event Management</h1>
        <h1 className="font-plexSerif font-semibold  text-[#A2783A]">Social Events</h1>
        <h1 className="font-greatVibes font-semibold text-[#A2783A]">Turning Dreams into Unforgettable Moments</h1>
      </div> */}

      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>


      <Services services={services}></Services>
      <h2 className="text-2xl">This is home</h2>

      <div>
        <div>

        </div>
        <div>

        </div>
      </div>



    </div>
  );
};

export default Home;
