package com.runstory.service;

import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.user.entity.Follow;
import com.runstory.domain.user.entity.User;
import com.runstory.repository.FeedRepository;
import com.runstory.repository.FeedRepositoryCustom;
import com.runstory.repository.FollowRepository;
import com.runstory.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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
    private final UserRepository userRepository;
    public List<FeedDto> findAll(){
        List<Feed> feeds = feedRepository.findAll();
        List<FeedDto> result = feeds.stream().map(f->new FeedDto(f)).collect(Collectors.toList());
        return result;
    }

    /**
     * 팔로우 관계에 따른 피드 조회
     * 팔로우 관계인 경우->전체공개, 팔로우 공개 게시물 조회
     * 팔로우 관계가 아닌 경우->전체공개 게시물만 조회
     * @param myUserId
     * @param yourUserId
     * @param isMe
     * @return
     */
    public List<FeedDto> findByUserId(Long myUserId, Long yourUserId, Boolean isMe){
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

    public Page<Feed> findByFollowingFeedPages(Long lastFeedId, int size, Long userId){
        User user = userRepository.findByUserSeq(userId);
        System.out.println(user.getUserId());
        List<User> followers = findFollowersWithLoggedInMember(userId,user);    // 사용자를 포함하고, 사용자가 팔로우하고 있는 사람들을 가져온다.
        Page<Feed> feeds = fetchPages(lastFeedId, size, followers); // followers의 게시물들을 페이지네이션해서 가져온다.
        return feeds;
    }

    private List<User> findFollowersWithLoggedInMember(Long userId, User user) {
        List<Follow> followings = followRepository.findFollowing(userId);
        List<User> allMembers = new ArrayList<>();

        for(Follow f:followings)
            allMembers.add(userRepository.findByUserSeq(f.getTo().getUserSeq()));

        allMembers.add(user);
        return allMembers;
    }

    private Page<Feed> fetchPages(Long lastFeedId, int size, List<User> followers) {
        PageRequest pageRequest = PageRequest.of(0, size); // 페이지네이션을 위한 PageRequest, 페이지는 0으로 고정한다.
        return feedRepository.findByFeedIdLessThanAndUserInOrderByFeedIdDesc(lastFeedId, followers, pageRequest); // JPA 쿼리 메소드
    }
}
