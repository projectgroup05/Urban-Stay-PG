package in.urbanstay.PG.services;

import java.util.List;

import in.urbanstay.PG.entities.Building;


public interface BuildingService {

	Building saveBuilding(Building buildingObj);
	Long saveWithOwner(Building buildingObj, Long ownerId);
	List<Building> getAll();


}
