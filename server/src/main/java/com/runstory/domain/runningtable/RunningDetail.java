package com.runstory.domain.runningtable;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.Comment;

@Entity
@Data
public class RunningDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Comment("인원유형(0:남자만, 1:여자만, 2:상관없음)")
    private int GenderType;
    
    @Comment("남자 인원")
    private int man;
    
    @Comment("여자 인원")
    private int women;
    
    @Comment("총 인원")
    private int total;
    
    @Comment("최소 나이")
    private int MinAge;
    
    @Comment("최대 나이")
    private int MaxAge;
    
    @Comment("강아지 여부")
    private boolean HasDog;
}
