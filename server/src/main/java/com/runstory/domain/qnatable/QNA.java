package com.runstory.domain.qnatable;


import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.Comment;

@Entity
@Data
public class QNA{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Comment("질문아이디")
    private long InquiryId;
    @Comment("유저아이디")
    private long UserId;
    @Comment("질문이름")
    private String InquiryName;
    @Comment("질문내용")
    private String InquiryContent;
    @Comment("응답유무")
    private Boolean Answered;
    @Comment("응답내용")
    private String AnsweredContent;
    @Comment("질문날짜")
    private LocalDateTime InquiryDate;
    @Comment("응답날짜")
    private LocalDateTime AnswerDate;

}
