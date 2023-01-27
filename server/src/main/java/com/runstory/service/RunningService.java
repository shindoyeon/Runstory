package com.runstory.service;

import com.runstory.api.request.RunningCrewReqDto;
import com.runstory.api.response.RunninginfoResDto;

public interface RunningService {
    RunninginfoResDto findRunningInfo(Long id);

    long createRunningCrew(RunningCrewReqDto runningCrewReqDto);
}
