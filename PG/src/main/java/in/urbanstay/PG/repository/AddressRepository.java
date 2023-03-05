package in.urbanstay.PG.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.urbanstay.PG.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Long>  {

}
