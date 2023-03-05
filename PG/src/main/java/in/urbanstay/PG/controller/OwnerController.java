package in.urbanstay.PG.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.urbanstay.PG.entities.Login;
import in.urbanstay.PG.entities.Owner;
import in.urbanstay.PG.services.OwnerService;

@RestController
@RequestMapping("/owner")
@CrossOrigin("http://localhost:3000")
public class OwnerController {

	@Autowired
	private OwnerService ownerService;
	
	@PostMapping("/Login")
	private Owner ownerLogin(@RequestBody Login loginObj) {
		return ownerService.ownerLogin(loginObj);
	}

	@RequestMapping("/ownerdata")
	private List<Owner> getAllOwner() {
		return ownerService.getAllOwner();
	}

	@GetMapping("/{name}")
	private List<Owner> getOwnerDetails(@PathVariable String name) {
		return ownerService.OwnerDetails(name);
	}

	@PostMapping("/create")
	private Owner saveOwner(@RequestBody Owner ownerObj) {
		return ownerService.saveOwner(ownerObj);
	}
	
	@PutMapping("/{ownerId}/building/{buildingId}")
	private Owner assignBuildingToOwner(@PathVariable Long ownerId,@PathVariable Long buildingId) {
		return ownerService.assignBuilding(ownerId,buildingId);
	}
}
