import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
function DropDown1() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Account
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item><Link to="/adminhomepage/addbus">Add Bus</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/adminhomepage/buslist">Bus List</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Edit Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown1;