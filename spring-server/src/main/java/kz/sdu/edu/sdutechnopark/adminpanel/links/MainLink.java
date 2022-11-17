package kz.sdu.edu.sdutechnopark.adminpanel.links;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Basic Main Links for website presentation.
 *
 * @author Sanzhar
 */
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
