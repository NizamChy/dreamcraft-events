import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layouts/Root";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";
import OurServices from "../pages/services/OurServices";
import AboutUs from "../pages/about/AboutUs";
import ErrorPage from "../pages/errorpage/ErrorPage";
import ServiceDetails from "../pages/services/serviceDetails";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/services",
        element: <PrivateRoutes><OurServices></OurServices></PrivateRoutes>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/about",
        element: <PrivateRoutes><AboutUs></AboutUs></PrivateRoutes>,
      },
      {
        path: "/service/:id",
        element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
        loader: () => fetch('/data.json'),
        
      }
    ],
  },
]);

export default Routes;
