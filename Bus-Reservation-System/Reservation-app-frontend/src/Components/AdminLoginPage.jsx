import React, { useState } from 'react'
import "../Styles/AdminLogin.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const AdminLoginPage = () => {
  let[email,setusername]=useState("")
  let[password,setpassword]=useState("")
  let navigate=useNavigate()
  function verify(e){
    e.preventDefault()
    axios.post(`http://localhost:8080/api/admins/verify-by-email?email=${email}&password=${password}`)
    .then((res)=>{
      alert("Login successfull")
      console.log(res.data.data);
      navigate("/adminhomepage")
      localStorage.setItem("Admin",JSON.stringify(res.data.data))
    })
    .catch((err)=>{
      alert("invalid email or password")
    })
  }
  return (
    <div className='AdminLogin'>
        <form onSubmit={verify} action="">
            <label htmlFor="">
                AdminName
            </label>
            <input type="text" value={email} onChange={(e)=>{setusername(e.target.value)}}placeholder='Enter the AdminName' required />
            <label htmlFor="">
                Password
            </label>
            <input type="text" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter the Password' required />
            <button className='btn btn-secondary '>Login</button>
        </form>
        <p><Link to="/forgotpassword">Forgot password?</Link></p>
        <p>Are you a new user ? <Link to="/adminsignup">Signup now</Link></p>
    </div>
  )
}
export default AdminLoginPage;