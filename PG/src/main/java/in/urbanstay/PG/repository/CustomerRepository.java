package in.urbanstay.PG.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.urbanstay.PG.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{

}
