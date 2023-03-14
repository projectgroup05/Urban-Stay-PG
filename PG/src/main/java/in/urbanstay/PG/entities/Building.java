package in.urbanstay.PG.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Building {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long building_Id;
	private String building_name ;
	private boolean authentication ;
	private String applicable_for;
	
	@OneToMany(mappedBy="building" )
	private Set<Room> rooms;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="address_fk")
	private Address address;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	private Manager manager;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Services services;
	
	@OneToMany(cascade = CascadeType.ALL)
	private Set<Customer> customers;
	
	
	@JsonIgnore	
	@ManyToMany(mappedBy = "assignBuildings")
	private Set<Owner> owners = new HashSet<>();
	
}