package kz.sdu.edu.sdutechnopark.admin_panel.post.postPhoto;

import org.springframework.web.multipart.MultipartFile;

public interface PhotoService {
    void saveImageFile(Long photoId, MultipartFile file);
}
