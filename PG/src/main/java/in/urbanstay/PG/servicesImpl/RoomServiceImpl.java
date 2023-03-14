package in.urbanstay.PG.servicesImpl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.urbanstay.PG.entities.Building;
import in.urbanstay.PG.entities.Room;
import in.urbanstay.PG.repository.BuildingRepository;
import in.urbanstay.PG.repository.RoomRepository;
import in.urbanstay.PG.services.RoomService;

@Service
public class RoomServiceImpl implements RoomService {

	@Autowired
	private RoomRepository roomRepository;
	
	@Autowired
	private BuildingRepository buildingRepository;

	@Override
	public Room saveRoom(Room roomObj) {
		
		return roomRepository.save(roomObj);
	}

	@Override
	public Room saveWithBuilding(Room roomobj, Long building_Id) {
		Building building = buildingRepository.findById(building_Id).get();
		
		roomobj.setBuilding(building);
		Room room = roomRepository.save(roomobj);
		
		Set<Room> set =building.getRooms();
		set.add(room);
		building.setRooms(set);
		
		buildingRepository.save(building);
		
		return null;
	}
}
