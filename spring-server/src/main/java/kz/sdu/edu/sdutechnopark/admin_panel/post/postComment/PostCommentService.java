package kz.sdu.edu.sdutechnopark.admin_panel.post.postComment;

import java.util.List;

public interface PostCommentService {
    PostComment create(PostComment comment);

    List<PostComment> read();

    List<PostComment> readByPost(Long postId);

    void removeComment(Long id);
}
