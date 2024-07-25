package org.jsp.reservationapp.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.jsp.reservationapp.dao.AdminDao;
import org.jsp.reservationapp.dao.BusDao;
import org.jsp.reservationapp.dto.BusRequest;
import org.jsp.reservationapp.dto.BusResponse;
import org.jsp.reservationapp.dto.ResponseStructure;
import org.jsp.reservationapp.exception.BusNotFoundException;
import org.jsp.reservationapp.model.Admin;
import org.jsp.reservationapp.model.Bus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class BusService {
	@Autowired
	private BusDao busDao;
	@Autowired
	private AdminDao adminDao;
	public ResponseEntity<ResponseStructure<BusResponse>> saveBus(BusRequest busRequest,int admin_id){
		Optional<Admin> recAdmin = adminDao.findById(admin_id);
		if (recAdmin.isPresent()) {

			Admin admin = recAdmin.get();
	        Bus bus = mapToBus(busRequest); // Map BusRequest to Bus
	        bus.setAdmins(admin); // Set the admin to the bus
	        admin.getBuses().add(bus); // Add the bus to the admin's collection

	        Bus savedBus = busDao.saveBus(bus); // Save the bus object*

	        adminDao.saveAdmin(admin); // Save the admin to update the relationship

	        ResponseStructure<BusResponse> structure = new ResponseStructure<>();
	        structure.setMessage("Bus Saved");
	        structure.setData(mapToBusResponse(savedBus)); // Convert saved bus to BusResponse
	        structure.setStatusCode(HttpStatus.CREATED.value());
	        return ResponseEntity.status(HttpStatus.CREATED).body(structure);
	    }
	    throw new BusNotFoundException("Can't Save, Admin Id is not found!!!");
	}
	
	public ResponseEntity<ResponseStructure<Bus>>updateBus(BusRequest busRequest,int id){
		ResponseStructure<Bus>structure=new ResponseStructure<>();
		Optional<Bus>recBus=busDao.findById(id);
		if(recBus.isEmpty())
			throw new BusNotFoundException("Cannot update bus,as id is invalid");
		Bus dbBus=recBus.get();
		dbBus.setBus_number(busRequest.getBus_number());
		dbBus.setDate_of_departure(busRequest.getDate_of_departure());
		dbBus.setFrom_location(busRequest.getFrom_location());
		dbBus.setTo_location(busRequest.getTo_location());
		dbBus.setName(busRequest.getName());
	    dbBus=busDao.saveBus(dbBus);
	    structure.setData(dbBus);
	    structure.setMessage("Bus Updated");
	    structure.setStatusCode(HttpStatus.ACCEPTED.value());
	    return ResponseEntity.status(HttpStatus.ACCEPTED).body(structure);
	}
	

	
	public ResponseEntity<ResponseStructure<List<Bus>>> findBusesByAdminId(int admin_id) {
		ResponseStructure<List<Bus>> structure = new ResponseStructure<>();
		List<Bus> buses = busDao.findBusesByAdminId(admin_id);
		if (buses.isEmpty())
			throw new BusNotFoundException("No Buses for entered Admin Id");
		structure.setData(buses);
		structure.setMessage("List of Buses for entered Amdin id");
		structure.setStatusCode(HttpStatus.OK.value());
		return ResponseEntity.status(HttpStatus.OK).body(structure);
	}
	
	public ResponseEntity<ResponseStructure<Bus>> findById(int id) {
		ResponseStructure<Bus> structure = new ResponseStructure<>();
		Optional<Bus> recBus = busDao.findById(id);
		if (recBus.isEmpty())
			throw new BusNotFoundException("Invalid Bus id");
		structure.setData(recBus.get());
		structure.setMessage("Bus Found");
		structure.setStatusCode(HttpStatus.OK.value());
		return ResponseEntity.status(HttpStatus.OK).body(structure);
	}
	
	public ResponseEntity<ResponseStructure<List<Bus>>> findAll()
	{
		
		ResponseStructure<List<Bus>> structure=new ResponseStructure<>();
		List<Bus> bus=busDao.findAll();
		structure.setData(bus);
		structure.setMessage("list of all buses");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<Bus>>> (structure,HttpStatus.OK);
	}
	
	public ResponseEntity<ResponseStructure<List<Bus>>> findBuses(String from_location, String to_location, LocalDate date_of_departure) {
		ResponseStructure<List<Bus>> structure = new ResponseStructure<>();
		List<Bus> buses = busDao.findBuses(from_location,to_location,date_of_departure);
		if (buses.isEmpty())
			throw new BusNotFoundException("No Buses for entered route on this Date");
		structure.setData(buses);
		structure.setMessage("List of Buses for entered route on this Date");
		structure.setStatusCode(HttpStatus.OK.value());
		return ResponseEntity.status(HttpStatus.OK).body(structure);
	}
	
	public ResponseEntity<ResponseStructure<String>>delete(int id){
		ResponseStructure<String> structure=new ResponseStructure<>();
		Optional<Bus>dbBus=busDao.findById(id);
		if(dbBus.isPresent()) {
			busDao.delete(id);
			structure.setData("Bus Found");
			structure.setMessage("Bus deleted");
			structure.setStatusCode(HttpStatus.OK.value());
			return ResponseEntity.status(HttpStatus.OK).body(structure);
		}
		throw new BusNotFoundException("Cannot delete Bus as Id is Invalid");
	}
	
	private Bus mapToBus(BusRequest busRequest) {
//		return Bus.builder().bus_number(busRequest.getBus_number()).date_of_departure(busRequest.getDate_of_departure())
//				.from_location(busRequest.getFrom_location()).to_location(busRequest.getTo_location())
//				.name(busRequest.getName()).number_of_seats(busRequest.getNumber_of_seats())
//				.availableSeats(busRequest.getAvailableSeats()).costPerSeat(busRequest.getCostPerSeat())
//				.build();
		return Bus.builder().bus_number(busRequest.getBus_number()).date_of_departure(busRequest.getDate_of_departure())
				.from_location(busRequest.getFrom_location()).to_location(busRequest.getTo_location()).name(busRequest.getName()).number_of_seats(busRequest.getNumber_of_seats()).availableSeats(busRequest.getAvailableSeats()).costPerSeat(busRequest.getCostPerSeat()).build();				

	}
	private BusResponse mapToBusResponse(Bus bus) {
		return BusResponse.builder().name(bus.getName()).date_of_departure(bus.getDate_of_departure())
				.bus_number(bus.getBus_number()).from_location(bus.getFrom_location()).to_location(bus.getTo_location())
				.number_of_seats(bus.getNumber_of_seats()).costPerSeat(bus.getCostPerSeat())
				.availableSeats(bus.getAvailableSeats()).admins(bus.getAdmins()).build();
	}
	
	
}


