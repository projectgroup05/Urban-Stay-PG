package in.urbanstay.PG.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.urbanstay.PG.entities.Building;
import in.urbanstay.PG.services.BuildingService;

@RestController
@RequestMapping("/building")
@CrossOrigin("http://localhost:3000")
public class BuildingController {

	@Autowired
	private BuildingService buildingServices;
	
	

	@PostMapping("/create")
	private Building saveOwner(@RequestBody Building buildingObj) {
		
		return buildingServices.saveBuilding(buildingObj);
	}
	

	@PostMapping("/add")
	private Long  addBuilding(@RequestBody Building buildingObj,@RequestHeader("ownerId") Long ownerId) {
		System.out.println(ownerId);
		System.out.println("buildingObj"+buildingObj.getBuilding_name());
		 return buildingServices.saveWithOwner(buildingObj, ownerId);
	}
	
	@RequestMapping("/list")
	private List<Building> getAllBuilding(){
		return buildingServices.getAll();
	}
	
}
