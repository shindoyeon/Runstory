package com.runstory.repository;

import com.runstory.domain.feed.entity.Feed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FeedRepository extends JpaRepository<Feed, Long> {
    List<Feed> findAll();

    @Query("select f from Feed f where f.user.userSeq= :userId")
    List<Feed> findByUserId(Long userId);

}
