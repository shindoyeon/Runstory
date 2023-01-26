package com.runstory.domain.feed.dto;

import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.feed.entity.FeedFile;
import com.runstory.domain.feed.entity.PublicScope;
import com.runstory.domain.user.entity.User;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Getter
@Setter
@NoArgsConstructor
public class FeedDto {
    private Long feedId;
    private User user;
    private String content;
    private List<FeedFile> img;
    private PublicScope publicScope;
    private LocalDateTime regdate;
    private LocalDateTime updatedate;


    public FeedDto(Feed feed){
        this.feedId=feed.getFeedId();
        this.user=feed.getUser();
        this.content=feed.getContent();
        this.img=feed.getImg();
        this.publicScope=feed.getPublicScope();
        this.regdate=feed.getRegdate();
        this.updatedate=feed.getUpdatedate();
    }
}
