package com.runstory.api.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class RunningMainGPSResDto {
    private long id;
    private String imgPathFile;
    private String imgFileName;
}
