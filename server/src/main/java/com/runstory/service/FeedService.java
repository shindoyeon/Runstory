package com.runstory.service;

import com.runstory.repository.FeedRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeedService {
    private final FeedRepository feedRepository;

    public void find(){
        feedRepository.findAllByUserId(1L);
    }
}
