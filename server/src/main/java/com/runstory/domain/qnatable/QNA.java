package com.runstory.domain.qnatable;


import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;

@Entity
@Data
@DynamicInsert
public class QNA{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 50, nullable = false)
    @Comment("질문아이디")
    private long InquiryId;
    @Column(length = 50, nullable = false)
    @Comment("유저아이디")
    private long UserId;
    @Column(length = 50, nullable = false)
    @Comment("질문이름")
    private String InquiryName;
    @Column(length = 500, nullable = false)
    @Comment("질문내용")
    private String InquiryContent;
    @Column(columnDefinition = "boolean default FALSE", nullable = false)
    @Comment("응답유무")
    private Boolean Answered;
    @Column(length = 50, nullable = false)
    @Comment("응답내용")
    private String AnsweredContent;
    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP", nullable = false)
    @Comment("질문날짜")
    private LocalDateTime InquiryDate;
    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP", nullable = false)
    @Comment("응답날짜")
    private LocalDateTime AnswerDate;

}
