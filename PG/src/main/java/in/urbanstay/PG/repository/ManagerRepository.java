package in.urbanstay.PG.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.urbanstay.PG.entities.Manager;

public interface ManagerRepository extends JpaRepository<Manager, Long> {

}
