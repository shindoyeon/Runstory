package com.runstory.domain.feed.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDateTime;

public class FeedRecommentDto {

    private Long feedRecommentId;
    private String userNickname;
    private Long userId;
    private String content;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime regdate;

}
