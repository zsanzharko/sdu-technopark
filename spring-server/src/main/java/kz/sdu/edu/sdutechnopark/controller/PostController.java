package kz.sdu.edu.sdutechnopark.controller;

import java.util.List;
import kz.sdu.edu.sdutechnopark.adminpanel.post.postcomment.PostComment;
import kz.sdu.edu.sdutechnopark.adminpanel.post.postcomment.PostCommentServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Main post controller that will giv endpoint with comment, likes and view to all users.
 * Have control with admin panel.
 *
 * @author Sanzhar
 * @version 1.0
 * @apiNote use main endpoint url with '/api/posts/*'
 */
@RestController
@RequestMapping(name = "Post Controller", value = "/api/posts")
@RequiredArgsConstructor
@Slf4j
public class PostController {
  private final PostCommentServiceImpl postCommentService;

  /**
   * Create comment with information about current post.
   *
   * @param comment post comment (JSON)
   * @return Post comment with post comment id if it will save to database.
   */
  @ResponseBody
  @PostMapping(name = "Create comment", value = "comments/create")
  public PostComment createComment(@RequestBody final PostComment comment) {
    return postCommentService.create(comment);
  }

  /**
   * Read all comments to read and valid comments.
   *
   * @return List post comments.
   * @apiNote Need access privilege admin.
   */
  @GetMapping(name = "Read all comments", value = "comments")
  @PreAuthorize("hasAuthority('ADMIN') || hasRole('ADMIN')")
  @ResponseBody
  public List<PostComment> readAllComments() {
    return postCommentService.read();
  }

  /**
   * Get post.
   *
   * @param postId post id from database
   * @return List Post DTO
   */
  @GetMapping(name = "Read by post", value = "comments/{postId}")
  public List<PostComment> readByPost(@PathVariable(name = "postId") Long postId) {
    return postCommentService.readByPost(postId);
  }

  /**
   * Remove comment by id.
   *
   * @param id id comment
   * @apiNote Removed from database all information about this comment. Need access privilege admin.
   */
  @PostMapping(name = "remove comment", value = "comments/remove/{id}")
  @PreAuthorize("hasAuthority('ADMIN') || hasRole('ADMIN')")
  public void removeComment(@PathVariable(name = "id") final Long id) {
    postCommentService.removeComment(id);
  }
}
