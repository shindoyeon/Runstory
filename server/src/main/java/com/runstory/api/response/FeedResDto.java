package com.runstory.api.response;

import com.runstory.domain.feed.PublicScope;
import com.runstory.domain.feed.dto.FeedFileDto;
import com.runstory.domain.feed.entity.FeedComment;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class FeedResDto {
    private Long feedId;
    private Long userId;
    private String userNickname;
    private String content;
    private PublicScope publicScope;
    private LocalDateTime regdate;
    private LocalDateTime updatedate;
    private List<FeedFileDto> feedFiles;
    private int feedLikeCnt;
    private List<FeedComment> feedComments;
    private List<SelectedHashtag> selectedHashtags;
}
