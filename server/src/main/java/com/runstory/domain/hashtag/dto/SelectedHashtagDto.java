package com.runstory.domain.hashtag.dto;

import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.hashtag.HashtagType;
import com.runstory.domain.running.dto.RunningDto;
import com.runstory.domain.user.dto.UserDto;
import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SelectedHashtagDto {
    private Long selectedHashtagId;
    private HashtagDto hashtag;
    private HashtagType hashtagType;
    private RunningDto running;
    private FeedDto feedId;
    private UserDto userId;
}