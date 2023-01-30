package com.runstory.repository;

import com.runstory.domain.user.entity.Follow;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface FollowRepository extends JpaRepository<Follow, Long> {
    @Query("select f from Follow f where (f.from.userSeq = :myUserId and f.to.userSeq = :yourUserId) " +
            "or (f.from.userSeq = :yourUserId and f.to.userSeq = :myUserId)")
    public Follow findFollowStatus(Long myUserId, Long yourUserId);

    @Query("select f from Follow f where f.from.userSeq = :userId")
    public List<Follow> findFollowing(Long userId);

    @Query("select f from Follow f where f.to.userSeq = :userId")
    public List<Follow> findFollower(Long userId);
}
