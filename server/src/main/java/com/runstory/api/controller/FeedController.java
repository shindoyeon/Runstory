package com.runstory.api.controller;

import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.service.FeedService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/feed")
@RequiredArgsConstructor
public class FeedController {
    private final FeedService feedService;

    @GetMapping("")
    public  ResponseEntity<List<FeedDto>> getFeed(HttpServletRequest request){
        List<Feed> feeds = feedService.find();
        List<FeedDto> result = new ArrayList<>();
        System.out.println("# feeds: " + feeds.size());

        for(Feed f:feeds){
            FeedDto feed = new FeedDto(f);
            result.add(feed);
        }
        result = feeds.stream().map(b->new FeedDto(b)).collect(Collectors.toList());
        return ResponseEntity.ok().body(result);
    }
}
