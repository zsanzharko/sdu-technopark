package kz.sdu.edu.sdutechnopark.user;

import kz.sdu.edu.sdutechnopark.exceptions.serverLogicException.ServerLogicException;
import kz.sdu.edu.sdutechnopark.exceptions.userException.InvalidInputException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * @param email user to find
     * @return finding user from datasource
     */
    @Override
    public UserDto read(String email) {
        UserDto userDto = convertToDto(userRepository.findByEmail(email));
        if (userDto == null)
            throw new ServerLogicException("Con not find user by username", HttpStatus.NOT_FOUND);

        return userDto;
    }

    /**
     * @return All user DTO list from database
     */
    @Override
    public List<UserDto> read() {
        return userRepository.findAll().stream()
                .map(this::convertToDto)
                .toList();
    }

    /**
     * @param user update this user with other parameters
     * @return updating user
     * @apiNote User will update if id with username does not change
     */
    @Transactional
    @Override
    public UserDto update(UserDto user) {
        User databaseUser = userRepository.findByEmail(user.getEmail());

        if (databaseUser == null ||
                !user.getId().equals(databaseUser.getId()) ||
                !user.getEmail().equals(databaseUser.getEmail()))
            throw new ServerLogicException("Can not find user by username", HttpStatus.NOT_FOUND);

        User updatingUser = convertToEntity(user);

        return convertToDto(userRepository.save(updatingUser));
    }

    @Transactional
    @Override
    public void delete(String email) throws InvalidInputException {
        userRepository.removeUserByEmail(email);
    }

    private User convertToEntity(UserDto userDto) {
        User databaseUser = userRepository.findByEmail(userDto.getEmail());
        if (databaseUser == null)
            throw new ServerLogicException("Have problem with finding user from datasource",
                    HttpStatus.NOT_FOUND);

        return User.builder()
                .id(userDto.getId())
                .email(userDto.getEmail())
                .password(databaseUser.getPassword())
                .active(databaseUser.getActive())
                .rule(userDto.getRule())
                .build();
    }

    private UserDto convertToDto(User user) throws ServerLogicException {
        if (user == null) return null;

        return UserDto.builder()
                .id(user.getId())
                .email(user.getEmail())
                .rule(user.getRule())
                .build();
    }
}
