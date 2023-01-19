package com.runstory.controller.running;

import com.runstory.domain.running.Running;
import com.runstory.repository.running.RunningRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/running")
public class RunningController {
    @Autowired
    private RunningRepository runningRepository;

    @GetMapping("/main")
    public List<Running> RunningList() {
        return runningRepository.findAllById(1L);
    }
}
