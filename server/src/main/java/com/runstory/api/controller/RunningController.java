package com.runstory.api.controller;

import com.runstory.api.request.RunningCrewReqDto;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import com.runstory.api.response.BaseResponse;
import com.runstory.api.response.RunningDetailSumDto;
import com.runstory.api.response.RunningMainResDto;
import com.runstory.domain.running.Running;
import com.runstory.service.RunningService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;


@RestController
    @RequestMapping("/api/running")
public class RunningController {
    @Autowired
    private RunningService runningservice;


    @PostMapping("") // RunningCrew 생성
    @ApiOperation(value = "Running Crew Create")
    public ResponseEntity<?> createRunningCrew(@RequestBody RunningCrewReqDto runningCrewReqDto) throws  Exception{
        Map<String, Object> result = new HashMap<>();
        try {
            result.put("running", runningservice.createRunningCrew(runningCrewReqDto));
            result.put("result", "크루 생성 완료!");
            return ResponseEntity.ok().body(result);
        }catch (Exception E){
            return ResponseEntity.status(500).body("Crew-Create-Error");
        }
    }

//    @GetMapping("") // RunningCrew Read
//    @ApiOperation(value = "Running Crew Read")
//    public BaseResponse<?> getRunnninCrew(@RequestParam("latitude") float latitude, @RequestParam("longitude") float longtitude){
//        ArrayList<HashMap<String, ArrayList<RunningMainResDto>>> runningMainResDtos = runningservice.selectRunningCrew(latitude, longtitude);
//        return BaseResponse.success(runningMainResDtos);
//    }

    //    @DeleteMapping("/detail/{runningid}")
//    public ResponseEntity<?> runningdelete(@PathVariable Long runningid) throws  Exception{
//
//    }


    /*
    * 여기서부터는 상세페이지에 관한 내용
    * */
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

    @PutMapping("/detail/{runningid}")
    @ApiOperation(value = "Running Crew Update")
    public ResponseEntity<?> runningchange(@PathVariable Long runningid, @RequestBody RunningDetailSumDto runningDetailSumDto) throws Exception{
        Map<String, Object> result = new HashMap<>();
        try {
            result.put("statuscode", "200");
            result.put("message", "Runnging Change Success");
            return ResponseEntity.ok().body(result);
        }catch (Exception E){
            return ResponseEntity.status(500).body("Running-Info-Update-Error");
        }
    }

    /*
    * 여기는 댓글 관련한 기능입니다.
    * */
    // 댓글 생성, 댓글 삭제 기능

    /*
    * 개인 피드에 관한 자료입니다.
    * */

}