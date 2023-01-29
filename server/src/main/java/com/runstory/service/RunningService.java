package com.runstory.service;

import com.runstory.api.request.RunningCrewReqDto;
import com.runstory.api.response.RunningDetailResDto;
import com.runstory.api.response.RunningMainResDto;
import com.runstory.api.response.RunninginfoResDto;

import java.util.ArrayList;

public interface RunningService {
    // InformationPage
    RunninginfoResDto findRunningInfo(Long id);

    // CreatePage
    long createRunningCrew(RunningCrewReqDto runningCrewReqDto);

    // MainPage
    ArrayList<RunningMainResDto> selectRunningCrew(float longitude, float latitude);

    // DetailPage
    RunningDetailResDto findRunningDetail(Long id);
}
