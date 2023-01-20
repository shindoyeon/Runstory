package com.runstory.domain.qna;


import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import lombok.Data;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Data
@DynamicInsert
public class QNA{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    @Comment("질문아이디")
    private long qaId;

    @Column(length=50)
    @Comment("유저아이디")
    private String userId;
    @Column(length = 50, nullable = false)
    @Comment("질문이름")
    private String qaTitle;
    @Column(length = 500, nullable = false)
    @Comment("질문내용")
    private String qaContent;
    @Column(columnDefinition = "boolean default FALSE", nullable = false)
    @Comment("응답유무")
    private Boolean qaReply;
    @Column(length = 50, nullable = false)
    @Comment("응답내용")
    private String qaReplyContent;
    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP", nullable = false)
    @Comment("질문날짜(지금)")
    private LocalDateTime qaRegdate;
    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP", nullable = false)
    @Comment("응답날짜")
    private LocalDateTime ReplyDate;

}
