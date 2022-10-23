package kz.sdu.edu.sdutechnopark.admin_panel;

import kz.sdu.edu.sdutechnopark.admin_panel.links.MainLinkServiceImpl;
import kz.sdu.edu.sdutechnopark.admin_panel.post.postComment.PostCommentServiceImpl;
import kz.sdu.edu.sdutechnopark.admin_panel.post.postPhoto.PhotoServiceImpl;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("singleton")
@RequiredArgsConstructor
@Getter
public class AdminPanelManager {
    private final MainLinkServiceImpl mainLinkService;
    private final PostCommentServiceImpl postCommentService;
    private final PhotoServiceImpl photoService;
}
