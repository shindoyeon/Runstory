package com.runstory.api.controller;

import com.runstory.api.request.RunningCrewReqDto;
import java.util.HashMap;
import java.util.Map;

import com.runstory.service.RunningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/running")
public class RunningController {
    @Autowired
    private RunningService runningservice;


    @GetMapping("/main/info/{runningid}")
    public ResponseEntity<?> view(@PathVariable Long runningid) throws Exception{
        Map<String, Object> result = new HashMap<>();

        try {
            result.put("statuscode", "200");
            result.put("message", "게시글 작성 성공.");
            result.put("success", "true");
            result.put("data",runningservice.findRunningInfo(runningid));
            return ResponseEntity.ok().body(result);
        }catch(Exception E) {
            return  ResponseEntity.status(500).body("해당 게시글은 없습니다.");
        }
    }


    @PostMapping("/running")
    public ResponseEntity<?> createRunningCrew(@RequestBody RunningCrewReqDto runningCrewReqDto) throws  Exception{
        Map<String, Object> result = new HashMap<>();
        try {
            result.put("running", runningservice.createRunningCrew(runningCrewReqDto));
            result.put("result", "크루 생성 완료!");
            return ResponseEntity.ok().body(result);
        }catch (Exception E){
            return ResponseEntity.status(500).body("크루가 정상적으로 생성되지 못했습니다.");
        }
    }
}