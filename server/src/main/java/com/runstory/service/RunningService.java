package com.runstory.service;

import com.runstory.api.response.RunningListDto;

public interface RunningService {
    RunningListDto findrunningInfo(Long id);

}
