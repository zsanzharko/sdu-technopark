package kz.sdu.edu.sdutechnopark.admin_panel.links;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MainLinkRepository extends JpaRepository<MainLink, Long> {
    MainLink findByTitle(String name);
}