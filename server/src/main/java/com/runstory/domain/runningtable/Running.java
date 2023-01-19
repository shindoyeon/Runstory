package com.runstory.domain.runningtable;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import lombok.Builder.Default;
import lombok.Data;
import org.hibernate.annotations.Comment;

@Entity
@Data
public class Running {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Comment("이미지파일")
    private String imgPathFile;

    @Comment("이미지이름")
    private String imgFileName;

    @Comment("러닝 제목")
    private String crewName;

    @Comment("러닝 내용")
    private String runningContent;

    @Comment("러닝시작위치")
    private String startLocation;

    @Comment("러닝끝나는위치")
    private String endLocation;

    @Comment("시작시간")
    private LocalDateTime startTime;

    @Comment("끝나는시간")
    private LocalDateTime endTime;

    @Comment("시작 경도")
    private float startLongitude;

    @Comment("시작 위도")
    private float startLatitude;

    @Comment("끝나는 경도")
    private float endLongitude;

    @Comment("끝나는 위도")
    private float endLatitude;

    @Comment("생성일자")
    private LocalDateTime regDate;

    @Comment("지남 여부")
    private Boolean isFinished;

    @Comment("거리")
    private float distance;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "running")
    private List<RunningBoardComment> runningboardcomments = new ArrayList<>();

    @PrePersist
    public void regDate(){
        this.regDate = LocalDateTime.now();
    }
}
