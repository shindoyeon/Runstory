package com.runstory.api.controller.running;

import com.runstory.api.Response.running.RunningListDTO;
import com.runstory.api.service.RunningService;
import com.runstory.domain.running.Running;
import com.runstory.api.repository.running.RunningRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/running")
public class RunningController {
    @Autowired
    private RunningService runningservice;

    @GetMapping("/main")
    public RunningListDTO runninginfo() {
        return runningservice.findrunningInfo(1L);
    }
}
