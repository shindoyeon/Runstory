package com.runstory.api.request;

import java.time.LocalDateTime;
import lombok.Builder;

@Builder
public class ReCommentResDto {
    private Long id;
    private String userId;
    private String reComment;
    private LocalDateTime regDate;

}
