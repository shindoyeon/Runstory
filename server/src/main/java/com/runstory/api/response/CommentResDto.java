package com.runstory.api.response;


import com.runstory.api.request.ReCommentResDto;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class CommentResDto {
    private Long id;
    private String userId;
    private String content;
    private List<ReCommentResDto> reCommentResDtoList;
    private LocalDateTime regDate;

}
