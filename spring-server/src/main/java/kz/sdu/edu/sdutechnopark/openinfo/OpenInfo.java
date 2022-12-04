package kz.sdu.edu.sdutechnopark.openinfo;

import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 * Open information like map to present on website.
 */
@Entity
@Table(name = "open_info")
@Getter
@Setter
public class OpenInfo {
  @Id
  @Column(name = "key")
  private String key;
  @Column(name = "value")
  private String value;
  @Column(name = "json_value")
  private String jsonValue;

  @SuppressWarnings("checkstyle:NeedBraces")
  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof OpenInfo openInfo)) return false;
    return Objects.equals(getKey(), openInfo.getKey());
  }

  @Override
  public int hashCode() {
    return Objects.hash(getKey());
  }
}
