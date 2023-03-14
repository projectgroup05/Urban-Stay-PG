package in.urbanstay.PG.services;

import in.urbanstay.PG.entities.Address;

public interface AddressService {

	Address saveAddress(Address addressObj);
	
	Address saveWithBuilding(Address addressObj,Long building_Id);
	
}
