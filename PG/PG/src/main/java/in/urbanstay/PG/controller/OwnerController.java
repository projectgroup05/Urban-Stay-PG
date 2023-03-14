package in.urbanstay.PG.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import in.urbanstay.PG.dto.AuthRequest;
import in.urbanstay.PG.dto.AuthResp;
import in.urbanstay.PG.entities.Owner;
import in.urbanstay.PG.jwt_utils.JwtUtils;
import in.urbanstay.PG.security.service.OwnerUserDetails;
import in.urbanstay.PG.services.OwnerService;

@RestController
@RequestMapping("/owner")
@CrossOrigin("http://localhost:3000")
public class OwnerController {

	@Autowired
	private OwnerService ownerService;
	
	@Autowired
	private AuthenticationManager manager;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private JwtUtils utils;
	
	@PostMapping("/login")
	public String validateUserCreateToken(@RequestBody  AuthRequest request) {
			Authentication authentication = manager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(),
					request.getPassword()));
		
			OwnerUserDetails userDetails=(OwnerUserDetails)authentication.getPrincipal();
			Owner user = userDetails.getOwner();
			AuthResp resp = mapper.map(user,AuthResp.class);
			String tokens = utils.generateJwtToken(authentication);
			return tokens;
			}

	@RequestMapping("/ownerdata")
	private List<Owner> getAllOwner() {
		return ownerService.getAllOwner();
	}

	@GetMapping("/{name}")
	private List<Owner> getOwnerDetails(@PathVariable String name) {
		return ownerService.OwnerDetails(name);
	}

	@PostMapping("/signup")
	private Owner saveOwner(@RequestBody Owner ownerObj) {
		return ownerService.saveOwner(ownerObj);
	}
	
	@PutMapping("/{ownerId}/building/{buildingId}")
	private Owner assignBuildingToOwner(@PathVariable Long ownerId,@PathVariable Long buildingId) {
		return ownerService.assignBuilding(ownerId,buildingId);
	}
}
