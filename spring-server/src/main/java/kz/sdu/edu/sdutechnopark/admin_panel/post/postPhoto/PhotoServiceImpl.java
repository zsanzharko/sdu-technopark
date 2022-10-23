package kz.sdu.edu.sdutechnopark.admin_panel.post.postPhoto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
@Slf4j
public class PhotoServiceImpl implements PhotoService {
    private final PhotoRepository photoRepository;

    @Override
    @Transactional
    public void saveImageFile(Long photoId, MultipartFile file) {
    }
}
