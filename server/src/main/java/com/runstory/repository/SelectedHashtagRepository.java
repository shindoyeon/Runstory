package com.runstory.repository;

import com.runstory.domain.hashtag.entity.SelectedHashtag;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SelectedHashtagRepository extends JpaRepository<SelectedHashtag, Long> {
    List<SelectedHashtag> findAll();
    @Modifying
    @Query("delete from SelectedHashtag i where i.user.userSeq = :userSeq")
    void deleteSelectedHashtagByUserId(Long userSeq);

    @Modifying
    @Query("delete from SelectedHashtag s where s.feed.feedId = :feedId")
    void deleteSelectedHashtagByFeedId(@Param("feedId")Long feedId);

    @Query("select s from SelectedHashtag s where s.feed.feedId = :feedId order by s.hashtag.hashtagId asc ")
    List<SelectedHashtag> findByFeedIdOrderByHashtagIdAsc(@Param("feedId")Long feedId);

    SelectedHashtag findBySelectedHashtagId(Long selectedHashstagId);
}
