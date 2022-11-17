package kz.sdu.edu.sdutechnopark.adminpanel;

import kz.sdu.edu.sdutechnopark.adminpanel.links.MainLinkServiceImpl;
import kz.sdu.edu.sdutechnopark.adminpanel.post.postcomment.PostCommentServiceImpl;
import kz.sdu.edu.sdutechnopark.adminpanel.post.postphoto.PhotoServiceImpl;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
 * Main AdminPanelManager can use to work with admins.
 * Have all services on control admin.
 *
 * @author Sanzhar
 * @version 1.0
 */
@Component
@Scope("singleton")
@RequiredArgsConstructor
@Getter
public class AdminPanelManager {
  private final MainLinkServiceImpl mainLinkService;
  private final PostCommentServiceImpl postCommentService;
  private final PhotoServiceImpl photoService;
}
