package com.runstory.domain.running.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RunningBoardCommentDto {
    // Username 과 userId 같이 넘기기
    private String userId;
    private String content;
    private LocalDateTime regdate;
}
