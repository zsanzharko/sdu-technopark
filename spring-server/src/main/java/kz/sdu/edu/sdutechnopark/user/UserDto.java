package kz.sdu.edu.sdutechnopark.user;

import lombok.Builder;
import lombok.Data;

import java.util.Objects;

@Data
@Builder
public class UserDto {
    private Integer id;
    private String photoLink;
    private String email;
    private UserRole rule;
    private UserProvider provider;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserDto userDto)) return false;
        return getEmail().equals(userDto.getEmail());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getEmail());
    }
}
