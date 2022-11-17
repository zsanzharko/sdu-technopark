package kz.sdu.edu.sdutechnopark.adminpanel.post;

import java.sql.Date;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import kz.sdu.edu.sdutechnopark.adminpanel.post.postcomment.PostComment;
import kz.sdu.edu.sdutechnopark.adminpanel.post.postphoto.Photo;
import kz.sdu.edu.sdutechnopark.user.User;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;


/**
 * Post entity for creation on database.
 *
 * @author Sanzhar
 * @version 1.0
 */
@Entity
@Table(name = "posts")
@Getter
@Setter
public class Post {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "id", nullable = false)
  private Long id;

  @Column(name = "title", updatable = false, nullable = false)
  private String title;

  @Column(name = "description", length = 2500, nullable = false)
  private String description;

  @Column(name = "is_posted", nullable = false)
  private Boolean isPosted;

  @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL,
          targetEntity = Photo.class, orphanRemoval = true)
  @JoinColumn(name = "post_photos", updatable = false, nullable = false)
  @Fetch(FetchMode.SELECT)
  private Set<Photo> postPhotos;

  @Column(name = "link_to_google_form", length = 500)
  private String linkToGoogleForm;

  @Column(name = "date_to_post")
  private Date dateToPost;

  @OneToMany(fetch = FetchType.LAZY,
          cascade = CascadeType.ALL,
          targetEntity = PostComment.class,
          orphanRemoval = true)
  @JoinColumn(name = "comment")
  private Set<PostComment> postComments;

  @OneToMany(fetch = FetchType.LAZY,
          cascade = {CascadeType.MERGE, CascadeType.DETACH},
          targetEntity = User.class)
  @JoinColumn(name = "users_like")
  @Fetch(FetchMode.SELECT)
  private Set<User> userLike;
}
