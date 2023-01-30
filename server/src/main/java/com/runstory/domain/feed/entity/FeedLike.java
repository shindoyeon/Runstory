package com.runstory.domain.feed.entity;

import java.time.LocalDateTime;
import javax.persistence.*;

import com.runstory.domain.user.entity.User;
import lombok.Data;
import org.hibernate.annotations.Comment;

import static javax.persistence.FetchType.LAZY;

@Entity
@Data
public class FeedLike {

    @Comment("피드 좋아요 아이디")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedLikeId;
    @Comment("피드 아이디")
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="feed_id")
    private Feed feed;
    @Comment("사용자 아이디")
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="user_id")
    private User user;
    @Column(columnDefinition = "datetime NOT NULL DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime regdate;
}
