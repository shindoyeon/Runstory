package com.runstory.domain;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import lombok.Data;

@Entity
@Data
public class RunningBoardComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long runningCommentId;
    private String content;
    private LocalDateTime regDate;
    private LocalDateTime updateDate;

    @PrePersist
    public void regDate(){
        this.regDate = LocalDateTime.now();
    }
}
