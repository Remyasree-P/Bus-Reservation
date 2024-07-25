
import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/LandingPage.css"
const LandingPage = () => {
  return (
    <div className="landingpage">
        <Link to="/adminlogin">
        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="" />
        <h2>Admin</h2>
        </Link>
        <Link to="/userlogin">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOel_Kg6LSBouZjynF0WO9JxBmTQR1KOpRg&usqp=CAU" alt="" />
        <h2>User</h2>
        </Link>
    </div>
  )
}

export default LandingPage;