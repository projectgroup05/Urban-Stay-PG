package in.urbanstay.PG.services;

import in.urbanstay.PG.entities.Manager;

public interface ManagerService {

	Manager saveManager(Manager managerobj);
	Manager saveWithBuilding(Manager roomobj , Long building_Id);
}
