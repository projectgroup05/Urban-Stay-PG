package in.urbanstay.PG.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.urbanstay.PG.entities.Room;

public interface RoomRepository extends JpaRepository<Room, Long> {

}
