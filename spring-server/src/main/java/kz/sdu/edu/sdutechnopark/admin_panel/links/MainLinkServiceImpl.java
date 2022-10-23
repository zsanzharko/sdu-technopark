package kz.sdu.edu.sdutechnopark.admin_panel.links;

import kz.sdu.edu.sdutechnopark.exceptions.serverLogicException.ServerLogicException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class MainLinkServiceImpl implements MainLinkService {
    private final MainLinkRepository mainLinkRepository;

    public MainLinkServiceImpl(MainLinkRepository mainLinkRepository) {
        this.mainLinkRepository = mainLinkRepository;
    }

    @Override
    @PreAuthorize("hasRole('ADMIN')")
    public void update(String title, String updateLink) {
        MainLink link = mainLinkRepository.findByTitle(title);
        if (link == null) {
            throw new ServerLogicException("Link not found", HttpStatus.NOT_FOUND);
        }
        link.setLink(updateLink);
        mainLinkRepository.save(link);
    }
}
