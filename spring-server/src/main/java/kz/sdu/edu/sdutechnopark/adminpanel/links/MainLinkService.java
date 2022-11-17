package kz.sdu.edu.sdutechnopark.adminpanel.links;

/**
 * Main Link Service, need to get updates for admin panel.
 */
public interface MainLinkService {
  /**
   * Update link by her name.
   *
   * @param name       title for link
   * @param updateLink new link for title
   */
  void update(String name, String updateLink);
}
