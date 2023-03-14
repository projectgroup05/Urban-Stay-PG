package in.urbanstay.PG.servicesImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.urbanstay.PG.entities.Manager;
import in.urbanstay.PG.repository.ManagerRepository;
import in.urbanstay.PG.services.ManagerService;

@Service
public class ManagerServiceImpl implements ManagerService {

	@Autowired
	private ManagerRepository managerRepository;

	@Override
	public Manager saveManager(Manager managerobj) {
		
		return managerRepository.save(managerobj);
	}
}
