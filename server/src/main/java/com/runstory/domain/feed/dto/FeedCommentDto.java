package com.runstory.domain.feed.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.runstory.domain.feed.entity.FeedComment;
import com.runstory.domain.feed.entity.FeedRecomment;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class FeedCommentDto {
    private Long feedCommentId;
    private Long feedId;
    private Long userId;
    private String userNickname;
    private String profileImgFilePath;
    private String profileImgFileName;
    private String content;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime regdate;

    public FeedCommentDto(FeedComment comment) {
        this.feedCommentId = comment.getFeedCommentId();
        this.feedId = comment.getFeed().getFeedId();
        this.userId = comment.getUser().getUserSeq();
        this.userNickname = comment.getUser().getUserNickname();
        this.profileImgFilePath = comment.getUser().getProfileImgFilePath();
        this.profileImgFileName = comment.getUser().getProfileImgFileName();
        this.content = comment.getCotent();
        this.content = comment.getContent();
        this.regdate = comment.getRegdate();
    }
}
