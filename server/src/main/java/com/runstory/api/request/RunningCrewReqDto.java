package com.runstory.api.request;

import com.runstory.domain.running.GenderType;
import com.runstory.domain.user.entity.User;
import java.time.LocalDateTime;
import java.util.ArrayList;
import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Comment;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Builder
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
}
