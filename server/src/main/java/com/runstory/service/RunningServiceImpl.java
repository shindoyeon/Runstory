package com.runstory.service;

import com.runstory.api.response.RunningListDto;
import com.runstory.domain.running.Running;
import com.runstory.repository.RunningRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RunningServiceImpl implements RunningService {
    @Autowired
    RunningRepository runningrepository;

    @Override // 버튼을 클릭했을 때 상세내용을 보내는 방식
    public RunningListDto findrunningInfo(Long id){
        Running runnings = runningrepository.findAllById(id);
        RunningListDto runningInfo = new RunningListDto(
            runnings.getId(),
            runnings.getImgPathFile(),
            runnings.getImgFileName(),
            runnings.getCrewName());
        return runningInfo;
    }
}
