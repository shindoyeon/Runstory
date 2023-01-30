package com.runstory.api.response;

import com.runstory.domain.feed.PublicScope;
import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.feed.dto.FeedFileDto;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class SimpleFeedResDto {
    private Long feedId;
    private Long userId;
    private String content;
    private List<FeedFileDto> feedFiles;
    private PublicScope publicScope;
    private LocalDateTime regdate;
    private LocalDateTime updatedate;


    public SimpleFeedResDto(FeedDto feedDto){
        this.feedId=feedDto.getFeedId();
        this.userId=feedDto.getUser().getUserSeq();
        this.content=feedDto.getContent();
        this.feedFiles=feedDto.getFeedFiles();
        this.publicScope=feedDto.getPublicScope();
        this.regdate=feedDto.getRegdate();
        this.updatedate=feedDto.getUpdatedate();
    }
}
