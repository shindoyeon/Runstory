package com.runstory.domain.feed.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class FeedCommentDto {
    private Long feedCommentId;
    private Long feedId;
    private Long userId;
    private String userNickname;
    private String cotent;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime regdate;
}
