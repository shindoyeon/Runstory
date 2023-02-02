package com.runstory.api.request;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CommentReqDto {
    private Long feedId;
    private String content;
    private LocalDateTime regDate;

}
