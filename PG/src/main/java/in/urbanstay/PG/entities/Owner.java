package in.urbanstay.PG.entities;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.JoinColumn;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Owner {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long ownerId;
	private String firstName;
	private String lastName;
	private String email;
	private Long phone_no;
	private String address;
	private String username;
	private String password;
	private Role role;
	
	@ManyToMany(fetch = FetchType.LAZY , cascade = CascadeType.ALL)
	@JoinTable(name = "Owner_Buildings",
	joinColumns = {@JoinColumn(name = "ownerId")},
	inverseJoinColumns = {@JoinColumn(name="building_Id")}
			)
	private Set<Building> assignBuildings = new HashSet<>();
	
	
	
}
