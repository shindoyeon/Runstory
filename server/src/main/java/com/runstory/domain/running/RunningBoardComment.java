package com.runstory.domain.running;

import com.fasterxml.jackson.annotation.JsonBackReference;
import java.time.LocalDateTime;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.hibernate.annotations.Comment;

@Entity
@Data
public class RunningBoardComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 1000, nullable = false)
    @Comment("댓글 내용")
    private String content;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP", nullable = false)
    @Comment("생성일자")
    private LocalDateTime regdate;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    @Comment("변경일자")
    private LocalDateTime updatedate;

    @ManyToOne
    @JoinColumn(name= "running_id")
    private Running running;

    @PrePersist
    public void prePersist(){
        this.regdate = LocalDateTime.now();
        this.updatedate = LocalDateTime.now();
    }
    @PreUpdate
    public void preUpdate(){
        this.updatedate = LocalDateTime.now();
    }
}
