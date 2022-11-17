package kz.sdu.edu.sdutechnopark.adminpanel.post.postcomment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface to connect database table 'post_comments'.
 */
@Repository
public interface PostCommentRepository extends JpaRepository<PostComment, Long> {
}
