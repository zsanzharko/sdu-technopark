package kz.sdu.edu.sdutechnopark.exceptions.userException;

public class InvalidInputException extends UserException {
    /**
     * Constructs a new runtime exception with {@code null} as its
     * detail message.  The cause is not initialized, and may subsequently be
     * initialized by a call to {@link #initCause}.
     */
    public InvalidInputException() {
        super("Invalid input value");
    }
}
