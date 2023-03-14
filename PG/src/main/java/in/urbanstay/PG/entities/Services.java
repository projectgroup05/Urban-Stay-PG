package in.urbanstay.PG.entities;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class Services {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long service_id;
	private boolean ac_room;
	private boolean no_ac_room;
	private boolean wifi;
	private boolean water_purifier;
	private boolean refrigerator;
	private boolean washing_machine;
	private boolean food_facility;
	private boolean sports;
	private boolean gym;
	private boolean parking;
	
	@JsonIgnore	
	@OneToOne(mappedBy="services")
	private Building building;
}