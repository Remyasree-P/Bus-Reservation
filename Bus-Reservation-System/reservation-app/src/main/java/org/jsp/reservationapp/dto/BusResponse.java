package org.jsp.reservationapp.dto;

import java.time.LocalDate;

import org.jsp.reservationapp.model.Admin;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BusResponse {
	private String name;
	private LocalDate date_of_departure;
	private String bus_number;
	private String from_location;
	private String to_location;
	private int number_of_seats;
	private double  costPerSeat;
	private int availableSeats;
	private Admin admins;
}
