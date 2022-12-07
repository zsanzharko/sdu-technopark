package kz.sdu.edu.sdutechnopark.adminpanel.links;

import java.util.List;
import kz.sdu.edu.sdutechnopark.exceptions.serverlogicexception.ServerLogicException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

/**
 * Main link Service will check and update major links from website.
 *
 * @author Sanzhar
 * @version 1.0
 */
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

  public List<MainLink> getLinks() {
    return mainLinkRepository.findAll();
  }
}
