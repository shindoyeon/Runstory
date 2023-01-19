package com.runstory.domain.runningtable;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import lombok.Data;
import org.hibernate.annotations.Comment;

@Entity
@Data
public class RunningBoardComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Comment("댓글 내용")
    private String content;

    @Comment("생성일자")
    private LocalDateTime regDate;

    @Comment("변경일자")
    private LocalDateTime updateDate;

    @ManyToOne
    @JoinColumn(name= "running_id")
    private Running running;

    @PrePersist
    public void regDate(){
        this.regDate = LocalDateTime.now();
    }
}
