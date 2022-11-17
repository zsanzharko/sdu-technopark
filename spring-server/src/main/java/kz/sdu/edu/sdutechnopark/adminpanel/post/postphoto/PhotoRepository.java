package kz.sdu.edu.sdutechnopark.adminpanel.post.postphoto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Interface for photo images, can access with database.
 *
 * @author Sanzhar
 * @version 1.0
 */
@Repository
public interface PhotoRepository extends JpaRepository<Photo, Long> {
}
