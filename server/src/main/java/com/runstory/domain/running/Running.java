// Default 넣을 떄 nullable-false X
package com.runstory.domain.running;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Comment;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Getter
@DynamicInsert
@DynamicUpdate
@NoArgsConstructor // 이거 꼭 써야한다.
@AllArgsConstructor
@Builder
public class Running {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 500, nullable = false)
    @Comment("이미지파일")
    private String imgPathFile;

    @Column(length = 500, nullable = false)
    @Comment("이미지이름")
    private String imgFileName;

    @Column(length = 50, nullable = false)
    @Comment("러닝 제목")
    private String crewName;

    @Column(length = 1000, nullable = false)
    @Comment("러닝 내용")
    private String runningContent;

    @Column(length = 100, nullable = false)
    @Comment("러닝시작위치")
    private String startLocation;

    @Column(length = 100, nullable = false)
    @Comment("러닝끝나는위치")
    private String endLocation;

    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP",nullable = false) // datetime(6)에서 datetime으로 변경됨
    @Comment("시작시간")
    private LocalDateTime startTime;

    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP", nullable = false)
    @Comment("끝나는시간")
    private LocalDateTime endTime;

    @Column(nullable = false)
    @Comment("시작 경도")
    private float startLongitude;

    @Column(nullable = false)
    @Comment("시작 위도")
    private float startLatitude;

    @Column(nullable = false)
    @Comment("끝나는 경도")
    private float endLongitude;

    @Column(nullable = false)
    @Comment("끝나는 위도")
    private float endLatitude;

    @Column(columnDefinition = "datetime DEFAULT CURRENT_TIMESTAMP")
    @Comment("생성일자")
    private LocalDateTime regdate;

    @Column(columnDefinition = "boolean default false")
    @Comment("지남 여부")
    private Boolean isFinished;

    @Column(nullable = false)
    @Comment("거리")
    private float distance;

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "running")
    private List<RunningBoardComment> runningboardcomments = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "running")
    private List<RunningUser> runningusers = new ArrayList<>();
}
