package in.urbanstay.PG.dto;

import in.urbanstay.PG.entities.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class AuthResp {
	private Long ownerId;
	private String username;
	private String firstName;
	private String lastName;
	private Role role;
	private String token;
}
