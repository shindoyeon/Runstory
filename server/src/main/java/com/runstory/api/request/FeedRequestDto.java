package com.runstory.api.request;

import com.runstory.domain.feed.PublicScope;
import com.runstory.domain.feed.entity.FeedFile;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import java.time.LocalDateTime;

import lombok.Data;

import java.util.List;

@Data
public class FeedRequestDto {
    private Long userId;
    private String content;
    private List<FeedFile> feedFiles;
    private List<SelectedHashtag> selectedHashTags;
    private PublicScope publicScope;
    private LocalDateTime regdate;
    private LocalDateTime updatedate;

}