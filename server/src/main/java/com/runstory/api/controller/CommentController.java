package com.runstory.api.controller;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

import com.runstory.api.request.CommentReqDto;
import com.runstory.api.response.BaseResponse;
import com.runstory.service.CommentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import javax.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/feed")
@RequiredArgsConstructor
@Api(tags = "댓글 대댓글 API")
public class CommentController {

    CommentService commentService;

    @GetMapping("/comment/{feedId}")
    @ApiOperation(value = "댓글 조회", notes = "댓글 조회")
    public BaseResponse<?> getAllComments(@PathVariable Long feedId) {
        return BaseResponse.success(commentService.getAllCommentsByFeed(feedId));
    }
    @PostMapping("/comment/{feedId}")
    @ApiOperation(value = "댓글 작성", notes = "댓글 작성")
    public BaseResponse<?> createComment(@RequestBody CommentReqDto reqDto,
        HttpServletRequest request) {
        return commentService.saveComment(reqDto, request);
    }

    @PutMapping("/comment/{feedId}")
    @ApiOperation(value = "댓글 수정", notes = "댓글 수정")
    public BaseResponse<?> updateComment(@PathVariable Long id, @RequestBody CommentReqDto reqDto,
        HttpServletRequest request) {
        return commentService.updateComment(id, reqDto, request);
    }
    @DeleteMapping("/comment/{feedId}")
    @ApiOperation(value = "댓글 작성", notes = "댓글 작성")
    public BaseResponse<?> deleteComment(@PathVariable Long feedId,
        HttpServletRequest request) {
        return commentService.deleteComment(feedId, request);


}
