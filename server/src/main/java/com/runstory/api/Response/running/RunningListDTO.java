package com.runstory.api.Response.running;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor // 생성자 생성
@NoArgsConstructor
@Builder
public class RunningListDTO {
    private long id;
    private String imgPathFile;
    private String imgFileName;
    private String crewName;
}
