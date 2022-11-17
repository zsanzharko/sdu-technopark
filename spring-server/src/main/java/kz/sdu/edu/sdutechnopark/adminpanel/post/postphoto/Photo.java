package kz.sdu.edu.sdutechnopark.adminpanel.post.postphoto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

/**
 * Photo entity for savin database.
 *
 * @author Sanzhar
 * @version 1.0
 */
@Entity
@Table(name = "post_photos")
public class Photo {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "image", nullable = false, updatable = false)
  @Lob
  private Byte[] image;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }
}
