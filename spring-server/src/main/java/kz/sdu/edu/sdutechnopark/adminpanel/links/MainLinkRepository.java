package kz.sdu.edu.sdutechnopark.adminpanel.links;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface to connect database table 'main_links'.
 */
@Repository
public interface MainLinkRepository extends JpaRepository<MainLink, Long> {
  MainLink findByTitle(String name);
}