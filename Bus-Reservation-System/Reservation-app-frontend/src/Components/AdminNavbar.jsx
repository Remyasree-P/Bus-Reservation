import DropDown1 from "./DropDown1";
import "../Styles/AdminNavbar.css"
const AdminNavbar=()=>{
    return(
        <div className="adminnavbar">
            <div className="logo">
                <h1><i>yathra</i><sup><i>.in</i></sup></h1>
            </div>
            <div className="options">
                <DropDown1/>
            </div>
        </div>
    )
}
export default AdminNavbar;