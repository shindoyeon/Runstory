package com.runstory.domain.hashtagtable;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.Comment;


@Entity
@Data
public class SelectedHashtag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Comment("선택된 해시태그 아이디")
    private long SelectedHashtagId;
    @Comment("해시태그 아이디")
    private long HashtagId;
    @Comment("유저아이디")
    private long UserId;
    @Comment("러닝아이디")
    private long RunningId;
    @Comment("해시태그 종류")
    private Enum HashtagType;



}
