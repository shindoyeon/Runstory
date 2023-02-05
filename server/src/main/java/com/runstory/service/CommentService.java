package com.runstory.service;

import com.runstory.api.request.CommentReqDto;
import com.runstory.api.response.ReCommentResDto;
import com.runstory.api.response.BaseResponse;
import com.runstory.api.response.CommentResDto;
import com.runstory.common.auth.CustomUserDetails;
import com.runstory.domain.feed.dto.FeedCommentDto;
import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.feed.entity.FeedComment;
import com.runstory.domain.feed.entity.FeedRecomment;
import com.runstory.domain.user.entity.User;
import com.runstory.repository.CommentRepository;
import com.runstory.repository.FeedRepository;
import com.runstory.repository.ReCommentRepository;
import com.runstory.repository.UserRepository;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import javax.persistence.metamodel.SingularAttribute;
import javax.servlet.http.HttpServletRequest;
import javax.xml.stream.events.Comment;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.AbstractPersistable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private FeedRepository feedRepository;
    @Autowired
    private ReCommentRepository reCommentRepository;
    @Autowired
    private FeedService feedService;
    @Autowired
    private UserRepository userRepository;
    public BaseResponse<?> getAllCommentsByFeed(Long feedId) {

        Feed feed = feedRepository.findByFeedId(feedId);

        //피드가 없으면 실패
        if(feed==null){
            return BaseResponse.fail();
        }

        List<FeedComment> commentList = commentRepository.findAllByFeed(feed);
        List<CommentResDto> commentResDtoList = new ArrayList<>();
        List<FeedRecomment> reCommentList = new ArrayList<>();
        List<ReCommentResDto> recommentResDtoList = new ArrayList<>();

        for(FeedComment comment : commentList) {

            reCommentList = reCommentRepository.findAllByFeedComment(comment);
            for (FeedRecomment reComment : reCommentList) {
                recommentResDtoList.add(
                    ReCommentResDto.builder()
                        .reCommentId(reComment.getFeedRecommentId())
                        .userId(reComment.getUser().getUserSeq())
                        .content(reComment.getContent())
                        .regDate(reComment.getRegdate())
                        .build()
                );
            }
            commentResDtoList.add(
                CommentResDto.builder()
                    .feedCommentId(comment.getFeedCommentId())
                    .userId(comment.getUser().getUserSeq())
                    .content(comment.getContent())
                    .reCommentResDtoList(recommentResDtoList)
                    .regDate(comment.getRegdate())
                    .build()
            );

        }
        return BaseResponse.success(commentResDtoList);
    }

    public BaseResponse<?> saveComment(CommentReqDto commentReqDto, Long userSeq) {
        Feed feed = feedRepository.findByFeedId(commentReqDto.getFeedId());
        User user = userRepository.findByUserSeq(userSeq);

        //유저정보없으면 실패
        if (user == null) {
            return BaseResponse.fail();
        }

        FeedComment comment = FeedComment.builder()
            .feed(feed)
            .user(user)
            .content(commentReqDto.getContent())
            .build();
        commentRepository.save(comment);

        return BaseResponse.success(CommentResDto.builder()
            .feedCommentId(comment.getFeedCommentId())
            .userId(comment.getUser().getUserSeq())
            .content(comment.getContent())
            .regDate(comment.getRegdate())
            .build()
        );
    }

    public BaseResponse<?> updateComment(Long commentId, CommentReqDto commentReqDto, Long userSeq) {

        Feed feed = feedRepository.findByFeedId(commentReqDto.getFeedId());
        User user = userRepository.findByUserSeq(userSeq);

        //유저정보없으면 실패
        if (user == null) {
          return BaseResponse.fail();
        }
        //피드가 없으면 실패
        if(feed==null){
            return BaseResponse.fail();
        }
        FeedComment feedComment = commentRepository.findByFeedCommentId(commentId);

        feedComment.update(commentReqDto);

        return BaseResponse.success(CommentResDto.builder()
            .feedCommentId(feedComment.getFeedCommentId())
            .userId(feedComment.getUser().getUserSeq())
            .content(feedComment.getContent())
            .regDate(feedComment.getRegdate())
            .build()
        );
    }

    public BaseResponse<?> deleteComment(Long commentId, Long userSeq) {
        User user = userRepository.findByUserSeq(userSeq);
        
        //유저정보없으면 실패
        if(user==null){
            return BaseResponse.fail();
        }
        FeedComment feedComment = commentRepository.findByFeedCommentId(commentId);

        commentRepository.delete(feedComment);
        return BaseResponse.success("success");
    }

}
