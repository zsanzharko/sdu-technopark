package kz.sdu.edu.sdutechnopark.configuration;

import kz.sdu.edu.sdutechnopark.oauth.google.OAuthGoogleUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.oauth2.client.web.HttpSessionOAuth2AuthorizationRequestRepository;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Main web Security configuration.
 */
@Configuration
@EnableWebSecurity
@Slf4j
@RequiredArgsConstructor
public class WebSecurityConfig implements WebMvcConfigurer {
  private final OAuthGoogleUserService authGoogleUserService;

  /**
   * Configure http request on input from internet.
   * Use only Google authorization
   *
   * @param http request.
   * @return configured http with authorization
   * @throws Exception have problem with Http or connection to google.
   */
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
            .authorizeRequests(authReq -> authReq
                    .antMatchers("/static/**").permitAll()
                    .antMatchers("/api/oauth/**").anonymous()
                    .antMatchers("/api/admin-panel**", "/api/admin-panel/**").hasAuthority("ADMIN")
                    .anyRequest().authenticated())
            .oauth2Login(auth -> auth
                    .userInfoEndpoint(user -> user
                            .userService(authGoogleUserService)
                    )
                    .successHandler((request, response, authentication) -> {
                      log.info(String.valueOf(authentication.getPrincipal()));
                      DefaultOidcUser oauthUser = (DefaultOidcUser) authentication.getPrincipal();

                      authGoogleUserService.processAuthPostLogin(oauthUser);

                      response.sendRedirect("/");
                    })
            )
            .logout(logout -> logout
                    .logoutUrl("/logout")
                    .logoutSuccessUrl("/")
                    .invalidateHttpSession(true)
                    .permitAll());

    return http.build();
  }

  @Bean
  public HttpSessionOAuth2AuthorizationRequestRepository cookieAuthorizationRequestRepository() {
    return new HttpSessionOAuth2AuthorizationRequestRepository();
  }

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry.addResourceHandler("/static/**")
            .addResourceLocations("classpath:/static/");
  }
}
