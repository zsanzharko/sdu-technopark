package kz.sdu.edu.sdutechnopark.user;

import kz.sdu.edu.sdutechnopark.exceptions.userException.InvalidInputException;

import java.util.List;

public interface UserService {

    UserDto read(String email);

    List<UserDto> read();

    UserDto update(UserDto user);

    void delete(String email) throws InvalidInputException;
}
