package in.urbanstay.PG.services;

import in.urbanstay.PG.entities.Services;

public interface ServicesService {

	Services saveServices(Services servicesObj);
	Services saveWithBuilding(Services servicesObj , Long building_Id);
}
