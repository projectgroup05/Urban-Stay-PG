package in.urbanstay.PG.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.urbanstay.PG.entities.Room;
import in.urbanstay.PG.services.RoomService;

@RestController
@RequestMapping("/room")
@CrossOrigin("http://localhost:3000")
public class RoomController {

	@Autowired
	private RoomService roomService;
	
	@PostMapping("/save")
	private Room saveCustomer(@RequestBody Room roomObj) {
		return roomService.saveRoom(roomObj);
	}
	
	@PostMapping("/add")
	private Room addWithBuilding(@RequestBody Room roomObj,@RequestHeader("building_Id") Long building_Id) {
		System.out.println(building_Id);
		return roomService.saveWithBuilding(roomObj, building_Id);
	}
}
