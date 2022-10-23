package kz.sdu.edu.sdutechnopark.controller;

import kz.sdu.edu.sdutechnopark.admin_panel.AdminPanelManager;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin-panel")
@RequiredArgsConstructor
public class AdminPanelController {
    private final AdminPanelManager adminPanelManager;

    @PostMapping("/main-link/update")
    public String updateLink(@RequestParam(name = "name") String name,
                             @RequestParam(name = "link") String link) {
        adminPanelManager.getMainLinkService().update(name, link);
        return "index";
    }
}
