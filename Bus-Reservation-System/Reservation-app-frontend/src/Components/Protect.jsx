// import React from "react";
// import { Navigate } from "react-router-dom";

//  function Protect({Child}){
//     let x=JSON.parse(localStorage.getItem("Admin"))
//     function verify(){
//         if(!x==null){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     return(
//         <div>
//         {verify() ? <Child/> : <Navigate to='/adminlogin'/>}
//         </div>
//     )
// }
// export default Protect;