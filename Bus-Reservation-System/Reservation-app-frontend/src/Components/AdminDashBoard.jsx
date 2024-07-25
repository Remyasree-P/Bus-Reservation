// import React, { useState } from "react"
// import axios from "axios"
// // import "../Styles/AdminDashBoard.css"
// const AdminDashBoard = () => {
//   let [from, setfrom] = useState("")
//   let [to, setto] = useState("")
//   let [date, setdate] = useState("")

//   let [buses, setbuses] = useState([])
//   function searchBus(e) {
//     e.preventDefault();

//     axios.get(`http://localhost:8080/api/Buses?from_location=${from}&to_location=${to}&date_of_departure=${date}`)

//       .then((res) => {
//         console.log(res.data.data);
//         const filteredBuses = res.data.data.filter(bus => {
//           return bus.from_location === from &&
//             bus.to_location === to &&
//             bus.date_of_departure === date;
//         });
//         setbuses(filteredBuses); // Set the state with the filtered buses
//         alert("Bus searched successfully");
//       })
//     .catch ((err) => {
//   console.log(err);
//   alert("no bus")
// })
    
//   }
// return (
//   <div className="AdminDashBoard">
//     <form onSubmit={searchBus} action="">
//       <input type="text" required value={from} onChange={(e) => { setfrom(e.target.value) }} placeholder='Enter the from location' />
//       <input type="text" required value={to} onChange={(e) => { setto(e.target.value) }} placeholder='Enter the to location' />
//       <input type="text" required value={date} onChange={(e) => { setdate(e.target.value) }} placeholder='Enter the date of departure' />
//       <button >Search</button>
//     </form>
//     {/* {buses.map((item)=>{
//         return(
//           <div className="bus_list">
//             <h4>{item.name}</h4>
//             <i>Seats : {item.seats}</i>
//             <p>From : {item.from_location}</p>
//             <p> To : {item.to_location}</p>
//             <span>Bus Number : {item.bus_number}</span>
//             <button className="btn btn-danger">Book Bus</button>
//           </div>
//         )
//       })} */}
//   </div>

// )
// }
// export default AdminDashBoard;

