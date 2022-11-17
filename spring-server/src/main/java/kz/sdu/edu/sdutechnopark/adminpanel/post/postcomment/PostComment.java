package kz.sdu.edu.sdutechnopark.adminpanel.post.postcomment;

import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import kz.sdu.edu.sdutechnopark.user.User;
import lombok.Getter;
import lombok.Setter;

/**
 * Post Comment entity. Saving on database.
 */
@Entity
@Table(name = "post_comments")
@Getter
@Setter
public class PostComment {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false, unique = true)
  private Long id;

  @OneToOne
  @JoinColumn(name = "user_id", referencedColumnName = "id")
  private User user;

  @Column(name = "comment_text", updatable = false, length = 1000)
  private String commentText;

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (!(o instanceof PostComment that)) {
      return false;
    }
    return getId().equals(that.getId());
  }

  @Override
  public int hashCode() {
    return Objects.hash(getId());
  }
}
