package kz.sdu.edu.sdutechnopark.admin_panel.post;

import java.util.List;

public interface PostService {
    Post create(Post post);

    void update(Post post);

    List<Post> read();

    Post readPost(Long postId);

    void remove(Long postId);
}
