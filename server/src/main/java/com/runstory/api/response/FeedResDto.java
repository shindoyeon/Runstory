package com.runstory.api.response;

import com.runstory.domain.feed.PublicScope;
import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.feed.entity.FeedFile;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class FeedResDto {
    private Long feedId;
    private Long userId;
    private String content;
    private List<FeedFile> img;
    private PublicScope publicScope;
    private LocalDateTime regdate;
    private LocalDateTime updatedate;


    public FeedResDto(FeedDto feedDto){
        this.feedId=feedDto.getFeedId();
        this.userId=feedDto.getUser().getUserSeq();
        this.content=feedDto.getContent();
        this.img=feedDto.getImg();
        this.publicScope=feedDto.getPublicScope();
        this.regdate=feedDto.getRegdate();
        this.updatedate=feedDto.getUpdatedate();
    }
}
