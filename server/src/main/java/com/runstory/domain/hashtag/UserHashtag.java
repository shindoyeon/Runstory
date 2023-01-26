package com.runstory.domain.hashtag;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.runstory.domain.user.entity.User;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Data;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;

 /*   @Entity
@Data
@DynamicInsert*/
public class UserHashtag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonManagedReference
    @OneToMany
    @JoinColumn(name = "user_hashtag_id")
    @Comment("유저 해시태그 아이디")
    private List<HashTag> hashTags = new ArrayList<>();
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "hashtag_id",
        foreignKey = @ForeignKey(name = "fk_user_hashtag_to_hashtag"))
    @Comment("해시태그 아이디")
    private HashTag hashtag;
    @Column(length=30, nullable = false)
    @Comment("해시태그 종류")
    private String hashtagType;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id",
        foreignKey = @ForeignKey(name = "fk_user_hashtag_to_user"))
    @Comment("유저아이디")
    private User userId;
}