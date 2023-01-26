package com.runstory.repository;

import com.runstory.domain.feed.Feed;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FeedRepository extends JpaRepository<Feed, Long> {
    List<Feed> findAllByUserId(Long userId);
}
