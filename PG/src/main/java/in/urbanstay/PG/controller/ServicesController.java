package in.urbanstay.PG.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.urbanstay.PG.entities.Services;
import in.urbanstay.PG.services.ServicesService;

@RestController
@RequestMapping("/services")
public class ServicesController {

	@Autowired
	private ServicesService servicesService;
	
	@PostMapping("/save")
	private Services saveServices(@RequestBody Services servicesObj) {
		return servicesService.saveServices(servicesObj);
	}
	
}
