package com.runstory.service;

import com.runstory.api.request.FeedRequestDto;
import com.runstory.api.response.FeedResponseDto;
import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.user.entity.Follow;
import com.runstory.repository.FeedRepository;
import com.runstory.repository.FeedRepositoryCustom;
import com.runstory.repository.FollowRepository;
import com.runstory.repository.SelectedHashtagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeedService {
    @Autowired
    private final FeedRepository feedRepository;
    private final FeedRepositoryCustom feedRepositoryCustom;
    private final FollowRepository followRepository;

    private final SelectedHashtagRepository selectedHashtagRepository;


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
            Follow follow = followRepository.findFollowStatus(myUserId, yourUserId);
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


    public Feed addFeed(Long userSeq, FeedRequestDto feed){
        // 기본 설정
        // User user = userRepository.findById(feed.getUserId()).get(); filesystem 사용할때

        Feed feedEntity = Feed.builder()
            //.user(feed.userSeq()) 유저 seq 추가시
            .content(feed.getContent())
            .publicScope(feed.getPublicScope())
            //.regdate(LocalDateTime.parse(sdf.format(timestamp)))
            //.selectedHashTag(feed.getSelectedHashTag()) 해시태그 dto 추가시
            .build();
        // 연결


        Feed nowfeed = feedRepository.save(feedEntity);

        return nowfeed;
    }


    public Feed updateFeed(Long feedId, Feed feed){

        Feed feedUpdated = feedRepository.findById(feedId).orElse(null);


        return feed;

    }
@Transactional
    public void deleteFeed(Long feedId) {
        feedRepository.deleteById(feedId);
        selectedHashtagRepository.deleteById(feedId);
    }
}

