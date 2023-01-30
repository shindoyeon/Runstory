package com.runstory.domain.hashtag.dto;

import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.hashtag.HashtagType;
import com.runstory.domain.hashtag.entity.Hashtag;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import com.runstory.domain.running.Running;
import com.runstory.domain.running.dto.RunningDto;
import com.runstory.domain.user.dto.UserDto;
import com.runstory.domain.user.entity.User;
import com.runstory.repository.HashtagRepository;
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
    private HashtagDto hashtag;
    private HashtagType hashtagType;
    private Long runningId;
    private Long feedId;
    private Long userId;
}
