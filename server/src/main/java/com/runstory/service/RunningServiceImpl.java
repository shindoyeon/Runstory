package com.runstory.service;

import com.runstory.api.request.RunningCrewReqDto;
import com.runstory.api.response.RunningMainResDto;
import com.runstory.domain.hashtag.HashtagType;
import com.runstory.domain.hashtag.entity.Hashtag;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import com.runstory.domain.running.Running;
import com.runstory.domain.running.RunningDetail;
import com.runstory.api.response.RunningDetailSumDto;
import com.runstory.domain.running.dto.RunningDto;
import com.runstory.domain.user.entity.User;
import com.runstory.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.HashMap;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class RunningServiceImpl implements RunningService {

    private final RunningRepository runningrepository;
    private final RunningDetailRepository runningDetailRepository;
    private final HashtagRepository hashtagRepository;
    private final SelectedHashtagRepository selectedHashtagRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public long createRunningCrew(RunningCrewReqDto runningCrewReqDto){// User user 현재 유저를 들고와야한다.
        Running running = new Running(runningCrewReqDto);
        runningrepository.save(running);

        RunningDetail runningDetail = new RunningDetail(runningCrewReqDto);
        runningDetailRepository.save(runningDetail);
        // RunningHashTag
        for (Long hashtagId : runningCrewReqDto.getHastag()){
            // HashTag 관련 Repository 필요
            Hashtag hashtag = hashtagRepository.findHashtagByHashtagId(hashtagId);
            SelectedHashtag selectedHashtag = SelectedHashtag.builder()
                    .hashtagType(HashtagType.RUNNING)
                    .running(running)
                    .hashtag(hashtag)
                    .build();
            selectedHashtagRepository.save(selectedHashtag);
        }
        return running.getRunningId();
    }


    @Override
    public ArrayList<HashMap<String, ArrayList<RunningMainResDto>>> selectRunningCrew(float longitude, float latitude){
        return null;
    }

    @Override
    public RunningDetailSumDto findRunningDetail(Long id){
        Running running = runningrepository.getById(id);
        RunningDetail runningDetail = runningDetailRepository.getById(id);
        RunningDetailSumDto runningDetailSumDto = new RunningDetailSumDto(running, runningDetail);
        return runningDetailSumDto;
    }

//    @Override
//    public RunningDetailSumDto updateRunningDetail(Long id, RunningDetailSumDto runningDetailSumDto){
//        Running running = runningrepository.getById(id);
//        RunningDetail runningDetail = runningDetailRepository.getById(id);
//        RunningDetailSumDto runningDetailSumDto = new RunningDetailSumDto(running, runningDetail);
//
//        return runningDetailSumDto;
//    }
}
