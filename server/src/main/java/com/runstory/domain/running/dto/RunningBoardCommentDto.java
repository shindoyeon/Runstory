package com.runstory.domain.running.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    // Username 과 userId 같이 넘기기
    private String userId;
    private String content;
    private LocalDateTime regdate;
}
