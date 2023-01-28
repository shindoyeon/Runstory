package com.runstory.api.controller;

import com.runstory.api.response.FeedResDto;
import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.service.FeedService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/feed")
@RequiredArgsConstructor
public class FeedController {
    private final FeedService feedService;

//    @GetMapping("")
    public  ResponseEntity<List<FeedResDto>> getFeedAll(HttpServletRequest request){
        List<FeedDto> feeds = feedService.findAll();
        List<FeedResDto> result = feeds.stream().map(f->new FeedResDto(f)).collect(Collectors.toList());
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("")
    public ResponseEntity<List<FeedResDto>> getUserFeed(@RequestParam("userid") Long userId, @RequestParam("isMe") Boolean isMe, HttpServletRequest request){

        List<FeedDto> feeds = feedService.findByUserId(1L, userId, isMe);
        List<FeedResDto> result = feeds.stream().map(f->new FeedResDto(f)).collect(Collectors.toList());
        return ResponseEntity.ok().body(result);
    }

}
