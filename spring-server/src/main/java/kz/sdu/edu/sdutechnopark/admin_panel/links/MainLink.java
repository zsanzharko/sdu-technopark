package kz.sdu.edu.sdutechnopark.admin_panel.links;

import lombok.*;

import javax.persistence.*;


@Entity
@Table(name = "main_links")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class MainLink {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "title")
    private String title;
    @Column(name = "link")
    private String link;
}
