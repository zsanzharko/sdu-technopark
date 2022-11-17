package kz.sdu.edu.sdutechnopark.adminpanel.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Get control for post from database source.
 *
 * @author Sanzhar
 * @version 1.0
 */
@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
}
