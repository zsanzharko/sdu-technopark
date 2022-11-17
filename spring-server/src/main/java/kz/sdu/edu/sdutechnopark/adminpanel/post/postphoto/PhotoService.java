package kz.sdu.edu.sdutechnopark.adminpanel.post.postphoto;

import org.springframework.web.multipart.MultipartFile;

/**
 *
 */
public interface PhotoService {
  void saveImageFile(Long photoId, MultipartFile file);
}
