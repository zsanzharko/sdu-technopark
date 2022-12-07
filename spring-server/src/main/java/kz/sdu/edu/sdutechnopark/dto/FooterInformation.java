package kz.sdu.edu.sdutechnopark.dto;

import java.util.Map;
import lombok.Data;

/**
 * Represent footer information to json.
 */
@Data
public class FooterInformation {
  private Map<String, String> social;
  private String email;
  private String website;
  private String phoneNumber;
}
