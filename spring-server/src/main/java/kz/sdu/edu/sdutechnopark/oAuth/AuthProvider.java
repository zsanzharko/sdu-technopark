package kz.sdu.edu.sdutechnopark.oAuth;

import kz.sdu.edu.sdutechnopark.user.User;
import kz.sdu.edu.sdutechnopark.user.userDetails.UserDetailsServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.OAuth2AuthorizationContext;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientProvider;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
@Slf4j
public class AuthProvider implements AuthenticationProvider, OAuth2AuthorizedClientProvider {
    private final UserDetailsServiceImpl userDetailsService;
    private final PasswordEncoder passwordEncoder;

    public AuthProvider(UserDetailsServiceImpl userDetailsService, PasswordEncoder passwordEncoder) {
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        final String username = authentication.getName();
        final String password = (String) authentication.getCredentials();

        User user = (User) userDetailsService.loadUserByEmail(username);

        if (user != null && user.getUsername().equals(username)) {
            if (!passwordEncoder.matches(password, user.getPassword()))
                throw new BadCredentialsException("Wrong password");
        } else throw new BadCredentialsException("Username is not found");

        Collection<? extends GrantedAuthority> authorities = user.getAuthorities();

        return new UsernamePasswordAuthenticationToken(user, password, authorities);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return true;
    }

    @Override
    public OAuth2AuthorizedClient authorize(OAuth2AuthorizationContext context) {
        log.info("This point ");
        return context.getAuthorizedClient();
    }
}
