package in.urbanstay.PG.servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.urbanstay.PG.entities.Building;
import in.urbanstay.PG.entities.Services;
import in.urbanstay.PG.repository.BuildingRepository;
import in.urbanstay.PG.repository.ServicesRepository;
import in.urbanstay.PG.services.ServicesService;

@Service
public class ServicesServiceImpl implements ServicesService {

	@Autowired
	private ServicesRepository servicesRepository;
	
	@Autowired
	private BuildingRepository buildingRepository;

	@Override
	public Services saveServices(Services servicesObj) {
		return servicesRepository.save(servicesObj);
	}

	@Override
	public Services saveWithBuilding(Services servicesObj, Long building_Id) {
		Building building = buildingRepository.findById(building_Id).get();
		servicesObj.setBuilding(building);
		Services services=servicesRepository.save(servicesObj);
		
		building.setServices(services);
		buildingRepository.save(building);
		
		return null;
	}
}
