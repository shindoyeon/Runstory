package com.runstory.service;

import com.runstory.api.request.RunningCrewReqDto;
import com.runstory.api.response.RunningMainResDto;
import com.runstory.api.response.RunningDetailSumDto;

import java.util.List;

public interface RunningService {
    // CreatePage
    long createRunningCrew(RunningCrewReqDto runningCrewReqDto);

    // MainPage
//    ArrayList<HashMap<String, ArrayList<RunningMainResDto>>> selectRunningCrew(float longitude, float latitude);

    // DetailPage
    RunningDetailSumDto findRunningDetail(Long id);

    // ChangePage
//    RunningDetailSumDto updateRunningDetail(Long id);
    List<RunningMainResDto> findByLocation(float latitude, float longitude);
    List<RunningMainResDto> findByToday();
}
