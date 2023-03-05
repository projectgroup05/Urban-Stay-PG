package in.urbanstay.PG.services;

import java.util.List;

import in.urbanstay.PG.entities.Login;
import in.urbanstay.PG.entities.Owner;

public interface OwnerService {

	public Owner saveOwner(Owner ownerObj);
	public List<Owner> getAllOwner();
	public List<Owner> OwnerDetails(String name);
	public Owner assignBuilding(Long ownerId, Long buildingId);
	public Owner ownerLogin(Login loginObj);
}
