package com.runstory.api.controller;

import com.runstory.api.request.FeedRequestDto;
import com.runstory.api.response.BaseResponse;
import com.runstory.api.response.SimpleFeedResDto;
import com.runstory.common.auth.CustomUserDetails;
import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.feed.entity.FeedLike;
import com.runstory.domain.user.dto.FollowDto;
import com.runstory.domain.user.entity.Follow;
import com.runstory.domain.user.entity.User;
import com.runstory.service.FeedService;
import com.runstory.service.FollowService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.time.LocalDateTime;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import org.springframework.web.multipart.MultipartFile;
import springfox.documentation.annotations.ApiIgnore;

@RestController
@RequestMapping("/feed")
@RequiredArgsConstructor
@Api(tags = "개인 피드 API")
public class FeedController {
    private final FeedService feedService;
    private final FollowService followService;

//    @GetMapping("")
    public  ResponseEntity<List<SimpleFeedResDto>> getFeedAll(HttpServletRequest request){
        List<FeedDto> feeds = feedService.findAll();
        List<SimpleFeedResDto> result = feeds.stream().map(f->new SimpleFeedResDto(f)).collect(Collectors.toList());
        return ResponseEntity.ok().body(result);
    }

    @GetMapping("")
    @ApiOperation(value = "사용자 피드 조회", notes = "공개 범위에 따라 피드 조회")
    public BaseResponse<?> getUserFeed(@RequestParam Long userId, @RequestParam Boolean isMe, HttpServletRequest request){
        System.out.println(userId+" "+isMe);
        List<FeedDto> feedDtos = feedService.findByUserId(1L, userId, isMe);
        List<SimpleFeedResDto> result= feedDtos.stream().map(f->new SimpleFeedResDto(f)).collect(Collectors.toList());

        return BaseResponse.success(result);
    }

    @GetMapping("/followstatus/{userId}")
    @ApiOperation(value = "사용자 팔로우 조회", notes = "팔로우 상태, 팔로잉, 팔로워 수 조회")
    public BaseResponse<?> getFollowStatus(@PathVariable Long userId, HttpServletRequest request){
        HashMap<String, Object> result = new HashMap<>();
        Follow follow = followService.findFollowStatus(3L,userId);
        int follwingCnt = followService.findFollwing(userId).size();
        int follwerCnt = followService.findFollwer(userId).size();
        result.put("followStatus", follow==null?false:true);    //팔로우 상태에 따라 팔로우, 언팔로우 버튼 동작
        result.put("followId", follow==null?null:follow.getFollowId());
        result.put("follwingCnt", follwingCnt);
        result.put("follwerCnt", follwerCnt);
        return BaseResponse.success(result);
    }

    @GetMapping("/profile/{userId}")
    @ApiOperation(value = "사용자 프로필 조회", notes = "사용자 닉네임, 레벨, 프로필 사진")
    public BaseResponse<?> getProfile(@PathVariable Long userId, HttpServletRequest request){
        //userservice 에서 개인 프로필 조회 들고 오기
        return BaseResponse.success(null);
    }

    @PostMapping("/follow/{followUserId}")
    @ApiOperation(value = "사용자 팔로우")
    public BaseResponse<?> followUser(@PathVariable Long followUserId, HttpServletRequest request){
        Follow follow = followService.saveFollow(1L, followUserId);

        if(follow==null)
            return BaseResponse.success(null);
        return BaseResponse.success(null);
    }

    @DeleteMapping("/follow/{followId}")
    @ApiOperation(value = "사용자 언팔로우")
    public BaseResponse<?> unfollowUser(@PathVariable Long followId, HttpServletRequest request){
        followService.deleteFollow(followId);
        return BaseResponse.success(null);
    }

    @GetMapping("/follow/{userId}")
    @ApiOperation(value = "팔로잉,팔로워 리스트 조회")
    public BaseResponse<?> getFollowList(@PathVariable Long userId, HttpServletRequest request){
        Map<String, List<FollowDto>> followList = followService.findFollowList(userId);
        return BaseResponse.success(followList);
    }
    @PostMapping("")
    @ApiOperation(value = "게시글 작성하기", notes = "게시글 작성")
    public BaseResponse<?> addFeed(@ApiIgnore Authentication authentication,
        @RequestBody FeedRequestDto feed) throws Exception {

     //  Long userId = ((CustomUserDetails) authentication.getDetails()).getUserSeq();
        System.out.println("addFeed");
        return BaseResponse.success(null);
    }

    @DeleteMapping("/{feedId}")
    @ApiOperation(value = "feedId에 해당하는 게시글 삭제하기", notes = "게시글 삭제")
    public BaseResponse<?> deleteFeed(@ApiIgnore Authentication authentication,
        @PathVariable("feedId") Long feedId) {

        Long userId = ((CustomUserDetails) authentication.getDetails()).getUserSeq();

        return BaseResponse.success(null);

    }
//
//    @PutMapping("/{feedId}")
//    @ApiOperation(value = "게시글 수정하기", notes = "게시글 수정")
//    public ResponseEntity<Integer> updateFeed(@RequestHeader(value = "userSeq") Long userId,
//        @PathVariable("feedId") Long feedId, @RequestBody FeedRequestDto feed, List<MultipartFile> files) {
//
///*        if (!jwtTokenProvider.validateToken(token)) {
//            return ResponseEntity
//                .status(HttpStatus.BAD_REQUEST)
//                .body(new ErrorResponse(messageSource.getMessage("error.valid.jwt", null, LocaleContextHolder.getLocale())));
//        } */
//
//        Optional<Feed> option = feedRepository.findById(feedId);
//        int result = 0;
//        if (option.isPresent()) {
//            Feed f = option.get();
//            f.setContent(feed.getContent());
//            f.setPublicScope(feed.getPublicScope());
//            //    f.setSelectedHashtags(feed.getSelectedHashtags());
//            f.setUpdatedate(LocalDateTime.now());
//            f.setFeedFiles(feed.getFeedFiles());
//            feedRepository.save(f);
//            result=1;
//        }
//
//        return new ResponseEntity<Integer>(result, HttpStatus.OK);
//    }
//

//
//    @PostMapping("/feed/like/{feedId}")
//    @ApiOperation(value = "좋아요 추가", notes = "유저가 게시글 좋아요")
//    ResponseEntity<Integer> addLike(@RequestHeader(value = "userseq") String token,
//        @PathVariable("feedId") Long feedId,
//        @PathVariable("userId") User userId) {
//        /*       if (!jwtTokenProvider.validateToken(token)) {
//            return ResponseEntity
//                .status(HttpStatus.BAD_REQUEST)
//                .body(new ErrorResponse(messageSource.getMessage("error.valid.jwt", null, LocaleContextHolder.getLocale())));
//        }*/
//        FeedLike likeentity = FeedLike.builder().feedLikeId(feedId).user(userId).build();
//
//        int result=1;
//        try{
//            feedLikeService.addLike(likeentity);
//        }catch (Exception e) {
//            result=0;
//        }
//        return new ResponseEntity<Integer>(result, HttpStatus.OK);
//    }
//    @DeleteMapping("/feed/like/{feedId}")
//    @ApiOperation(value = "좋아요 삭제", notes = "유저가 게시글 취소")
//    ResponseEntity<Integer> deleteLike(@RequestHeader(value = "userseq") String token,
//        @PathVariable("feedId") Long feedId,
//        @PathVariable("userId") Long userId) {
//              /*       if (!jwtTokenProvider.validateToken(token)) {
//            return ResponseEntity
//                .status(HttpStatus.BAD_REQUEST)
//                .body(new ErrorResponse(messageSource.getMessage("error.valid.jwt", null, LocaleContextHolder.getLocale())));
//        }*/
//
//        int result =0;
///*
//        if(feedLikeRepository.findByFeedIdAndUserId(feedId, userId)!=null) {
//            feedLikeService.deleteLike(feedId, userId);
//            result = 1;
//        }
//*/
//        return new ResponseEntity<Integer>(result, HttpStatus.OK);
//    }
}
