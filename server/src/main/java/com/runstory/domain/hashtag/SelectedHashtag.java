package com.runstory.domain.hashtag;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.runstory.domain.feed.Feed;
import com.runstory.domain.running.Running;
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


@Entity
@Data
@DynamicInsert
public class SelectedHashtag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonManagedReference
    @OneToMany
    @JoinColumn(name = "selected_hashtag_id")
    @Comment("선택된 해시태그 아이디")
    private List<HashTag> hashTags = new ArrayList<>();

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "hashtag_id",
        foreignKey = @ForeignKey(name = "fk_selected_hashtag_to_hashtag"))
    @Comment("해시태그 아이디")
    private HashTag hashtag;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id",
        foreignKey = @ForeignKey(name = "fk_selected_hashtag_to_user"))
    @Column(length = 50)
    @Comment("유저아이디")
    private User user;

    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "feed_id",
        foreignKey = @ForeignKey(name = "fk_selected_hashtag_to_feed"))
    @Column(length = 50)
    @Comment("게시글아이디")
    private Feed feed;

    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    @JoinColumn(name = "running_id",
        foreignKey = @ForeignKey(name = "fk_selected_hashtag_to_running"))
    @Comment("러닝아이디")
    private Running running;
    @Column(length=30, nullable = false)
    @Comment("해시태그 종류")
    private String hashtagType;



}
