package com.runstory.service;

import com.runstory.api.request.CommentReqDto;
import com.runstory.api.request.ReCommentResDto;
import com.runstory.api.response.BaseResponse;
import com.runstory.api.response.CommentResDto;
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
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import javax.persistence.metamodel.SingularAttribute;
import javax.servlet.http.HttpServletRequest;
import javax.xml.stream.events.Comment;
import org.springframework.data.jpa.domain.AbstractPersistable;

public class CommentService {

    private CommentRepository commentRepository;
    private FeedRepository feedRepository;
    private ReCommentRepository reCommentRepository;
    private FeedService feedService;

    private UserRepository userRepository;



    public List<FeedCommentDto> getAllCommentsByFeed(Long feedId) {
        Feed feed = feedRepository.findByFeedId(feedId);
        List<FeedComment> commentList = commentRepository.findAllByFeed(feed);
        List<CommentResDto> commentResDtoList = new ArrayList<>();
        List<FeedRecomment> recommentList = new ArrayList<>();
        List<ReCommentResDto> recommentResDtoList = new ArrayList<>();

        for(FeedComment comment : commentList) {

            recommentList = reCommentRepository.findAllByComment(comment);
            for (FeedRecomment recomment : recommentList) {
                ReCommentResDto.builder();
            }



        }
            List<FeedCommentDto> result = commentList.stream().map(c->new FeedCommentDto(c)).collect(Collectors.toList());
        return result;

    }

    public long saveComment(FeedCommentDto feedCommentDto) {

        FeedComment comment = new FeedComment(feedCommentDto);
        commentRepository.save(comment);

        return

    }



    public BaseResponse<?> updateComment(Long feedId, CommentReqDto reqDto, HttpServletRequest request) {
    }

    public BaseResponse<?> deleteComment(Long feedId, HttpServletRequest request) {
    }
}
