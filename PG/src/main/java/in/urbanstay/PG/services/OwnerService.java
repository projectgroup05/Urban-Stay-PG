package in.urbanstay.PG.services;

import java.util.List;
import java.util.Optional;

import in.urbanstay.PG.dto.AuthRequest;
import in.urbanstay.PG.entities.Owner;

public interface OwnerService {

	public Owner saveOwner(Owner ownerObj);
	public List<Owner> getAllOwner();
	public List<Owner> OwnerDetails(String name);
	public Optional<Owner> OwnerDetail(Long ownerId);
	public Owner ownerLogin(AuthRequest authRequest);
}
