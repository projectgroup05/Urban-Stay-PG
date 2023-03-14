package in.urbanstay.PG.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.urbanstay.PG.entities.Address;
import in.urbanstay.PG.services.AddressService;

@RestController
@RequestMapping("/address")
@CrossOrigin("http://localhost:3000")
public class AddressController {

	@Autowired
	private AddressService addressService;
	
	@PostMapping("/save")
	private Address saveAddress(@RequestBody Address addressObj) {
		
		return addressService.saveAddress(addressObj);
	}
	
	@PostMapping("/add")
	private Address saveWithBuilding(@RequestBody Address addressObj,@RequestHeader("building_Id") Long building_Id ) {
		System.out.println(building_Id);
		return addressService.saveWithBuilding(addressObj, building_Id);
	}
	
	
}
