package com.runstory.api.controller;

import com.runstory.api.request.RunningCrewReqDto;
import java.util.HashMap;
import java.util.Map;

import com.runstory.service.RunningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/running")
public class RunningController {
    @Autowired
    private RunningService runningservice;


    @GetMapping("/info/{runningid}")
    public ResponseEntity<?> view(@PathVariable Long runningid) throws Exception{
        Map<String, Object> result = new HashMap<>();

        try {
            result.put("statuscode", "200");
            result.put("success", "true");
            result.put("data",runningservice.findRunningInfo(runningid));
            return ResponseEntity.ok().body(result);
        }catch(Exception E) {
            return  ResponseEntity.status(500).body("Running-Info-Error");
        }
    }


    @PostMapping("")
    public ResponseEntity<?> createRunningCrew(@RequestBody RunningCrewReqDto runningCrewReqDto) throws  Exception{
        System.out.println("CREATE");
        Map<String, Object> result = new HashMap<>();
        try {
            result.put("running", runningservice.createRunningCrew(runningCrewReqDto));
            result.put("result", "크루 생성 완료!");
            return ResponseEntity.ok().body(result);
        }catch (Exception E){
            return ResponseEntity.status(500).body("Crew-Create-Error");
        }
    }

    @GetMapping("")
    public ResponseEntity<?> RunningMain(@RequestParam("latitude") float latitude, @RequestParam("longitude") float longtitude) throws Exception{
        Map<String, Object> result = new HashMap<>();
        try {
            result.put("statuscode", "200");
            result.put("message", "게시글 작성 성공.");
            result.put("success", "true");
            result.put("first_data", runningservice.selectRunningCrew(latitude, longtitude));
            return ResponseEntity.ok().body(result);
        }catch (Exception E){
            return ResponseEntity.status(500).body("Main-Page-Error");
        }
    }

    @GetMapping("/detail/{runningid}") // 상세페이지를 Read
    public ResponseEntity<?> runningdetail(@PathVariable Long runningid) throws Exception{
        Map<String, Object> result = new HashMap<>();
        try {
            result.put("statuscode", "200");
            result.put("success", "true");
            result.put("data",runningservice.findRunningDetail(runningid));
            return ResponseEntity.ok().body(result);
        }catch(Exception E) {
            return  ResponseEntity.status(500).body("Running-Info-Error");
        }
    }
}