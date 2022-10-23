package kz.sdu.edu.sdutechnopark.admin_panel.post.postPhoto;

import javax.persistence.*;

@Entity
@Table(name = "post_photos")
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "image", nullable = false, updatable = false)
    @Lob
    private Byte[] image;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
