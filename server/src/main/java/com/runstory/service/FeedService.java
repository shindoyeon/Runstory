package com.runstory.service;

import com.runstory.domain.feed.entity.Feed;
import com.runstory.repository.FeedRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeedService {
    private final FeedRepository feedRepository;

    public List<Feed> find(){
        List<Feed> feeds = feedRepository.findAll();
        return feedRepository.findAll();
    }
}
