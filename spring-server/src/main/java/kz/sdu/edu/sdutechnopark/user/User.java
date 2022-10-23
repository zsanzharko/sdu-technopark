package kz.sdu.edu.sdutechnopark.user;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.NaturalId;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Slf4j
@Builder
public class User implements UserDetails, OAuth2User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;
    @Column(name = "google_open_id")
    private String googleOpenId;
    @Column(name = "photo")
    private String photoLink;
    @NaturalId
    @Column(name = "email", nullable = false)
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "active", nullable = false)
    private Boolean active;
    @Column(name = "rule", nullable = false)
    @Enumerated(EnumType.STRING)
    private UserRole rule;
    @Column(name="provider", nullable = false)
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private UserProvider provider = UserProvider.GOOGLE;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User user)) return false;
        return getEmail().equals(user.getEmail());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getEmail());
    }

    @Override
    public Map<String, Object> getAttributes() {
        Map<String, Object> attributes = new HashMap<>();
        attributes.put("email", email);
        attributes.put("photo", photoLink);
        attributes.put("role", rule);
        attributes.put("provider", provider);

        return attributes;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singleton(rule);
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return getActive();
    }

    @Override
    public String getName() {
        return this.email;
    }
}
