package com.runstory.api.request;

import com.runstory.domain.feed.PublicScope;
import com.runstory.domain.feed.entity.FeedFile;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Data
public class FeedReqDto {
    private Long userId;
    private String content;
    private List<Long> selectedHashTags;
    private PublicScope publicScope;
    private LocalDateTime regdate;
    private LocalDateTime updatedate;

    @Override
    public String toString() {
        return "FeedReqDto{" +
                "userId=" + userId +
                ", content='" + content + '\'' +
                ", selectedHashTags=" + Arrays.toString(selectedHashTags.toArray()) +
                ", publicScope=" + publicScope +
                '}';
    }
}