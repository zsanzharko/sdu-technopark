package kz.sdu.edu.sdutechnopark.admin_panel.post.postPhoto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, Long> {
}
