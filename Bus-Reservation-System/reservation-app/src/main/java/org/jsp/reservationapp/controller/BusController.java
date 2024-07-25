package org.jsp.reservationapp.controller;

import java.time.LocalDate;
import java.util.List;

import org.jsp.reservationapp.dto.BusRequest;
import org.jsp.reservationapp.dto.BusResponse;
import org.jsp.reservationapp.dto.ResponseStructure;
import org.jsp.reservationapp.model.Bus;
import org.jsp.reservationapp.service.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api/Buses")
public class BusController {
	@Autowired
	private BusService busService;
	
	@PostMapping("/{admin_id}")
	public ResponseEntity<ResponseStructure<BusResponse>> saveBus(@RequestBody  BusRequest busRequest,@PathVariable (name="admin_id") int admin_id){
		return busService.saveBus(busRequest,admin_id);
	}
	@GetMapping
	public ResponseEntity<ResponseStructure<List<Bus>>> findAll()
	{
		return busService.findAll();
	}
	@PutMapping("/{id}")
	public ResponseEntity<ResponseStructure<Bus>> updateBus(@RequestBody BusRequest busRequest, @PathVariable int id) {
		return busService.updateBus(busRequest, id);
	}
	
	@GetMapping("/find/{admin_id}")
	public ResponseEntity<ResponseStructure<List<Bus>>> findBusesByAdminId(@PathVariable int admin_id) {
		return busService.findBusesByAdminId(admin_id);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ResponseStructure<Bus>> findById(@PathVariable int id) {
		return busService.findById(id);
	}
	

	@GetMapping("/find")
	public ResponseEntity<ResponseStructure<List<Bus>>> findBuses(@RequestParam String from_location, @RequestParam String to_location,
			@RequestParam LocalDate date_of_departure) {
		return busService.findBuses(from_location, to_location, date_of_departure);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ResponseStructure<String>> delete(@PathVariable int id){
		return busService.delete(id);
	}

}
