package com.runstory.domain.hashtag.dto;

import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.hashtag.HashtagType;
import com.runstory.domain.hashtag.entity.Hashtag;
import com.runstory.domain.running.Running;
import com.runstory.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SelectedHashtagDto {
    private Hashtag hashtag;
    private HashtagType hashtagType;
    private Running running;
    private Feed feed;
    private User user;
}
