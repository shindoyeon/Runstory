package com.runstory.api.request;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReCommentReqDto {
    private Long id;
    private String userId;
    private String reComment;
    private LocalDateTime regDate;

}
