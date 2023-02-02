package com.runstory.service;

import com.runstory.api.request.RunningCrewReqDto;
import com.runstory.api.response.RunningMainResDto;
import com.runstory.api.response.RunningDetailSumDto;
import com.runstory.domain.running.dto.RunningBoardCommentDto;

import java.util.ArrayList;
import java.util.HashMap;

public interface RunningService {
    // CreatePage
    Long createRunningCrew(RunningCrewReqDto runningCrewReqDto, Long userseq);

    // MainPage
//    ArrayList<HashMap<String, ArrayList<RunningMainResDto>>> selectRunningCrew(float longitude, float latitude);

    // DetailPage
    RunningDetailSumDto findRunningDetail(Long id);
    Long deleteRunningCrew(Long id);
    Long updateRunningCrew(RunningCrewReqDto newRunningCrewReqDto);


    // Comment
    Long createRunningComment(RunningBoardCommentDto runningBoardCommentDto, Long userseq, Long runninid);
    Long deleteRunningComment(Long runningid, Long commentid);

}
