package com.runstory.domain.feed.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.runstory.domain.feed.entity.FeedComment;
import com.runstory.domain.feed.entity.FeedRecomment;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class FeedCommentDto {
    private Long feedCommentId;
    private Long feedId;
    private Long userId;
    private String userNickname;
    private String content;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime regdate;

    public FeedCommentDto(FeedComment comment) {
        this.feedCommentId = comment.getFeedCommentId();
        this.feedId = comment.getFeed().getFeedId();
        this.userId = comment.getUser().getUserSeq();
        this.userNickname = comment.getUser().getUserNickname();
        this.content = comment.getContent();
        this.regdate = comment.getRegdate();
    }


}
