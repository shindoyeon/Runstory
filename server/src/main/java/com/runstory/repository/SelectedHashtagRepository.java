package com.runstory.repository;

import com.runstory.domain.hashtag.entity.Hashtag;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import java.util.List;

import com.runstory.domain.running.Running;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface SelectedHashtagRepository extends JpaRepository<SelectedHashtag, Long> {
    List<SelectedHashtag> findAll();
    @Modifying
    @Transactional
    @Query("delete from SelectedHashtag i where i.user.userSeq = :userSeq")
    void deleteSelectedHashtagByUserId(Long userSeq);

    List<SelectedHashtag> findAllByRunning(Running running);

}
