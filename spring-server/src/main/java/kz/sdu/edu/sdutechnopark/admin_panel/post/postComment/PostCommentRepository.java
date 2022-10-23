package kz.sdu.edu.sdutechnopark.admin_panel.post.postComment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostCommentRepository extends JpaRepository<PostComment, Long> {
}
