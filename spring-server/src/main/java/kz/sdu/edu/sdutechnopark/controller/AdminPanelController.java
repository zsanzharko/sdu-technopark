package kz.sdu.edu.sdutechnopark.controller;

import kz.sdu.edu.sdutechnopark.adminpanel.AdminPanelManager;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Main Admin panel controller.
 */
@RestController
@RequestMapping("/api/admin-panel")
@RequiredArgsConstructor
public class AdminPanelController {
  private final AdminPanelManager adminPanelManager;

  /**
   * Updating link in datasource.
   *
   * @param name Link name
   * @param link updating link
   * @return true if link updated, false if not updated
   */
  @PostMapping("/main-link/update")
  public Boolean updateLink(@RequestParam(name = "name") String name,
                            @RequestParam(name = "link") String link) {
    adminPanelManager.getMainLinkService().update(name, link);
    //todo change this moment
    return true;
  }
}
