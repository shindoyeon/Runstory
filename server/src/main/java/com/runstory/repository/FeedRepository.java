package com.runstory.repository;

import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.user.entity.User;
import org.hibernate.sql.Update;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FeedRepository extends JpaRepository<Feed, Long> {
    Feed findByFeedId(Long feedId);
    @Query("select f from Feed f where f.user.userSeq= :userId")
    List<Feed> findByUserId(Long userId);
    Page<Feed> findByFeedIdLessThanAndUserInOrderByFeedIdDesc(Long lastFeedId, List<User> followers, PageRequest pageRequest);
    Page<Feed> findByFeedIdLessThanOrderByFeedIdDesc(Long lastFeedId, PageRequest pageRequest);

}