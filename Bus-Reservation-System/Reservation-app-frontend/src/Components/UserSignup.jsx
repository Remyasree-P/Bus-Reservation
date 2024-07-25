import { useState } from "react";

const UserSignup=()=>{
    let[age,setage]=useState("");
    let[email,setemail]=useState("")
    let[gender,setgender]=useState("")
    let[name,setname]=useState("")
    let[password,setpassword]=useState("")
    let[phone,setphone]=useState("")
    let data=[age,email,gender,name,password,phone]
    return(
        <div className="usersignup">
           <form action="">
            <label htmlFor="">Name</label><input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter the name" />
            <label htmlFor="">Email</label><input type="email" placeholder="Enter the email"/>
            </form> 
        </div>
    )
}
export default UserSignup;