package kz.sdu.edu.sdutechnopark.exceptions.serverlogicexception;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

/**
 * Server side logic exception, using main idea on server side parent exception.
 */
public class ServerLogicException extends RuntimeException {
  @Getter
  @Setter
  private HttpStatus status;

  /**
   * Constructs a new runtime exception with the specified detail message.
   * The cause is not initialized, and may subsequently be initialized by a
   * call to {@link #initCause}.
   *
   * @param message the detail message. The detail message is saved for
   *                later retrieval by the {@link #getMessage()} method.
   */
  public ServerLogicException(String message, HttpStatus status) {
    super(message);
    this.status = status;
  }
}
