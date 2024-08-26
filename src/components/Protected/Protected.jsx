import React, { useContext } from "react";
import { authContext } from "../../contexts/Auth";
import { Navigate } from "react-router-dom";

const Protected = ({children ,x}) => {
 const {isAuth}  = useContext(authContext)
console.log(x);

 if(isAuth) {

    return children
 }else{
    return <Navigate to="/"/>
 }
 
}

Protected.propTypes = {
    children:React.ReactNode,
    x:Number

}


export default Protected;
