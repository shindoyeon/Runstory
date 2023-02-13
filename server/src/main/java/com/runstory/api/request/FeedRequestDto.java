package com.runstory.api.request;

import com.runstory.domain.feed.PublicScope;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.feed.entity.FeedFile;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class FeedRequestDto {
    private Long userId;
    private String content;
    private String img;
    private PublicScope publicScope;
    private LocalDateTime regdate;
    private LocalDateTime updatedate;
}