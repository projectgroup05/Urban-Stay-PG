package in.urbanstay.PG.services;

import in.urbanstay.PG.entities.Room;

public interface RoomService {

	Room saveRoom(Room roomObj);
	Room saveWithBuilding(Room roomobj , Long building_Id);
	
}
