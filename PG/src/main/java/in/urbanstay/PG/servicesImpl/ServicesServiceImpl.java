package in.urbanstay.PG.servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.urbanstay.PG.entities.Services;
import in.urbanstay.PG.repository.ServicesRepository;
import in.urbanstay.PG.services.ServicesService;

@Service
public class ServicesServiceImpl implements ServicesService {

	@Autowired
	private ServicesRepository servicesRepository;

	@Override
	public Services saveServices(Services servicesObj) {
		return servicesRepository.save(servicesObj);
	}
}
