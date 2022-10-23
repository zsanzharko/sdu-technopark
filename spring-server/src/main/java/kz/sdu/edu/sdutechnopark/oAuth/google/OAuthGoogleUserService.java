package kz.sdu.edu.sdutechnopark.oAuth.google;

import kz.sdu.edu.sdutechnopark.user.User;
import kz.sdu.edu.sdutechnopark.user.UserProvider;
import kz.sdu.edu.sdutechnopark.user.UserRepository;
import kz.sdu.edu.sdutechnopark.user.UserRole;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OAuthGoogleUserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User user = super.loadUser(userRequest);
        return new OAuthGoogleUser(user);
    }

    public void processOAuthPostLogin(DefaultOidcUser oauthUser) {
        User databaseUser = userRepository.findByEmail(oauthUser.getEmail());

        if (databaseUser != null) {
            databaseUser.setGoogleOpenId(oauthUser.getAttribute("sub"));
            databaseUser.setPhotoLink(oauthUser.getAttribute("picture"));
            userRepository.save(databaseUser);
            return;
        }

        User googleUser = new User();
        googleUser.setProvider(UserProvider.GOOGLE);
        googleUser.setEmail(oauthUser.getEmail());
        googleUser.setGoogleOpenId(oauthUser.getAttribute("sub"));
        googleUser.setPhotoLink(oauthUser.getAttribute("picture"));
        googleUser.setRule(UserRole.ADMIN);
        googleUser.setActive(true);

        userRepository.save(googleUser);
    }
}
