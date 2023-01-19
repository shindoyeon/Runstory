package com.runstory.domain.hashtagtable;


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
public class SelectedHashtag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(length = 50, nullable = false)
    @Comment("선택된 해시태그 아이디")
    private long SelectedHashtagId;
    @Column(length = 50, nullable = false)
    @Comment("해시태그 아이디")
    private long HashtagId;
    @Column(length = 50, nullable = false)
    @Comment("유저아이디")
    private long UserId;
    @Column(length = 50, nullable = false)
    @Comment("러닝아이디")
    private long RunningId;
    @Column(columnDefinition = "enum default 0", nullable = false)
    @Comment("해시태그 종류")
    private Enum HashtagType;



}
