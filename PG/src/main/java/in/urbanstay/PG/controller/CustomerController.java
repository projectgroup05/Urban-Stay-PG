package in.urbanstay.PG.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.urbanstay.PG.entities.Customer;
import in.urbanstay.PG.services.CustomerService;

@RestController
@RequestMapping("/customer")
@CrossOrigin("http://localhost:3000")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	

	@PostMapping("/save")
	private Customer saveCustomer(@RequestBody Customer customerObj) {
		return customerService.saveCustomer(customerObj);
	}
}
