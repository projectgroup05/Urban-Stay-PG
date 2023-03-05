package in.urbanstay.PG.servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.urbanstay.PG.entities.Building;
import in.urbanstay.PG.repository.BuildingRepository;
import in.urbanstay.PG.services.BuildingService;

@Service
public class BuildingServiceImpl implements BuildingService {

	@Autowired
	private BuildingRepository buildingRepository;

	@Override
	public Building saveBuilding(Building buildingObj) {
		
		return buildingRepository.save(buildingObj);
	}

	
}
