package kz.sdu.edu.sdutechnopark.adminpanel.post.postcomment;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import kz.sdu.edu.sdutechnopark.adminpanel.post.Post;
import kz.sdu.edu.sdutechnopark.adminpanel.post.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Scope;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service implementation for post comment service. Have function for users and admin
 */
@Service
@RequiredArgsConstructor
@Scope("singleton")
public class PostCommentServiceImpl implements PostCommentService {
  private final PostCommentRepository postCommentRepository;
  private final PostRepository postRepository;

  @Override
  @Transactional
  public PostComment create(PostComment comment) {
    return postCommentRepository.save(comment);
  }

  @Override
  public List<PostComment> read() {
    return postCommentRepository.findAll();
  }

  @Override
  public List<PostComment> readByPost(Long postId) {
    Optional<Post> post = postRepository.findById(postId);
    return post.map(value -> new ArrayList<>(value.getPostComments())).orElse(null);
  }

  @Override
  @PreAuthorize("hasRole('AMDIN') || hasAuthority('AMDIN')")
  @Transactional
  public void removeComment(Long id) {
    postCommentRepository.deleteById(id);
  }
}
