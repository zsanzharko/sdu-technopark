package kz.sdu.edu.sdutechnopark.controller;

import kz.sdu.edu.sdutechnopark.admin_panel.post.postComment.PostComment;
import kz.sdu.edu.sdutechnopark.admin_panel.post.postComment.PostCommentServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(name = "Post Controller", value = "/api/posts")
@RequiredArgsConstructor
@Slf4j
public class PostController {
    private final PostCommentServiceImpl postCommentService;

    @ResponseBody
    @PostMapping(name = "Create comment", value = "comments/create")
    public PostComment createComment(@RequestBody final PostComment comment) {
        return postCommentService.create(comment);
    }

    @GetMapping(name = "Read all comments", value = "comments")
    @PreAuthorize("hasAuthority('ADMIN') || hasRole('ADMIN')")
    @ResponseBody
    public List<PostComment> readAllComments() {
        return postCommentService.read();
    }

    @GetMapping(name = "Read by post", value = "comments/{postId}")
    public List<PostComment> readByPost(@PathVariable(name = "postId") Long postId) {
        return postCommentService.readByPost(postId);
    }

    @PostMapping(name = "remove comment", value = "comments/remove/{id}")
    @PreAuthorize("hasAuthority('ADMIN') || hasRole('ADMIN')")
    public void removeComment(@PathVariable(name = "id") final Long id){
        postCommentService.removeComment(id);
    }
}
