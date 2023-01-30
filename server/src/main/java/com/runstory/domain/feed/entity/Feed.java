package com.runstory.domain.feed.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import com.runstory.domain.feed.PublicScope;
import com.runstory.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import static javax.persistence.FetchType.LAZY;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@Builder
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
    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "feed")
    private List<FeedFile> feedFiles = new ArrayList<>();
    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "feed")
    private List<FeedComment> feedComments = new ArrayList<>();
    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "feed")
    private List<FeedLike> feedLikes = new ArrayList<>();
    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy ="hashtag")
    @Comment("해시태그아이디")
    private List<SelectedHashtag> selectedHashTag = new ArrayList<>();
}
