package kz.sdu.edu.sdutechnopark.admin_panel.post;

import kz.sdu.edu.sdutechnopark.admin_panel.post.postComment.PostComment;
import kz.sdu.edu.sdutechnopark.admin_panel.post.postPhoto.Photo;
import kz.sdu.edu.sdutechnopark.user.User;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;

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

    @Column(name = "post_photos", nullable = false, updatable = false)
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, targetEntity = Photo.class, orphanRemoval = true)
    @Fetch(FetchMode.SELECT)
    private Set<Photo> postPhotos;

    @Column(name = "link_to_google_form", length = 500)
    private String linkToGoogleForm;

    @Column(name = "date_to_post")
        private Date dateToPost;

    @Column(name = "comment")
    @OneToMany(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL,
            targetEntity = PostComment.class,
            orphanRemoval = true)
    private Set<PostComment> postComments;

    @Column(name = "users_like")
    @OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.MERGE, CascadeType.DETACH}, targetEntity = User.class, orphanRemoval = false)
    @Fetch(FetchMode.SELECT)
    private Set<User> userLike;
}
