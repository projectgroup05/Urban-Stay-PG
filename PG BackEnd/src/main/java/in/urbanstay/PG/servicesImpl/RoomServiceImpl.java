package in.urbanstay.PG.servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.urbanstay.PG.entities.Room;
import in.urbanstay.PG.repository.RoomRepository;
import in.urbanstay.PG.services.RoomService;

@Service
public class RoomServiceImpl implements RoomService {

	@Autowired
	private RoomRepository roomRepository;

	@Override
	public Room saveRoom(Room roomObj) {
		
		return roomRepository.save(roomObj);
	}
}
