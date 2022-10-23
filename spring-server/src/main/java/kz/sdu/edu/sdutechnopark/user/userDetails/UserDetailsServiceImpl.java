package kz.sdu.edu.sdutechnopark.user.userDetails;

import kz.sdu.edu.sdutechnopark.user.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
