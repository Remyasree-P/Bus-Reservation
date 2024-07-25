import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useState } from "react";
import "../Styles/EditBus.css"
const EditBus=()=>{
    let[name,setname]=useState("");
    let[date_of_departure,setdateofdeparture]=useState("");
    let[bus_number,setbusnumber]=useState("")
    let[from_location,setfromlocation]=useState("")
    let[to_location,settolocation]=useState("")
    let[number_of_seats,setnumberofseats]=useState("")
    let params=useParams();
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/Buses/${params.id}`)
        .then((res)=>{
            console.log(res.data.data);
            setname(res.data.data.name);
            setbusnumber(res.data.data.bus_number);
            setfromlocation(res.data.data.from_location);
            setnumberofseats(res.data.data.number_of_seats);
            setdateofdeparture(res.data.data.date_of_departure);
            settolocation(res.data.data.to_location);
            setnumberofseats(res.data.data.number_of_seats);
        })
    },[])
    let newbus={name,date_of_departure,bus_number,from_location,to_location,number_of_seats}

    function editbus(e){
        e.preventDefault();
        axios.put(`http://localhost:8080/api/Buses/${params.id}`,newbus)
        .then((res)=>{
            alert("Bus has been edited Successfully!!!")
            console.log(res.data.data);
        })
        .catch((err)=>{
            console.log(err);
            alert("Couldn't add bus,Invalid Admin ID!!!")
        })
        
    }

    return(
        <div className="editbus">
             <form onSubmit={editbus}>
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
            <button className="btn btn-danger">Edit</button>
        </form>
        </div>
    )
}
export default EditBus;