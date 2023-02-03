package com.runstory.service;

import com.runstory.api.request.CommentReqDto;
import com.runstory.api.request.ReCommentResDto;
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
        List<FeedComment> commentList = commentRepository.findAllByFeed(feed);
        List<CommentResDto> commentResDtoList = new ArrayList<>();
        List<FeedRecomment> recommentList = new ArrayList<>();
        List<ReCommentResDto> recommentResDtoList = new ArrayList<>();

        for(FeedComment comment : commentList) {

            recommentList = reCommentRepository.findAllByFeedComment(comment);
            for (FeedRecomment recomment : recommentList) {
                recommentResDtoList.add(
                    ReCommentResDto.builder()
                        .id(recomment.getFeedRecommentId())
                        .userId(recomment.getUser().getUserId())
                        .regDate(recomment.getRegdate())
                        .build()
                );
            }
            commentResDtoList.add(
                CommentResDto.builder()
                    .feedCommentId(comment.getFeedCommentId())
                    .userId(comment.getUser().getUserId())
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

        FeedComment comment = FeedComment.builder()
            .feed(feed)
            .user(user)
            .content(commentReqDto.getContent())
            .build();
        commentRepository.save(comment);

        return BaseResponse.success(CommentResDto.builder()
            .feedCommentId(comment.getFeedCommentId())
            .userId(comment.getUser().getUserId())
            .content(comment.getContent())
            .regDate(comment.getRegdate())
            .build()
        );
    }

    public BaseResponse<?> updateComment(Long commentId, CommentReqDto commentReqDto, Long userSeq) {

        Feed feed = feedRepository.findByFeedId(commentReqDto.getFeedId());
        User user = userRepository.findByUserSeq(userSeq);
        FeedComment feedComment = commentRepository.findByFeedCommentId(commentId);

        feedComment.update(commentReqDto);

        return BaseResponse.success(CommentResDto.builder()
            .feedCommentId(feedComment.getFeedCommentId())
            .userId(feedComment.getUser().getUserId())
            .content(feedComment.getContent())
            .regDate(feedComment.getRegdate())
            .build()
        );
    }

    public BaseResponse<?> deleteComment(Long commentId, Long userSeq) {
        User user = userRepository.findByUserSeq(userSeq);
        FeedComment feedComment = commentRepository.findByFeedCommentId(commentId);

        commentRepository.delete(feedComment);
        return BaseResponse.success("success");
    }
}
