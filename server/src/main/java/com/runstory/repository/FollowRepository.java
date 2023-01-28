package com.runstory.repository;

import com.runstory.domain.user.entity.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FollowRepository extends JpaRepository<Follow, Long> {
    @Query("select f from Follow f where (f.from.userSeq = :myUserId and f.to.userSeq = :yourUserId) " +
            "or (f.from.userSeq = :yourUserId and f.to.userSeq = :myUserId)")
    public Follow findFollow(Long myUserId, Long yourUserId);
}
