package kz.sdu.edu.sdutechnopark.adminpanel.post.postcomment;

import java.util.List;

/**
 * Post Comment Service, need to get control for admin panel and represent to all users.
 */
public interface PostCommentService {
  PostComment create(PostComment comment);

  List<PostComment> read();

  List<PostComment> readByPost(Long postId);

  void removeComment(Long id);
}
