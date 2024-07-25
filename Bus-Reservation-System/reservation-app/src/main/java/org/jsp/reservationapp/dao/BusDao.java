package org.jsp.reservationapp.dao;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.jsp.reservationapp.model.Admin;
import org.jsp.reservationapp.model.Bus;
import org.jsp.reservationapp.repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BusDao {
	@Autowired
	private BusRepository busRepository;
	
	public Bus saveBus(Bus  bus) {
		return busRepository.save(bus);
	}
	public Optional<Bus> findById(int id) {
		return busRepository.findById(id);
	}
	public List<Bus> findAll(){
		return busRepository.findAll();
	}
	public List<Bus> findBuses(String from_location,String to_location,LocalDate date_of_departure){
		return busRepository.findBuses(from_location, to_location, date_of_departure);
	}
	public List<Bus> findBusesByAdminId(int id){
		return busRepository.findBusesByAdminId(id);
	}
	public void delete(int id){
		busRepository.deleteById(id);
	}
	
}
