import { useState } from "react";
import "../Styles/ResetPassword.css"
const ResetPassword=()=>{
    let[password,setpassword]=useState("");
    return(
        <div className="resetpassword">
            <form  action="">
                <label htmlFor="">New Password</label><input type="password" placeholder="Enter new password" />
                <label htmlFor="">Confirm Password</label><input type="password" placeholder="Confirm Password" />
                <button >Reset Password</button>
            </form>
        </div>
    )
}
export default ResetPassword;