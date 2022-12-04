package kz.sdu.edu.sdutechnopark.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import kz.sdu.edu.sdutechnopark.adminpanel.links.MainLinkServiceImpl;
import kz.sdu.edu.sdutechnopark.exceptions.serverlogicexception.ServerLogicException;
import kz.sdu.edu.sdutechnopark.openinfo.OpenInfo;
import kz.sdu.edu.sdutechnopark.openinfo.OpenInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Rest controller need to get response with open information.
 * Using database open data.
 */
@RestController
@RequestMapping("api/open/")
@RequiredArgsConstructor
public class OpenApiRestController {
  private final OpenInfoRepository openInfoRepository;
  private final MainLinkServiceImpl linkService;

  /**
   * Get information from datasource to footer.
   *
   * @return information to footer.
   */
  @GetMapping("/footer")
  public Map<String, Object> getFooterInformation() {
    List<OpenInfo> openInfos = openInfoRepository.findAll();
    Map<String, String> includeInfo = new HashMap<>(5);
    openInfos.forEach((openInfo -> includeInfo.put(openInfo.getKey(), openInfo.getValue())));
    Map<String, Object> information = new HashMap<>(10);
    information.put("general", includeInfo);
    information.put("links", linkService.getLinks());

    return information;
  }

  /**
   * Contact information.
   *
   * @return Contact information json in text.
   */
  @GetMapping(value = "/contacts")
  public String getContactInfo() {
    Optional<OpenInfo> contacts = openInfoRepository.findById("contacts");
    if (contacts.isPresent()) {
      return contacts.get().getJsonValue();
    }
    throw new ServerLogicException("Can not find in database key contacts", HttpStatus.NOT_FOUND);
  }
}
