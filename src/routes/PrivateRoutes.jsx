import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext);


  if(loading){
    return <div className="flex justify-center items-center">
      <span className="loading loading-md loading-spinner text-info"></span>
    </div>
  }

  if(user){
    return children;
  }



  return <Navigate to="/signin"></Navigate>;
};

export default PrivateRoutes;