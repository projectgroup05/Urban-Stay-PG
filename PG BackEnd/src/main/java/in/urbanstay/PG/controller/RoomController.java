package in.urbanstay.PG.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.urbanstay.PG.entities.Room;
import in.urbanstay.PG.services.RoomService;

@RestController
@RequestMapping("/room")
public class RoomController {

	@Autowired
	private RoomService roomService;
	
	@PostMapping("/save")
	private Room saveCustomer(@RequestBody Room roomObj) {
		return roomService.saveRoom(roomObj);
	}
}
