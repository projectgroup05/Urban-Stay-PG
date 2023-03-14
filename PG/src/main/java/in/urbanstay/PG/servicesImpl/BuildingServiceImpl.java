package in.urbanstay.PG.servicesImpl;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.urbanstay.PG.entities.Building;
import in.urbanstay.PG.entities.Owner;
import in.urbanstay.PG.repository.BuildingRepository;
import in.urbanstay.PG.repository.OwnerRepository;
import in.urbanstay.PG.services.BuildingService;

@Service
public class BuildingServiceImpl implements BuildingService {

	@Autowired
	private BuildingRepository buildingRepository;
	
	@Autowired
	private OwnerRepository ownerRepository;

	@Override
	public Building saveBuilding(Building buildingObj) {
		
		return buildingRepository.save(buildingObj);
	}

	@Override
	public Long saveWithOwner(Building buildingObj, Long ownerId) {
		Set<Building> buildingSet = null;
		Building building = buildingRepository.save(buildingObj);
		Long buildingId =building.getBuilding_Id();
		
		Owner owner = ownerRepository.findById(ownerId).get();
		
		buildingSet = owner.getAssignBuildings();
		buildingSet.add(building);
		owner.setAssignBuildings(buildingSet);
		ownerRepository.save(owner);
		System.out.println(owner.getAssignBuildings());

		return buildingId;
		
		
		
	
	}

	@Override
	public List<Building> getAll() {
		
		return buildingRepository.findAll();
	}

	
}
