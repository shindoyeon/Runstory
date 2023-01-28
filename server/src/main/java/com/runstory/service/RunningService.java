package com.runstory.service;

import com.runstory.api.request.RunningCrewReqDto;
import com.runstory.api.response.RunningMainGPSResDto;
import com.runstory.api.response.RunninginfoResDto;

import java.util.ArrayList;

public interface RunningService {
    RunninginfoResDto findRunningInfo(Long id);

    long createRunningCrew(RunningCrewReqDto runningCrewReqDto);

    ArrayList<RunningMainGPSResDto> selectRunningCrewGPS(float longitude, float latitude);
}
