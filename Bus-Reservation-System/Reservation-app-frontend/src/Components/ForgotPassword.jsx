import axios from "axios";
import { useState } from "react";
import "../Styles/ForgotPassword.css"
const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const resetPassword = (e) => {
        e.preventDefault();
        console.log(`Sending reset password request for email: ${email}`);
        axios.post(`http://localhost:8080/api/admins/forgot-password?email=${email}`)
            .then((res) => {
                alert("A reset password link has been sent to the entered email ID.");
                console.log(res.data);
            })
            .catch((err) => {
                alert("Invalid email id")
            })

    };

    return (
        <div className="forgotpassword">
            <form onSubmit={resetPassword}>
                <label htmlFor="email">Email</label> <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter the email address" required />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
