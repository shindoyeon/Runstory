package com.runstory.domain.hashtagtable;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.Comment;

@Entity
@Data
public class HashTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Comment("해시태그아이디")
    private long HashtagId;
    @Comment("해시태그명")
    private String HashtagName;



}
