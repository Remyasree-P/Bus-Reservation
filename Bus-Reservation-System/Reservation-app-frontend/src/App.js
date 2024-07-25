import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AdminLoginPage from "./Components/AdminLoginPage"
import UserLoginPage from './Components/UserLoginPage';
import AdminSignup from './Components/AdminSignup';
import AdminHomePage from './Components/AdminHomePage';
import PageNotFound from './Components/PageNotFound';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import Protect from './Components/Protect';

function App(){
    return(
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element={<PageNotFound/>}/>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/adminlogin" element={< AdminLoginPage/>}/>
                    <Route path="/userlogin" element={<UserLoginPage/>}/>
                    <Route path='/adminsignup' element={<AdminSignup/>}/>
                    <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>
                    <Route path='/forgotpassword' element={<ForgotPassword/>}/>
                    <Route path='/forgotpassword/resetpassword'element={<ResetPassword/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App; 