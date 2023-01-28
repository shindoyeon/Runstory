package com.runstory.api.request;

import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.hashtag.HashtagType;
import com.runstory.domain.hashtag.entity.Hashtag;
import com.runstory.domain.running.GenderType;
import java.time.LocalDateTime;
import java.util.List;

import com.runstory.domain.running.Running;
import com.runstory.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RunningCrewReqDto {
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
    private float distance;

    // runningDetail에 대한 dto
    private GenderType genderType;
    private int man;
    private int women;
    private int total;
    private int minAge;
    private int maxAge;
    private boolean hasDog;

    // SelectedHashTag에 들어가기 위한 dto
    private List<Integer> hastag;
}
