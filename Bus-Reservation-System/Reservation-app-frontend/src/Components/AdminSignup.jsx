import { useState } from "react";
import "../Styles/AdminSignup.css"
import axios from "axios";
const AdminSignup=()=>{
    let[name,setname]=useState("")
    let[email,setemail]=useState("")
    let[password,setpassword]=useState("")
    let[phone,setphone]=useState("")
    let[gst_number,setgstnumber]=useState("")
    let[travels_name,settravelsname]=useState("")
    let data={name,email,password,phone,gst_number,travels_name}

    function createAdmin(e){
        e.preventDefault()
        axios.post("http://localhost:8080/api/admins",data)
        .then((res)=>{
            alert("data added successfully")
            console.log(res);
        })
        .catch((err)=>{
            alert("invalid data")
        })
    }
    return(
        <div className="adminsignup">
            <form onSubmit={createAdmin} action="">
                <label htmlFor="">Name</label><input type="text" required value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="Enter the name"  />
                <label htmlFor="">Email</label><input type="email" required value={email}onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter the email address"/>
                <label htmlFor="">Password</label><input type="password" required value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter the password"/>
                <label htmlFor="">Phone</label><input type="tel" required value={phone} onChange={(e)=>{setphone(e.target.value)}} placeholder="Enter the phone number" />
                <label htmlFor="">Gst Number</label><input type="text" required value={gst_number} onChange={(e)=>{setgstnumber(e.target.value)}} placeholder="Enter the gst number" />
                <label htmlFor="">Travels name</label><input type="text" required value={travels_name} onChange={(e)=>{settravelsname(e.target.value)}} placeholder="Enter the travels name" />
                <button className='btn btn-info '>Register</button>
            </form>
        </div>
    )
}
export default AdminSignup;