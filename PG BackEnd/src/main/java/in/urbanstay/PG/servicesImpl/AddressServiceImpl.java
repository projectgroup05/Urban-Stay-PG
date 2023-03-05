package in.urbanstay.PG.servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.urbanstay.PG.entities.Address;
import in.urbanstay.PG.repository.AddressRepository;
import in.urbanstay.PG.services.AddressService;

@Service
public class AddressServiceImpl implements AddressService {

	@Autowired 
	private AddressRepository addressRepository;

	@Override
	public Address saveAddress(Address addressObj) {
		
		return addressRepository.save(addressObj);
	}
}
