package in.urbanstay.PG.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.urbanstay.PG.entities.Building;

public interface BuildingRepository extends JpaRepository<Building, Long> {

}
