package com.runstory.domain.feed.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import com.runstory.domain.feed.PublicScope;
import com.runstory.domain.user.entity.User;
import lombok.Data;
import org.hibernate.annotations.Comment;

import static javax.persistence.FetchType.LAZY;

@Entity
@Data
public class Feed {

    @Comment("피드 아이디")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedId;

    @Comment("사용자 아이디")
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="user_id")
    private User user;
    @Comment("피드 게시글 내용")
    @Column(length = 1000)
    private String content;
    @Comment("공개범위(PUBLIC: 전체공개, FRIEND: 팔로우공개, PRIVATE: 비공개)")
    @Enumerated(EnumType.STRING)
    private PublicScope publicScope;
    @Column(columnDefinition = "datetime NOT NULL DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime regdate;
    @Column(columnDefinition = "datetime NOT NULL DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime updatedate;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "feed")
    private List<FeedFile> feedFiles = new ArrayList<>();
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "feed")
    private List<FeedComment> feedComments = new ArrayList<>();
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "feed")
    private List<FeedLike> feedLikes = new ArrayList<>();
}
