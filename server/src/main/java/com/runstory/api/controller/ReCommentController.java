package com.runstory.api.controller;

import com.runstory.api.request.CommentReqDto;
import com.runstory.api.request.ReCommentReqDto;
import com.runstory.api.response.BaseResponse;
import com.runstory.common.auth.CustomUserDetails;
import com.runstory.service.ReCommentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.annotations.ApiIgnore;

@RestController
@RequestMapping("/feed/reComment")
@RequiredArgsConstructor
@Api(tags = "대댓글 API")
public class ReCommentController {

    ReCommentService reCommentService;

    @GetMapping("/{commentId}")
    @ApiOperation(value = "대댓글 조회", notes = "대댓글 조회")
    public BaseResponse<?> getAllReComments(@PathVariable Long commentId) {

        return BaseResponse.success(reCommentService.getAllReCommentsByComment(commentId));

    }
    @PostMapping("")
    @ApiOperation(value = "대댓글 작성", notes = "대댓글 작성")
    public BaseResponse<?> saveReComment(@ApiIgnore Authentication authentication, @RequestBody ReCommentReqDto reqDto) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
        Long userSeq = userDetails.getUserSeq();
        return BaseResponse.success(reCommentService.saveReComment(reqDto, userSeq));
    }

    @PutMapping("reComment/{reCommentId}")
    @ApiOperation(value = "대댓글 수정", notes = "대댓글 수정")
    public BaseResponse<?> updateReComment(@ApiIgnore Authentication authentication, @PathVariable Long reCommentId, @RequestBody ReCommentReqDto reqDto) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
        Long userSeq = userDetails.getUserSeq();
        return BaseResponse.success(reCommentService.updateReComment(reCommentId, reqDto, userSeq));
    }
    @DeleteMapping("/{reCommentId}")
    @ApiOperation(value = "대댓글 삭제", notes = "대댓글 삭제")
    public BaseResponse<?> deleteReComment(@ApiIgnore Authentication authentication, @PathVariable Long reCommentId
    ) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getDetails();
        Long userSeq = userDetails.getUserSeq();
        return BaseResponse.success(reCommentService.deleteReComment(reCommentId, userSeq));
    }

}
