package in.urbanstay.PG.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.urbanstay.PG.entities.Services;
import in.urbanstay.PG.services.ServicesService;

@RestController
@RequestMapping("/services")
@CrossOrigin("http://localhost:3000")
public class ServicesController {

	@Autowired
	private ServicesService servicesService;
	
	@PostMapping("/save")
	private Services saveServices(@RequestBody Services servicesObj) {
		return servicesService.saveServices(servicesObj);
	}
	
	@PostMapping("/add")
	private Services addWithBuilding(@RequestBody Services servicesObj,@RequestHeader("building_Id") Long building_Id) {
		return servicesService.saveWithBuilding(servicesObj,building_Id);
	}
}
