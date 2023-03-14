package in.urbanstay.PG.servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.urbanstay.PG.entities.Building;
import in.urbanstay.PG.entities.Manager;
import in.urbanstay.PG.repository.BuildingRepository;
import in.urbanstay.PG.repository.ManagerRepository;
import in.urbanstay.PG.services.ManagerService;

@Service
public class ManagerServiceImpl implements ManagerService {

	@Autowired
	private ManagerRepository managerRepository;
	
	@Autowired
	private BuildingRepository buildingRepository;

	@Override
	public Manager saveManager(Manager managerobj) {
		
		return managerRepository.save(managerobj);
	}

	@Override
	public Manager saveWithBuilding(Manager managerObj, Long building_Id) {
		System.out.println(managerObj.getFirst_name());
		Building building = buildingRepository.findById(building_Id).get();
		Manager manager = managerRepository.save(managerObj);
		System.out.println( manager.getManager_Id());
		building.setManager(manager);
		buildingRepository.save(building);
		return null;
	}
}
