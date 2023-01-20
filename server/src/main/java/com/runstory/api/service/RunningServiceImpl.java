package com.runstory.api.service;

import com.runstory.api.Response.running.RunningListDTO;
import com.runstory.api.repository.running.RunningRepository;
import com.runstory.domain.running.Running;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RunningServiceImpl implements RunningService{
    @Autowired
    RunningRepository runningrepository;

    @Override // 버튼을 클릭했을 때 상세내용을 보내는 방식
    public RunningListDTO findrunningInfo(Long id){
        Running runnings = runningrepository.findAllById(id);
        RunningListDTO runningInfo = new RunningListDTO(
            runnings.getId(),
            runnings.getImgPathFile(),
            runnings.getImgFileName(),
            runnings.getCrewName());
        return runningInfo;
    }
}
