package in.urbanstay.PG.security.service;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import in.urbanstay.PG.entities.Owner;

@SuppressWarnings("serial")

public class OwnerUserDetails implements UserDetails {

	private Owner owner;

	public OwnerUserDetails(Owner owner) {
		super();
		this.owner = owner;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return List.of(new SimpleGrantedAuthority(owner.getRole().name()));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return owner.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return owner.getUsername();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}

	public Owner getOwner(){
		return this.owner;
	}
}
