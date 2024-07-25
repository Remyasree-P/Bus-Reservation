import { useState } from "react";
import axios from "axios";
import "../Styles/AddBus.css"
const AddBus=()=>{
    let[name,setname]=useState("");
    let[date_of_departure,setdateofdeparture]=useState("");
    let[bus_number,setbusnumber]=useState("")
    let[from_location,setfromlocation]=useState("")
    let[to_location,settolocation]=useState("")
    let[number_of_seats,setnumberofseats]=useState("")
    let[availableSeats,setavailableSeats]=useState("")
    let[costPerSeat,setcostPerSeat]=useState("")
    // let[admin_id,setadmin_id]=useState("")

    let busdata={name,date_of_departure,bus_number,from_location,to_location,number_of_seats,availableSeats,costPerSeat}
    let admin=  JSON.parse(localStorage.getItem("Admin"))
    console.log(admin);
    
    function addbus(e){
        e.preventDefault();
        axios.post(`http://localhost:8080/api/Buses/${admin.id}`,busdata)
        .then((res)=>{
            alert("Bus has been Added Successfully!!!")
            console.log(res.data.data);
        })
        .catch((err)=>{
            console.log(err);
            alert("Couldn't add bus,Invalid Admin ID!!!")
        })
        
    }
    return(
        <div className="addbus">
        <form onSubmit={addbus}>
            {/* <label>Admin_id</label>
            <input value={admin_id} onChange={(e)=>{setadmin_id(e.target.value)}} type="number" /> */}
            <label >Name</label>
            <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" required/>
            <label >Bus number</label>
            <input value={bus_number} onChange={(e)=>{setbusnumber(e.target.value)}} type="text" required/>
            <label >Departure Date</label>
            <input value={date_of_departure} onChange={(e)=>{setdateofdeparture(e.target.value)}} type="date" required/>
            <label >From Location</label>
            <input value={from_location} onChange={(e)=>{setfromlocation(e.target.value)}} type="text" required/>
            <label >To Location</label>
            <input value={to_location} onChange={(e)=>{settolocation(e.target.value)}} type="text" required/>
            <label >Number of Seats</label>
            <input value={number_of_seats} onChange={(e)=>{setnumberofseats(e.target.value)}} type="number" required/>
            <label>Available Seats</label>
            <input value={availableSeats} onChange={(e)=>{setavailableSeats(e.target.value)}} type="number" required/>
            <label>Cost Per Seats</label>
            <input value={costPerSeat} onChange={(e)=>{setcostPerSeat(e.target.value)}} type="number" required/>
            <button className="btn btn-danger">Add</button>
        </form>
        </div>

    )
}
export default AddBus;