package in.urbanstay.PG.jwt_utils;

import java.security.Key;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import in.urbanstay.PG.security.service.OwnerUserDetails;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtUtils {

	private Key key; 

	@PostConstruct
	public void init() {
		key = Keys.hmacShaKeyFor(Decoders.BASE64.decode(jwtSecret));
	}
	
	
//
	public String generateJwtToken(Authentication authentication) {
	
		OwnerUserDetails userPrincipal = (OwnerUserDetails) authentication.getPrincipal();
		return Jwts.builder() 
				.setSubject((userPrincipal.getUsername()))
				.setIssuedAt(new Date())																		
				.setExpiration(new Date((new Date()).getTime() + 1000*60*60))																	
				.signWith(key, SignatureAlgorithm.HS512)
				.compact();
	}
	

	
	public String getUserNameFromJwtToken(String token) {
		return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().getSubject();
	}

	public List<GrantedAuthority> getAuthoritiesFromJwtToken(String token) {

		Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
		return Arrays.stream(claims.get("role").toString().split(",")).map(s -> new SimpleGrantedAuthority(s))
				.collect(Collectors.toList());
	}

	public boolean validateJwtToken(String authToken) {
		try {
			Jwts.parserBuilder().setSigningKey(key).build().
					parseClaimsJws(authToken);										
			return true;
		} catch (Exception e) {
			log.error("Invalid JWT : " + e.getMessage());
		}
		return false;
	}
	public static final String jwtSecret="6D597133743677397A24432646294A404E635266556A586E5A7234753778214125442A472D4B6150645367566B59703373357638792F423F4528482B4D625165";
}
