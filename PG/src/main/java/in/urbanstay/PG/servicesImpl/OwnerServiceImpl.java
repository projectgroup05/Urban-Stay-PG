package in.urbanstay.PG.servicesImpl;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.urbanstay.PG.entities.Building;
import in.urbanstay.PG.entities.Login;
import in.urbanstay.PG.entities.Owner;
import in.urbanstay.PG.repository.BuildingRepository;
import in.urbanstay.PG.repository.OwnerRepository;
import in.urbanstay.PG.services.OwnerService;

@Service
public class OwnerServiceImpl implements OwnerService {

	@Autowired
	private OwnerRepository ownerRepository;

	@Autowired
	private BuildingRepository buildingRepository;

	public Owner saveOwner(Owner ownerObj) {
		ownerRepository.save(ownerObj);
		return ownerObj;
	}

	public List<Owner> getAllOwner() {

		return ownerRepository.findAll();
	}

	@Override
	public List<Owner> OwnerDetails(String name) {
		// TODO Auto-generated method stub
		return ownerRepository.findByfirstNameContaining(name);
	}

	@Override
	public Owner assignBuilding(Long ownerId, Long buildingId) {
		Set<Building> buildingSet = null;
		Owner owner = ownerRepository.findById(ownerId).get();
		Building building = buildingRepository.findById(buildingId).get();
		
		buildingSet = owner.getAssignBuildings();
		buildingSet.add(building);
		owner.setAssignBuildings(buildingSet);
		ownerRepository.save(owner); 

		return owner;
	}

	@Override
	public Owner ownerLogin(Login loginObj) {
		return ownerRepository.findByUsernameAndPassword(loginObj.getUserName(),loginObj.getUserPassword());
	}

}
