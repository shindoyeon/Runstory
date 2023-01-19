package com.runstory.domain.running;

import javax.persistence.Column;
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

    @Column(columnDefinition = "int default 0", nullable = false)
    @Comment("인원유형(0:남자만, 1:여자만, 2:상관없음)")
    private int genderType;

    @Column(columnDefinition = "int default 0", nullable = false)
    @Comment("남자 인원")
    private int man;

    @Column(columnDefinition = "int default 0", nullable = false)
    @Comment("여자 인원")
    private int women;

    @Column(columnDefinition = "int default 0", nullable = false)
    @Comment("총 인원")
    private int total;

    @Column(columnDefinition = "int default 0", nullable = false)
    @Comment("최소 나이")
    private int minAge;

    @Column(columnDefinition = "int default 10000000", nullable = false)
    @Comment("최대 나이")
    private int maxAge;

    @Column(columnDefinition = "boolean default false", nullable = false)
    @Comment("강아지 여부")
    private boolean hasDog;
}
