package com.runstory.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.feed.entity.FeedComment;
import com.runstory.domain.user.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<FeedComment, Long> {

    FeedComment findByFeedCommentId(Long feedCommentId);
    List<FeedComment> findAllByFeed(Feed feed);
    List<FeedComment> findAllByUser(User user);


}
