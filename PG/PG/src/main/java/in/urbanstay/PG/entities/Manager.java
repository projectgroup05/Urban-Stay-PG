package in.urbanstay.PG.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Manager {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long manager_Id;
	private String first_name ;
	private String last_name ;
	private String manager_email ;
	private Long phone_no ;
	
}