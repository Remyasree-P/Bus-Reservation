import axios from "axios"
import { useEffect, useState } from "react"
import '../Styles/ViewBus.css';
import { useNavigate } from "react-router-dom";

export default function ViewBus() {
    let [bus, setbus] = useState([])
    let navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8080/api/Buses')
            .then((res) => {
                console.log(res);
                setbus(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    function editNavigate(id) {
        navigate(`/adminhomepage/editbus/${id}`)
    }
    function removeBus(id, bus_no) {
        axios.delete(`http://localhost:8080/api/Buses/${id}`)
            .then((res) => {
                alert(`Bus Number ${bus_no} has been removed from list`)
            })
            .catch((err) => {
                alert("cannot remove this item")
            })

    }

    return (
        <div className="ViewBus">
            {bus.map((item) => {
                return (
                    <div className="Bus_details">
                        <div>
                            <h3>Bus Name </h3>
                            <p>{item.name}</p>
                        </div>

                        <div>
                            <h3>From Location</h3>
                            <p>{item.from_location}</p>
                        </div>

                        <div>
                            <h3>To Location</h3>
                            <p>{item.to_location}</p>
                        </div>

                        <div>
                            <h3>Departure Date</h3>
                            <p>{item.date_of_departure}</p>
                        </div>

                        <div>
                            <h3>Bus Number</h3>
                            <p>{item.bus_number}</p>
                        </div>
                        <div>
                        <h3>Number of Seats</h3>
                        <p>{item.number_of_seats}</p>
                        </div>
                        <div>
                            <h3> Seats Available</h3>
                            <p>{item.availableSeats}</p>
                        </div>
                        <div>
                            <h3>Cost Per Seat</h3>
                            <p>{item.costPerSeat}</p>
                        </div>
                        <div>
                            <button className="btn btn-danger" onClick={() => { editNavigate(item.id) }}>Edit</button>
                            <button className="btn btn-danger" onClick={() => { removeBus(item.id, item.bus_number) }}>Delete</button>
                        </div>
                    </div>
                )
            })

            }
        </div>
    )
}