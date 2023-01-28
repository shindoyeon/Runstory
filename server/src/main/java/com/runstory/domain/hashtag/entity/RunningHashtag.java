package com.runstory.domain.hashtag.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.runstory.domain.running.Running;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.Comment;

/*@Entity
@Data
@DynamicInsert*/
public class RunningHashtag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonManagedReference
    @OneToMany
    @JoinColumn(name = "running_hashtag_id")
    @Comment("러닝 해시태그 아이디")
    private List<Hashtag> hashTags = new ArrayList<>();
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "hashtag_id",
        foreignKey = @ForeignKey(name = "fk_running_hashtag_to_hashtag"))
    @Comment("해시태그 아이디")
    private Hashtag hashtag;
    @Column(length=30, nullable = false)
    @Comment("해시태그 종류")
    private String hashtagType;
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id",
        foreignKey = @ForeignKey(name = "fk_running_hashtag_to_running"))
    @Comment("러닝아이디")
    private Running runningId;

}
