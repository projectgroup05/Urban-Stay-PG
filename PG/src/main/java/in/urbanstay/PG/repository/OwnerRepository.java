package in.urbanstay.PG.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import in.urbanstay.PG.entities.Owner;

public interface OwnerRepository extends JpaRepository<Owner, Long> {

	List<Owner> findByfirstNameContaining(String name);
	Owner findByUsernameAndPassword(String username, String password);
}

