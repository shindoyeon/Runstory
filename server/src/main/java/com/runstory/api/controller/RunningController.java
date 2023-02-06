package com.runstory.api.controller;

import com.runstory.api.request.RunningCrewReqDto;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.runstory.api.response.BaseResponse;
import com.runstory.api.response.RunningDetailSumDto;
import com.runstory.api.response.RunningMainResDto;
import com.runstory.common.auth.CustomUserDetails;
import com.runstory.domain.running.Running;
import com.runstory.domain.running.dto.RunningBoardCommentDto;
import com.runstory.domain.user.entity.Follow;
import com.runstory.service.RunningService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import javax.annotation.security.PermitAll;
import javax.servlet.http.HttpServletRequest;


@RestController
    @RequestMapping("/api/running")
public class RunningController {
    @Autowired
    private RunningService runningservice;


    @PostMapping("") // RunningCrew 생성
    @ApiOperation(value = "Running Crew Create")
    public BaseResponse<?> createRunningCrew(@ApiIgnore Authentication authentication,@RequestBody RunningCrewReqDto runningCrewReqDto, HttpServletRequest request){
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
        Long userSeq = userDetails.getUserSeq(); // 로그인된 유저 Seq를 들고 온다.
        Long result =  runningservice.createRunningCrew(runningCrewReqDto, userSeq);
        return BaseResponse.success(result);
    }


    @GetMapping("") // RunningCrew Read
    @ApiOperation(value = "Running Crew Read")
    public BaseResponse<?> getRunnninCrew(@ApiIgnore Authentication authentication, @RequestParam("latitude") float latitude, @RequestParam("longitude") float longtitude){
        Long userSeq = ((CustomUserDetails) authentication.getDetails()).getUserSeq();
        List<HashMap<String, List<RunningMainResDto>>> runningMainResDtos = runningservice.selectRunningCrew(latitude, longtitude, userSeq);
        return BaseResponse.success(runningMainResDtos);
    }


    /*
    * 여기서부터는 상세페이지에 관한 내용
    * */
    @GetMapping("/detail/{runningid}") // 상세페이지를 Read
    public BaseResponse<?> runningdetail(@ApiIgnore Authentication authentication,@PathVariable Long runningid, HttpServletRequest request){
        Long userSeq = ((CustomUserDetails) authentication.getDetails()).getUserSeq();
        RunningDetailSumDto runningDetailSumDto =  runningservice.findRunningDetail(runningid, userSeq);
        return BaseResponse.success(runningDetailSumDto);
    }

    @DeleteMapping("/detail/{runningid}") // 상세페이지 삭제하기
    @ApiOperation(value = "상세페이지 삭제")
    public BaseResponse<?> runningCrewDelete(@ApiIgnore Authentication authentication, @PathVariable Long runningid){
        Long id = runningservice.deleteRunningCrew(runningid);
        return BaseResponse.success(id);
    }

    @PutMapping("/detail") // 상세페이지 수정
    public BaseResponse<?> runningCrewUpdate(@ApiIgnore Authentication authentication, @RequestBody RunningCrewReqDto newRunningCrewReqDto){
        Long id = runningservice.updateRunningCrew(newRunningCrewReqDto);
        return BaseResponse.success(newRunningCrewReqDto);
    }

    // 러닝 참가하기 옵션
    @PostMapping("/{runningid}/reservations") // 만약 같이 뛰고 싶다면...!
    public BaseResponse<?> runningCrewReservation(@ApiIgnore Authentication authentication, @PathVariable Long runningid){
        Long userSeq = ((CustomUserDetails) authentication.getDetails()).getUserSeq();
        Long id = runningservice.reservationRunningCrew(runningid, userSeq);
        if (id == -1L){
            return BaseResponse.success("already done");
        }else{
            return BaseResponse.success("ok");
        }
    }

    @DeleteMapping("/{runningid}/reservations") // 같이 뛰기 취소!
    public BaseResponse<?> runningDeleteReservation(@ApiIgnore Authentication authentication, @PathVariable Long runningid){
        Long userSeq = ((CustomUserDetails) authentication.getDetails()).getUserSeq();
        Long id = runningservice.deleteRunningReservation(runningid, userSeq);
        if (id == -1L){
            return BaseResponse.success("already delete");
        }else{
            return BaseResponse.success("ok");
        }
    }

    // 러닝 찜하기 옵션 (Entity를 하나 만들어야하므로 마지막에 하자..!)
    @PostMapping("/{runningid}/dibs")
    public BaseResponse<?> runningCreateDibs(@ApiIgnore Authentication authentication, @PathVariable Long runningid){
        Long userSeq = ((CustomUserDetails) authentication.getDetails()).getUserSeq();
        Long id = runningservice.createDibsRunningCrew(runningid, userSeq);
        if (id == -1L){
            return BaseResponse.success("already done");
        }else{
            return BaseResponse.success("ok");
        }
    }

    @DeleteMapping("/{runningid}/dibs") // 같이 뛰기 취소!
    public BaseResponse<?> runningDeleteDibs(@ApiIgnore Authentication authentication, @PathVariable Long runningid){
        Long userSeq = ((CustomUserDetails) authentication.getDetails()).getUserSeq();
        Long id = runningservice.deleteDibsRunningCrew(runningid, userSeq);
        if (id == -1L){
            return BaseResponse.success("already delete");
        }else{
            return BaseResponse.success("ok");
        }
    }


    // 댓글 관련 기능
    @PostMapping("/{runningid}/comment") // 댓글 생성
    public BaseResponse<?> runningCrewCommentCreate(@ApiIgnore Authentication authentication, @PathVariable Long runningid, @RequestBody RunningBoardCommentDto runningBoardCommentDto, HttpServletRequest request){
        Long userSeq = ((CustomUserDetails) authentication.getDetails()).getUserSeq(); // 로그인된 유저 Seq를 들고 온다.
        Long id = runningservice.createRunningComment(runningBoardCommentDto, userSeq, runningid);
        return BaseResponse.success(id);
    }

    @DeleteMapping("/comment/{commentid}")
    public BaseResponse<?> runningCrewCommentDelete(@ApiIgnore Authentication authentication, @PathVariable Long commentid, HttpServletRequest request){
        System.out.println(commentid);
        Long id = runningservice.deleteRunningComment(commentid);
        return BaseResponse.success(id);
    }

    // 개인 피드 관련 기능
    @GetMapping("/mycrew/reservation")
    public BaseResponse<?> myRunning(@ApiIgnore Authentication authentication){
        Long userSeq = ((CustomUserDetails) authentication.getDetails()).getUserSeq();
        List<HashMap<String, List<RunningMainResDto>>> result = runningservice.myRunningfunction(userSeq);
        return BaseResponse.success(result);
    }
}