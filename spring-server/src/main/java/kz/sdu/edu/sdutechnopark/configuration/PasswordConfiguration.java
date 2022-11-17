package kz.sdu.edu.sdutechnopark.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Password configuration need to encode for datasource.
 * Using only BCryptPasswordEncoder
 *
 * @author Sanzhar
 * @version 1.0
 */
@Configuration
public class PasswordConfiguration {
  @Bean
  public PasswordEncoder getPasswordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
