package com.runstory.api.controller;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

import com.runstory.api.request.CommentReqDto;
import com.runstory.api.response.BaseResponse;
import com.runstory.api.response.CommentResDto;
import com.runstory.common.auth.CustomUserDetails;
import com.runstory.domain.feed.dto.FeedCommentDto;
import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.feed.entity.FeedComment;
import com.runstory.domain.user.dto.FollowDto;
import com.runstory.domain.user.dto.UserDto;
import com.runstory.domain.user.entity.User;
import com.runstory.service.CommentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

@RestController
@RequestMapping("/feed/comment")
@RequiredArgsConstructor
@Api(tags = "댓글 대댓글 API")
public class CommentController {


    private final CommentService commentService;

    @GetMapping("/{feedId}")
    @ApiOperation(value = "댓글 조회", notes = "댓글 조회")
    public BaseResponse<?> getAllComments(@PathVariable Long feedId) {

        return BaseResponse.success(commentService.getAllCommentsByFeed(feedId));

    }
    @PostMapping("")
    @ApiOperation(value = "댓글 작성", notes = "댓글 작성")
    public BaseResponse<?> saveComment(@ApiIgnore Authentication authentication, @RequestBody CommentReqDto reqDto) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
        Long userSeq = userDetails.getUserSeq();
        return BaseResponse.success(commentService.saveComment(reqDto, userSeq));
    }

    @PutMapping("/{commentId}")
    @ApiOperation(value = "댓글 수정", notes = "댓글 수정")
    public BaseResponse<?> updateComment(@ApiIgnore Authentication authentication, @PathVariable Long commentId, @RequestBody CommentReqDto reqDto) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
        Long userSeq = userDetails.getUserSeq();
        return BaseResponse.success(commentService.updateComment(commentId, reqDto, userSeq));
    }
    @DeleteMapping("/{commentId}")
    @ApiOperation(value = "댓글 삭제", notes = "댓글 삭제")
    public BaseResponse<?> deleteComment(@ApiIgnore Authentication authentication, @PathVariable Long commentId
        ) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
        Long userSeq = userDetails.getUserSeq();
        return BaseResponse.success(commentService.deleteComment(commentId, userSeq));

    }

}
