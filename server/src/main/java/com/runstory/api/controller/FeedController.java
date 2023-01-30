package com.runstory.api.controller;

import static java.lang.System.currentTimeMillis;

import com.runstory.api.request.FeedRequestDto;
import com.runstory.api.response.ApiResponse;
import com.runstory.api.response.SimpleFeedResDto;
import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.user.dto.FollowDto;
import com.runstory.domain.user.entity.Follow;
import com.runstory.domain.user.entity.User;
import com.runstory.repository.FeedRepository;
import com.runstory.repository.SelectedHashtagRepository;
import com.runstory.repository.UserRepository;
import com.runstory.service.FeedService;
import com.runstory.service.FollowService;
import com.runstory.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.security.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Optional;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/feed")
@RequiredArgsConstructor
@Slf4j
@Api(tags = "개인 피드 API")
public class FeedController {

    private final SelectedHashtagRepository selectedHashtagRepository;

    private final UserRepository userRepository;
    private final FeedService feedService;
    private final FollowService followService;

    private final UserService userService;

    private final FeedRepository feedRepository;

//    @GetMapping("")
    public  ResponseEntity<List<SimpleFeedResDto>> getFeedAll(HttpServletRequest request){
        List<FeedDto> feeds = feedService.findAll();
        List<SimpleFeedResDto> result = feeds.stream().map(f->new SimpleFeedResDto(f)).collect(Collectors.toList());
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("")
    @ApiOperation(value = "사용자 피드 조회", notes = "공개 범위에 따라 피드 조회")
    public ResponseEntity<?> getUserFeed(@RequestParam Long userId, @RequestParam Boolean isMe, HttpServletRequest request){
        System.out.println(userId+" "+isMe);
        List<FeedDto> feedDtos = feedService.findByUserId(1L, userId, isMe);
        List<SimpleFeedResDto> result= feedDtos.stream().map(f->new SimpleFeedResDto(f)).collect(Collectors.toList());

        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/followstatus/{userId}")
    @ApiOperation(value = "사용자 팔로우 조회", notes = "팔로우 상태, 팔로잉, 팔로워 수 조회")
    public ResponseEntity<?> getFollowStatus(@PathVariable Long userId, HttpServletRequest request){
        HashMap<String, Object> result = new HashMap<>();
        Follow follow = followService.findFollowStatus(3L,userId);
        int follwingCnt = followService.findFollwing(userId).size();
        int follwerCnt = followService.findFollwer(userId).size();
        result.put("followStatus", follow==null?false:true);    //팔로우 상태에 따라 팔로우, 언팔로우 버튼 동작
        result.put("followId", follow==null?null:follow.getFollowId());
        result.put("follwingCnt", follwingCnt);
        result.put("follwerCnt", follwerCnt);
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("/profile/{userId}")
    @ApiOperation(value = "사용자 프로필 조회", notes = "사용자 닉네임, 레벨, 프로필 사진")
    public ResponseEntity<?> getProfile(@PathVariable Long userId, HttpServletRequest request){
        //userservice 에서 개인 프로필 조회 들고 오기
        return ResponseEntity.ok().body(null);
    }

    @PostMapping("/follow/{followUserId}")
    @ApiOperation(value = "사용자 팔로우")
    public ApiResponse<?> followUser(@PathVariable Long followUserId, HttpServletRequest request){
        Follow follow = followService.saveFollow(1L, followUserId);

        if(follow==null)
            return ApiResponse.success("data","false");
        return ApiResponse.success("data","success");
    }

    @DeleteMapping("/follow/{followId}")
    @ApiOperation(value = "사용자 언팔로우")
    public ApiResponse<?> unfollowUser(@PathVariable Long followId, HttpServletRequest request){
        followService.deleteFollow(followId);
        return ApiResponse.success("data","success");
    }

    @GetMapping("/follow/{userId}")
    @ApiOperation(value = "팔로잉,팔로워 리스트 조회")
    public ApiResponse<?> getFollowList(@PathVariable Long userId, HttpServletRequest request){
        Map<String, List<FollowDto>> followList = followService.findFollowList(userId);
        return ApiResponse.success("data",followList);
    }

    /*   userID === token*/


    @PostMapping("")
    @ApiOperation(value = "게시글 작성하기", notes = "")
    public ResponseEntity<?> addFeed(@RequestHeader(value = "userSeq") Long userId,
        @RequestBody FeedRequestDto feed) throws Exception{

    /*          if (!jwtTokenProvider.validateToken(token)) {
            return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new ErrorResponse(messageSource.getMessage("error.valid.jwt", null, LocaleContextHolder.getLocale())));
        }
        Long userSeq = jwtTokenProvider.getUserSeq(token);*/

        Feed feedResult = feedService.addFeed(userId, feed);

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }
    @PutMapping("/{feedId}")
    @ApiOperation(value = "게시글 수정하기", notes = "")
    public ResponseEntity<?> updateFeed(@RequestHeader(value = "userSeq") String token,
        @PathVariable("FeedId") Long feedId, @RequestBody Feed feed){

/*        if (!jwtTokenProvider.validateToken(token)) {
            return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new ErrorResponse(messageSource.getMessage("error.valid.jwt", null, LocaleContextHolder.getLocale())));
        } */
        Feed feedSaved = feedService.updateFeed(feedId, feed);

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }


    @DeleteMapping("/{feedId}")
    @ApiOperation(value = "feedId에 해당하는 게시글 삭제하기", notes = "")
    public ResponseEntity<?> deleteFeed(@RequestHeader(value = "userSeq") String token, @PathVariable("feedId") Long feedId){


 /*       if (!jwtTokenProvider.validateToken(token)) {
            return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new ErrorResponse(messageSource.getMessage("error.valid.jwt", null, LocaleContextHolder.getLocale())));
        }*/

        feedService.deleteFeed(feedId);

        return ResponseEntity.status(HttpStatus.OK).body(null);
    }
}
