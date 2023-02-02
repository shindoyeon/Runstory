package com.runstory.repository;

import com.runstory.domain.feed.entity.FeedComment;
import com.runstory.domain.feed.entity.FeedRecomment;
import com.runstory.domain.user.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReCommentRepository extends JpaRepository<FeedRecomment, Long> {
    List<FeedRecomment> findAllByComment(FeedComment feedcomment);
    List<FeedRecomment> findAllByUser(User user);

}
