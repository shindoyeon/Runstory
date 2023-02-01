package com.runstory.repository;

import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.feed.entity.FeedLike;
import com.runstory.domain.user.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface FeedLikeRepository extends JpaRepository<FeedLike, Long> {

//    public List<FeedLike> findByFeedIdAndUserId(Long feedId, Long userId);
//
//    public void deleteByFeedIdAndUserId(Long feedId, Long userId);
//
//    public void deleteByFeedId(Long feedId);
}
