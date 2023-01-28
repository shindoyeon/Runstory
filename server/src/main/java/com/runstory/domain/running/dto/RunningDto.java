package com.runstory.domain.running.dto;

import com.runstory.domain.hashtag.entity.SelectedHashtag;
import com.runstory.domain.running.RunningBoardComment;
import com.runstory.domain.running.RunningUser;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RunningDto {
    private long id;
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
    private LocalDateTime regdate;
    private Boolean isFinished;
    private float distance;
}
