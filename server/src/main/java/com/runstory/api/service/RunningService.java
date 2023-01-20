package com.runstory.api.service;

import com.runstory.api.Response.running.RunningListDTO;
import com.runstory.domain.running.Running;

public interface RunningService {
    RunningListDTO findrunningInfo(Long id);

}
