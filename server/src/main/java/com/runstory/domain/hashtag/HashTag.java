package com.runstory.domain.hashtag;


import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import lombok.Data;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Data
@DynamicInsert
public class HashTag {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    @OneToMany
    @JoinColumn(name = "selectedhashtag")
    @Column(nullable = false)
    @Comment("해시태그아이디")
    private List<SelectedHashtag> selectedHashTags = new ArrayList<>();
    @Column(length = 50, nullable = false)
    @Comment("해시태그명")
    private String hashtagName;



}
