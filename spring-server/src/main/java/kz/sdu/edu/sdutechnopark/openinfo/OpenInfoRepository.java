package kz.sdu.edu.sdutechnopark.openinfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Getting information to controller.
 */
@Repository
public interface OpenInfoRepository extends JpaRepository<OpenInfo, String> {
}
