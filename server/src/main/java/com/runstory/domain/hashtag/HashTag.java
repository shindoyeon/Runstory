package com.runstory.domain.hashtag;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Data;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Data
@DynamicInsert
public class HashTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)


    @Column(nullable = false)
    @Comment("해시태그아이디")
    private long HashtagId;
    @Column(length = 50, nullable = false)
    @Comment("해시태그명")
    private String HashtagName;



}
