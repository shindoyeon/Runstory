package com.runstory.domain.feed.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import com.runstory.domain.user.entity.User;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;

import static javax.persistence.FetchType.LAZY;

@Entity
@Data
@NoArgsConstructor
public class FeedComment {

    @Comment("피드 댓글 아이디")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long feedCommnetId;
    @Comment("피드 아이디")
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="feed_id")
    private Feed feed;
    @Comment("사용자 아이디")
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="user_id")
    private User user;
    @Comment("댓글 내용")
    @Column(length = 500)
    private String cotent;
    @Comment("등록일자")
    @Column(columnDefinition = "datetime NOT NULL DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime regdate;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "feedComment")
    private List<FeedRecomment> feedRecomments = new ArrayList<>();
}
