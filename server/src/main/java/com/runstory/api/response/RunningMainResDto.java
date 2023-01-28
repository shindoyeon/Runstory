package com.runstory.api.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class RunningMainResDto {
    private long id;
    private String imgPathFile;
    private String imgFileName;
    private String type;
}
