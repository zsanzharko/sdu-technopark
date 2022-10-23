package kz.sdu.edu.sdutechnopark.admin_panel.post;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;

    @Override
    @Transactional
    public Post create(Post post) {
        return postRepository.save(post);
    }

    @Override
    @Transactional
    public void update(Post post) {
        if (post.getId() != null &&
                postRepository.findById(post.getId()).isPresent()) {
            postRepository.save(post);
        }
    }

    //TODO: need realize pageable post

    @Override
//    @PreAuthorize("hasRole('ADMIN') || hasAuthority('ADMIN')")
    @ResponseBody
    public List<Post> read() {
        return postRepository.findAll();
    }

    @Override
    public Post readPost(Long postId) {
        Optional<Post> post = postRepository.findById(postId);
        //FIXME: change null to exception, and return status NOT_FOUND
        return post.orElse(null);
    }

    @Override
    @PreAuthorize("hasRole('ADMIN') || hasAuthority('ADMIN')")
    @Transactional
    public void remove(Long postId) {
        postRepository.deleteById(postId);
    }
}
