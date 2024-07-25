package org.jsp.reservationapp.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class AdminRequest {
	
	private long phone;
	@Email(message="invalid format")
	private String email;
	@NotBlank(message="gst number is mandatory")
	private String gst_number;
	@NotBlank(message="name is mandatory")
	private String name;
	@NotBlank(message="travels name is mandatory")
	private String travels_name;
	@NotBlank(message="password is mandatory")
	@Size(min=4, max=15)
	private String password;
}
