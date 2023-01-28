package com.runstory.service;

import com.runstory.api.request.RunningCrewReqDto;
import com.runstory.api.response.RunningMainResDto;
import com.runstory.api.response.RunninginfoResDto;
import com.runstory.domain.hashtag.HashtagType;
import com.runstory.domain.hashtag.dto.HashtagDto;
import com.runstory.domain.hashtag.dto.SelectedHashtagDto;
import com.runstory.domain.hashtag.entity.Hashtag;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import com.runstory.domain.running.Running;
import com.runstory.domain.running.RunningDetail;
import com.runstory.domain.running.dto.RunningDto;
import com.runstory.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
public class RunningServiceImpl implements RunningService {
    @Autowired
    RunningRepository runningrepository;

    @Override // 버튼을 클릭했을 때 상세내용을 보내는 방식
    public RunninginfoResDto findRunningInfo(Long id){
        Running runnings = runningrepository.getById(id);
        RunninginfoResDto runningInfo = RunninginfoResDto.builder()
                .crewName(runnings.getCrewName())
                .img(runnings.getImgFileName())
                .startTime(runnings.getStartTime())
                .endTime(runnings.getEndTime())
                .distance(runnings.getDistance())
                .startLocation(runnings.getStartLocation())
                .build();
        return runningInfo;
    }

    @Autowired
    private InsertCrewRepository insertCrewRepository;

    @Autowired
    private InsertCrewDetailRepository insertCrewDetailRepository;

    @Autowired
    private HashtagRepository hashtagRepository;

    @Autowired
    private SelectedHashtagRepository selectedHashtagRepository;

    @Override
    @Transactional
    public long createRunningCrew(RunningCrewReqDto runningCrewReqDto){
        Running running = Running.builder()
                .imgFileName(runningCrewReqDto.getImgFileName())
                .imgPathFile(runningCrewReqDto.getImgPathFile())
                .crewName(runningCrewReqDto.getCrewName())
                .runningContent(runningCrewReqDto.getRunningContent())
                .startLocation(runningCrewReqDto.getStartLocation())
                .endLocation(runningCrewReqDto.getEndLocation())
                .startTime(runningCrewReqDto.getStartTime())
                .endTime(runningCrewReqDto.getEndTime())
                .startLongitude(runningCrewReqDto.getStartLongitude())
                .startLatitude(runningCrewReqDto.getStartLatitude())
                .endLongitude(runningCrewReqDto.getEndLongitude())
                .endLatitude(runningCrewReqDto.getEndLatitude())
                .distance(runningCrewReqDto.getDistance())
                .build();
        insertCrewRepository.save(running);

        RunningDetail runningDetail = RunningDetail.builder()
                .genderType(runningCrewReqDto.getGenderType())
                .man(runningCrewReqDto.getMan())
                .women(runningCrewReqDto.getWomen())
                .total(runningCrewReqDto.getTotal())
                .minAge(runningCrewReqDto.getMinAge())
                .maxAge(runningCrewReqDto.getMaxAge())
                .hasDog(runningCrewReqDto.isHasDog())
                .build();
        insertCrewDetailRepository.save(runningDetail);

        // RunningHashTag
        for (Long hashtagId : runningCrewReqDto.getHastag()){
            // HashTag 관련 Repository 필요
            Hashtag hashtag = hashtagRepository.findByHashtagId(hashtagId);
//            HashtagDto hashtagDto = HashtagDto.builder()
//                    .hashtagName(hashtag.getHashtagName())
//                    .build();
            SelectedHashtag selectedHashtag = SelectedHashtag.builder()
                    .hashtagType(HashtagType.RUNNING)
                    .running(running)
                    .hashtag(hashtag)
                    .build();
            selectedHashtagRepository.save(selectedHashtag);
        }

        return running.getId();
    }

    @Autowired
    RunningMainRepository runningMainRepository;
    @Override
    public ArrayList<RunningMainResDto> selectRunningCrew(float longitude, float latitude){
        ArrayList<Running> runninglist = runningMainRepository.findByIsFinished(false); // 데이터 전체를 들고온다.
        ArrayList<RunningMainResDto> result = new ArrayList<>(); // 결과값을 넣기 위한 ArrayList
        LocalDate seoulNow = LocalDate.now(ZoneId.of("Asia/Seoul")); // 현재 서울의 시간을 보여준다.
        for (Running running: runninglist){
            int year = running.getStartTime().getYear();
            int day = running.getStartTime().getDayOfYear();
            if (Math.abs(running.getStartLatitude() - latitude) < 0.01 && Math.abs(running.getStartLongitude() - longitude) < 0.01){
                RunningMainResDto runningMainResDto = RunningMainResDto.builder()
                        .id(running.getId())
                        .imgFileName(running.getImgFileName())
                        .imgPathFile(running.getImgPathFile())
                        .type("GPS")
                        .build();
                result.add(runningMainResDto);
            }else if (day == seoulNow.getDayOfYear() && year == seoulNow.getYear()){
                RunningMainResDto runningMainResDto = RunningMainResDto.builder()
                        .id(running.getId())
                        .imgFileName(running.getImgFileName())
                        .imgPathFile(running.getImgPathFile())
                        .type("today")
                        .build();
                result.add(runningMainResDto);
            }
            // HashTag_id에 따라 HashTagTable을 들고와서 List를 확인
//            for (SelectedHashtag selectedHashtag : running.getSelectedHashtags()){
//                if (selectedHashtag.getRunning() != null){
//
//                }
//            }
        }
        return result;
    }
}
