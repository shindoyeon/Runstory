package com.runstory.domain.running.dto;

import com.runstory.domain.running.Running;
import com.runstory.domain.user.dto.UserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import org.hibernate.annotations.Comment;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RunningBoardCommentDto {
    // 현재 로그인된 User에 대한 값 필요.
    private String userId;
    private String content;
    private LocalDateTime regdate;
    private LocalDateTime updatedate;
}
