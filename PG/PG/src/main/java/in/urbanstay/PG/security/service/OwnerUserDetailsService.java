package in.urbanstay.PG.security.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import in.urbanstay.PG.entities.Owner;
import in.urbanstay.PG.repository.OwnerRepository;

@Primary
@Component
public class OwnerUserDetailsService implements UserDetailsService {

	@Autowired
	private OwnerRepository ownerRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Owner ownerInfo = ownerRepository.findByUsername(username);

		return new OwnerUserDetails(ownerInfo);

	}

}
