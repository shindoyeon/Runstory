package com.runstory.api.controller;

import com.runstory.service.FeedService;
import com.runstory.service.RunningService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/main")
@RequiredArgsConstructor
@Api(tags = "인덱스 페이지 API")
public class MainController {
    private final FeedService feedService;
    private final RunningService runningService;
    @GetMapping("/running-location")
    @ApiOperation(value = "현재위치 기반 러닝 모임 조회", notes = "")
    public ResponseEntity<?> getRunnungCrewByLocation (@RequestParam float latitude, @RequestParam float longitude, HttpServletRequest request){
        return null;
    }

    @GetMapping("/feed")
    @ApiOperation(value = "오늘 마감 러닝 모임 조회", notes = "")
    public ResponseEntity<?> getFeedByFollow (HttpServletRequest request){
        return null;
    }
}