package in.urbanstay.PG.entities;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Room {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long room_no;
	private int rent;
	private int sharing;
	private int availble_bed;
	private boolean status;
	private int deposite;
	private int contract;
	private int notice_period;
	
	@OneToOne(mappedBy="room")
	private Building building;
}