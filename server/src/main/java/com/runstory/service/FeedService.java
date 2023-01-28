package com.runstory.service;

import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.user.entity.Follow;
import com.runstory.repository.FeedRepository;
import com.runstory.repository.FeedRepositoryCustom;
import com.runstory.repository.FollowRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeedService {
    private final FeedRepository feedRepository;
    private final FeedRepositoryCustom feedRepositoryCustom;
    private final FollowRepository followRepository;

    public List<FeedDto> findAll(){
        List<Feed> feeds = feedRepository.findAll();
        List<FeedDto> result = feeds.stream().map(f->new FeedDto(f)).collect(Collectors.toList());
        return result;
    }

    public List<FeedDto> findByUserId(Long myUserId, Long yourUserId, Boolean isMe){
        //팔로우 관계인 경우->전체공개, 팔로우 공개 게시물 조회
        //팔로우 관계가 아닌 경우->전체공개 게시물만 조회
        List<Feed> feeds = new ArrayList<>();
        if(isMe){
            feeds = feedRepository.findByUserId(myUserId);
        }else{
            //팔로우 관계인지 조회
            Follow follow = followRepository.findFollow(myUserId, yourUserId);
            //팔로우 관계 아님->전체공개 게시물만
            if(follow==null)
                feeds = feedRepositoryCustom.searchByUserId(yourUserId, false);
            //전체공개+팔로우공개 게시물
            else{
                feeds = feedRepositoryCustom.searchByUserId(yourUserId, true);
            }
        }

        List<FeedDto> result = feeds.stream().map(f->new FeedDto(f)).collect(Collectors.toList());
        return result;
    }

}
