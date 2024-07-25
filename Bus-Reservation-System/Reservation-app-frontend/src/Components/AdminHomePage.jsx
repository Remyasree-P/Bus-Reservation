import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminDashBoard from "./AdminDashBoard";
import AddBus from "./AddBus";
import ViewBus from "./ViewBus";
import EditBus from "./EditBus";

const AdminHomePage=()=>{
    return(
        <div>
           <AdminNavbar/>
           <Routes>
            {/* <Route path="/" element={<AdminDashBoard/>}/> */}
            <Route path="/addbus" element={<AddBus/>}/>
            <Route path="/buslist" element={<ViewBus/>}/>
            <Route path="/editbus/:id" element={<EditBus/>}/>
           </Routes>
        </div>
    )
}
export default AdminHomePage;