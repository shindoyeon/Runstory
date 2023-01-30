package com.runstory.repository;

import com.runstory.domain.hashtag.entity.Hashtag;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import java.util.List;

import com.runstory.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SelectedHashtagRepository extends JpaRepository<SelectedHashtag, Long> {
    List<SelectedHashtag> findAll();










    List<SelectedHashtag> findAllByUser(User user);
}
