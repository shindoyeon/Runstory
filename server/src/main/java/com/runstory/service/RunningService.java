package com.runstory.service;

import com.runstory.api.request.RunningCrewReqDto;
import com.runstory.api.response.RunningMainResDto;
import com.runstory.api.response.RunninginfoResDto;

import java.util.ArrayList;

public interface RunningService {
    RunninginfoResDto findRunningInfo(Long id);

    long createRunningCrew(RunningCrewReqDto runningCrewReqDto);

    // For MainPages
    ArrayList<RunningMainResDto> selectRunningCrewGPS(float longitude, float latitude);
}
