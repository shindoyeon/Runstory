package com.runstory.domain.running;

import com.fasterxml.jackson.annotation.JsonBackReference;
import java.time.LocalDateTime;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.runstory.domain.running.dto.RunningBoardCommentDto;
import com.runstory.domain.user.entity.User;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;

@Entity
@Data
@NoArgsConstructor
public class RunningBoardComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private User user;

    @Column(length = 1000, nullable = false)
    @Comment("댓글 내용")
    private String content;

    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP", nullable = false)
    @Comment("생성일자")
    private LocalDateTime regdate;

    @ManyToOne
    @JoinColumn(name= "running_id")
    private Running running;

    @PrePersist
    public void prePersist(){
        this.regdate = LocalDateTime.now();
    }

    public RunningBoardComment(RunningBoardCommentDto runningBoardCommentDto, User user, Running running){
        this.user = user;
        this.content = runningBoardCommentDto.getContent();
        this.running = running;
    }
}
