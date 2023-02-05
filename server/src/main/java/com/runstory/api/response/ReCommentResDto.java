package com.runstory.api.response;

import java.time.LocalDateTime;
import lombok.Builder;

@Builder
public class ReCommentResDto {
    private Long reCommentId;
    private Long userId;
    private String content;
    private LocalDateTime regDate;

}
