package com.runstory.api.response;

import com.runstory.domain.running.Running;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class RunningMainResDto {
    private long runningId;
    private String imgPathFile;
    private String imgFileName;
    private String crewName;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private float distance;
    private String startLocation;

    public RunningMainResDto(Running running){
        this.runningId = running.getRunningId();
        this.imgPathFile = running.getImgFilePath();
        this.imgFileName = running.getImgFileName();
        this.crewName = running.getCrewName();
        this.startTime = running.getStartTime();
        this.endTime = running.getEndTime();
        this.distance = running.getDistance();
        this.startLocation = running.getStartLocation();
    }
}