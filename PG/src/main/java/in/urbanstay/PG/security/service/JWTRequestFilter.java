package in.urbanstay.PG.security.service;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import in.urbanstay.PG.jwt_utils.JwtUtils;
import lombok.extern.slf4j.Slf4j;



@Slf4j
@Component
public class JWTRequestFilter extends OncePerRequestFilter {
	@Autowired
	private JwtUtils utils;
	
	@Autowired
	private UserDetailsService userDetailsService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		String header = request.getHeader("Authorization");
		if (header != null && header.startsWith("Bearer ")) {
			String token = header.substring(7);
			if (utils.validateJwtToken(token)) {
				String userName = utils.getUserNameFromJwtToken(token);
				System.out.println(userName + " doFilterInternal 1");
				if (userName != null && SecurityContextHolder.getContext().getAuthentication() == null) {
					System.out.println(userName + " doFilterInternal 2");
					UserDetails userDetails = userDetailsService.loadUserByUsername(userName);
					System.out.println(userDetails.getPassword() + " doFilterInternal 3");
					UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
							userDetails, null,userDetails.getAuthorities());
					System.out.println(userName + " doFilterInternal 4");
					SecurityContextHolder.getContext().setAuthentication(authentication);
					System.out.println(userName + " doFilterInternal 5");
				} else
					log.info("user name null or authentication already set , username {}", userName);

			}
		} else
			log.error("Request header DOES NOT contain a Bearer Token");
		filterChain.doFilter(request, response);

	}

}
