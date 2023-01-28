package com.runstory.service;

import com.runstory.api.request.RunningCrewReqDto;
import com.runstory.api.response.RunningMainGPSResDto;
import com.runstory.api.response.RunninginfoResDto;
import com.runstory.domain.running.Running;
import com.runstory.domain.running.RunningDetail;
import com.runstory.repository.InsertCrewDetailRepository;
import com.runstory.repository.InsertCrewRepository;
import com.runstory.repository.RunningMainRepository;
import com.runstory.repository.RunningRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.SQLOutput;
import java.util.ArrayList;

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
        System.out.println(running);
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
        return running.getId();
    }

    @Autowired
    RunningMainRepository runningMainRepository;
    @Override
    public ArrayList<RunningMainGPSResDto> selectRunningCrewGPS(float longitude, float latitude){
        ArrayList<Running> runninglist = runningMainRepository.findAll(); // 데이터 전체를 들고온다.
        ArrayList<RunningMainGPSResDto> result = new ArrayList<RunningMainGPSResDto>();
        for (Running running: runninglist){
            if (running.getStartLatitude() - latitude < 0.01 && running.getStartLongitude() - longitude < 0.01){
                RunningMainGPSResDto runningMainGPSResDto = RunningMainGPSResDto.builder()
                        .id(running.getId())
                        .imgFileName(running.getImgFileName())
                        .imgPathFile(running.getImgPathFile())
                        .build();
                result.add(runningMainGPSResDto);
            }
        }
        return result;
    }
}
