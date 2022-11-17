package kz.sdu.edu.sdutechnopark.adminpanel.post;

import java.util.List;

/**
 * Post Service interface for implement.
 *
 * @author Sanzhar
 * @version 1.0
 */
public interface PostService {
  Post create(Post post);

  void update(Post post);

  List<Post> read();

  Post readPost(Long postId);

  void remove(Long postId);
}
