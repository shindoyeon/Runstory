package com.runstory.api.controller;

import com.runstory.api.request.FeedReqDto;
import com.runstory.api.response.BaseResponse;
import com.runstory.api.response.SimpleFeedResDto;
import com.runstory.common.auth.CustomUserDetails;
import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.user.dto.FollowDto;
import com.runstory.domain.user.entity.Follow;
import com.runstory.domain.user.entity.User;
import com.runstory.service.FeedService;
import com.runstory.service.FollowService;
import com.runstory.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/feed")
@RequiredArgsConstructor
@Api(tags = "개인 피드 API")
public class FeedController {
    private final FeedService feedService;
    private final FollowService followService;
    private final UserService userService;

//    @GetMapping("")
    public  ResponseEntity<List<SimpleFeedResDto>> getFeedAll(){
        List<FeedDto> feeds = feedService.findAll();
        List<SimpleFeedResDto> result = feeds.stream().map(f->new SimpleFeedResDto(f)).collect(Collectors.toList());
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/{userid}")
    @ApiOperation(value = "사용자 피드 조회", notes = "공개 범위에 따라 피드 조회")
    public BaseResponse<?> getUserFeed(@ApiIgnore Authentication authentication, @PathVariable("userid") Long userId){
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
        Boolean isMe = (userId==userDetails.getUserSeq());
        System.out.println("isMe: "+isMe);
        List<FeedDto> feedDtos = feedService.findByUserId(userDetails.getUserSeq(), userId, isMe);

        List<SimpleFeedResDto> result= feedDtos.stream().map(f->new SimpleFeedResDto(f)).collect(Collectors.toList());

        return BaseResponse.success(result);
    }

    @GetMapping("/followstatus/{userid}")
    @ApiOperation(value = "사용자 팔로우 조회", notes = "팔로우 상태, 팔로잉, 팔로워 수 조회")
    public BaseResponse<?> getFollowStatus(@ApiIgnore Authentication authentication, @PathVariable("userid") Long userId){
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
        Long myId = userDetails.getUserSeq();
        HashMap<String, Object> result = new HashMap<>();
        Follow follow = followService.findFollowStatus(myId,userId);
        int follwingCnt = followService.findFollwing(userId).size();
        int follwerCnt = followService.findFollwer(userId).size();
        result.put("followStatus", follow==null?false:true);    //팔로우 상태에 따라 팔로우, 언팔로우 버튼 동작
        result.put("followId", follow==null?null:follow.getFollowId());
        result.put("follwingCnt", follwingCnt);
        result.put("follwerCnt", follwerCnt);
        return BaseResponse.success(result);
    }

    @GetMapping("/profile/{userid}")
    @ApiOperation(value = "사용자 프로필 조회", notes = "사용자 닉네임, 레벨, 프로필 사진")
    public BaseResponse<?> getProfile(@ApiIgnore Authentication authentication,@PathVariable("userid") Long userId){
        User user = userService.getUserProfileByUserSeq(userId);
        Map<String, Object> profile = new HashMap<>();
        profile.put("userNickName", user.getUserNickname());
        profile.put("level", user.getLevel());
        profile.put("profileImgFilePath", user.getProfileImgFilePath());
        profile.put("profileImgFileName", user.getProfileImgFileName());
        return BaseResponse.success(profile);
    }

    @PostMapping("/follow/{follow-userid}")
    @ApiOperation(value = "사용자 팔로우")
    public BaseResponse<?> followUser(@ApiIgnore Authentication authentication, @PathVariable("follow-userid") Long followUserId){
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
        Follow follow = followService.saveFollow(userDetails.getUserSeq(), followUserId);

        if(follow==null)
            return BaseResponse.success(null);
        return BaseResponse.success(null);
    }

    @DeleteMapping("/follow/{followid}")
    @ApiOperation(value = "사용자 언팔로우")
    public BaseResponse<?> unfollowUser(@PathVariable("followid") Long followId){
        followService.deleteFollow(followId);
        return BaseResponse.success(null);
    }

    @GetMapping("/follow/{userid}")
    @ApiOperation(value = "팔로잉,팔로워 리스트 조회")
    public BaseResponse<?> getFollowList(@ApiIgnore Authentication authentication, @PathVariable("userid") Long userId){
        Map<String, List<FollowDto>> followList = followService.findFollowList(userId);
        return BaseResponse.success(followList);
    }

    @PostMapping("")
    @ApiOperation(value = "피드 등록")
    public BaseResponse<?> createFeed(@ApiIgnore Authentication authentication, @RequestPart FeedReqDto feed, @RequestPart MultipartFile [] files) throws IOException {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
        feed.setUserId(userDetails.getUserSeq());
        Feed result = feedService.saveFeed(feed, files);
        return BaseResponse.success(null);
    }

    @PutMapping("/{feedid}")
    @ApiOperation(value = "피드 수정")
    public BaseResponse<?> updateFeed(@ApiIgnore Authentication authentication, @PathVariable("feedid") Long feedId, @RequestBody FeedReqDto feed) throws IOException {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
        feed.setUserId(userDetails.getUserSeq());
        System.out.println(feed.toString());
        Feed result = feedService.updateFeed(feed, feedId);
        return BaseResponse.success(null);
    }

    @DeleteMapping("/{feedid}")
    @ApiOperation(value = "피드 삭제")
    public BaseResponse<?> deleteFeed(@ApiIgnore Authentication authentication, @PathVariable("feedid") Long feedId) throws IOException {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
        System.out.println(feedId);
        Boolean result=feedService.deleteFeed(feedId,userDetails.getUserSeq());
        if(result)  return BaseResponse.success(null);
        return BaseResponse.fail();
    }
}
