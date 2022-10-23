package kz.sdu.edu.sdutechnopark.user;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;

public enum UserRole implements GrantedAuthority {
    ADMIN("Admin");

    @Getter
    private final String name;

    UserRole(String name) {
        this.name = name;
    }

    @Override
    public String getAuthority() {
        return name();
    }
}
