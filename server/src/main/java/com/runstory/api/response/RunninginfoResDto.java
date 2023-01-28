package com.runstory.api.response;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Builder
public class RunninginfoResDto {
    private String crewName;
    private String img;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private float distance;
    private String startLocation;
}
