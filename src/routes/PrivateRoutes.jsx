import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);


  if(loading){
    return <div className="flex justify-center items-center">
      <span className="loading loading-md loading-spinner text-info"></span>
    </div>
  }

  if(user){
    return children;
  }



  return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

export default PrivateRoutes;