package in.urbanstay.PG.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.urbanstay.PG.entities.Manager;
import in.urbanstay.PG.services.ManagerService;

@RestController
@RequestMapping("/manager")
@CrossOrigin("http://localhost:3000")
public class ManagerController {

	@Autowired
	private ManagerService managerService;
	
	@PostMapping("/save")
	private Manager saveManager(@RequestBody Manager managerObj) {
		return managerService.saveManager(managerObj);
	}
	
	@PostMapping("/add")
	private Manager addWithbuilding(@RequestBody Manager managerObj,@RequestHeader("building_Id") Long building_Id) {
		
		return managerService.saveWithBuilding(managerObj, building_Id);
	}
}
