package kz.sdu.edu.sdutechnopark.user.userDetails;

import org.springframework.security.core.userdetails.UserDetails;

public interface UserDetailsService {

    UserDetails loadUserByEmail(String email);
}
