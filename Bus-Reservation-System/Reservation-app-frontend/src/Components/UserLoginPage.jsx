import React from 'react'
import "../Styles/UserLoginPage.css"
const UserLoginPage = () => {
  return (
    <div className='UserLogin'>
        <form action="">
            <label htmlFor="">UserName</label>
            <input type="text" placeholder='Enter User Name' required/>
            <label htmlFor="">Password</label>
            <input type="text" placeholder='Enter the Password' required />
            <button className='btn btn-secondary'>Login</button>
        </form>
    </div>
  )
}

export default UserLoginPage;