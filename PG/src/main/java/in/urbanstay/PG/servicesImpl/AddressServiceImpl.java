package in.urbanstay.PG.servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.urbanstay.PG.entities.Address;
import in.urbanstay.PG.entities.Building;
import in.urbanstay.PG.repository.AddressRepository;
import in.urbanstay.PG.repository.BuildingRepository;
import in.urbanstay.PG.services.AddressService;

@Service
public class AddressServiceImpl implements AddressService {

	@Autowired 
	private AddressRepository addressRepository;
	
	@Autowired
	private BuildingRepository buildingRepository;

	@Override
	public Address saveAddress(Address addressObj) {
		
		return addressRepository.save(addressObj);
	}

	@Override
	public Address saveWithBuilding(Address addressObj, Long building_Id) {
		Building building = buildingRepository.findById(building_Id).get();
		addressObj.setBuilding(building);
		Address address = addressRepository.save(addressObj);
		System.out.println(building_Id);
		
		System.out.println(building.getBuilding_name());
		building.setAddress(address);
		
		buildingRepository.save(building);
		
		
		return null;
	}
}
