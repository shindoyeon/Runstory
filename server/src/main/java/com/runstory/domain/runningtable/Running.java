package com.runstory.domain.runningtable;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
public class Running {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long runningId;
    private String imgPathFile;
    private String imgFileName;
    private String crewName;
    private String runningContent;
    private String startLocation;
    private String endLocation;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private float startLongitude;
    private float startLatitude;
    private float endLongitude;
    private float endLatitude;
    private LocalDateTime regDate;
    private Boolean isFinished;
    private float distance;

    @PrePersist
    public void regDate(){
        this.regDate = LocalDateTime.now();
    }
}
