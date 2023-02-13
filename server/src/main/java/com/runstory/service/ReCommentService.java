package com.runstory.service;

import com.runstory.api.request.CommentReqDto;
import com.runstory.api.request.ReCommentReqDto;
import com.runstory.api.response.ReCommentResDto;
import com.runstory.api.response.BaseResponse;
import com.runstory.domain.feed.entity.FeedComment;
import com.runstory.domain.feed.entity.FeedRecomment;
import com.runstory.domain.user.entity.User;
import com.runstory.repository.CommentRepository;
import com.runstory.repository.ReCommentRepository;
import com.runstory.repository.UserRepository;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReCommentService {

    private final UserRepository userRepository;

    private final CommentService commentService;
    private final ReCommentRepository reCommentRepository;
    private final CommentRepository commentRepository;


    public BaseResponse<?> getAllReCommentsByComment(Long commentId) {
        FeedComment comment = commentRepository.findByFeedCommentId(commentId);

        List<FeedRecomment> reCommentList = reCommentRepository.findAllByFeedComment(comment);
        List<ReCommentResDto> reCommentResDtoList = new ArrayList<>();

        for (FeedRecomment reComment : reCommentList) {
          reCommentResDtoList.add(
              ReCommentResDto.builder()
                  .reCommentId(reComment.getFeedRecommentId())
                  .userId(reComment.getUser().getUserSeq())
                  .regDate(reComment.getRegdate())
              .build()
          );
        }
        return BaseResponse.success(reCommentResDtoList);
    }

    public Object saveReComment(ReCommentReqDto reqDto, Long userSeq) {
        User user = userRepository.findByUserSeq(userSeq);

        //유저정보없으면 실패
        if (user == null) {
            return BaseResponse.fail();
        }

        FeedComment comment = commentRepository.findByFeedCommentId(reqDto.getCommentId());

        FeedRecomment reComment = FeedRecomment.builder()
            .user(user)
            .feedComment(comment)
            .content(reqDto.getContent())
            .build();

        reCommentRepository.save(reComment);


        return BaseResponse.success(
            ReCommentResDto.builder()
                .reCommentId(reComment.getFeedRecommentId())
                .userId(reComment.getUser().getUserSeq())
                .content(reComment.getContent())
                .regDate(reComment.getRegdate())
                .build()
        );

    }

    public BaseResponse<?> updateReComment(Long reCommentId, ReCommentReqDto reqDto, Long userSeq) {
        User user = userRepository.findByUserSeq(userSeq);

        //유저정보없으면 실패
        if (user == null) {
            return BaseResponse.fail();
        }
       FeedRecomment reComment = reCommentRepository.findByReCommentId(reCommentId);

       reComment.update(reqDto);

        return BaseResponse.success(ReCommentResDto.builder()
            .reCommentId(reComment.getFeedRecommentId())
            .userId(user.getUserSeq())
            .content(reComment.getContent())
            .regDate(reComment.getRegdate())
            .build()
            );

    }

    public BaseResponse<?> deleteReComment(Long recommentId, Long userSeq) {
        User user = userRepository.findByUserSeq(userSeq);

        //유저정보없으면 실패
        if (user == null) {
            return BaseResponse.fail();
        }
        FeedRecomment reComment = reCommentRepository.findByReCommentId(recommentId);
        reCommentRepository.delete(reComment);

        return BaseResponse.success("success");

    }


}
