package in.urbanstay.PG.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.urbanstay.PG.entities.Address;
import in.urbanstay.PG.services.AddressService;

@RestController
@RequestMapping("/address")
public class AddressController {

	@Autowired
	private AddressService addressService;
	
	@PostMapping("/save")
	private Address saveAddress(@RequestBody Address addressObj) {
		
		return addressService.saveAddress(addressObj);
	}
}
