package com.runstory.service;

import com.runstory.api.request.FeedReqDto;
import com.runstory.api.response.FeedResDto;
import com.runstory.api.response.SimpleFeedResDto;
import com.runstory.domain.feed.PublicScope;
import com.runstory.domain.feed.dto.FeedDto;
import com.runstory.domain.feed.entity.Feed;
import com.runstory.domain.feed.entity.FeedFile;
import com.runstory.domain.feed.entity.FeedLike;
import com.runstory.domain.hashtag.HashtagType;
import com.runstory.domain.hashtag.entity.Hashtag;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import com.runstory.domain.user.entity.Follow;
import com.runstory.domain.user.entity.User;
import com.runstory.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.tags.form.SelectTag;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class FeedService {
    private final FeedRepository feedRepository;
    private final FeedRepositoryCustom feedRepositoryCustom;
    private final FollowRepository followRepository;
    private final UserRepository userRepository;
    private final  HashtagRepository hashtagRepository;
    private final SelectedHashtagRepository selectedHashtagRepository;
    private final FeedFileRepository feedFileRepository;
    private final FeedLikeRepository feedLikeRepository;

    public List<FeedDto> findAll(){
        List<Feed> feeds = feedRepository.findAll();
        List<FeedDto> result = feeds.stream().map(f->new FeedDto(f)).collect(Collectors.toList());
        return result;
    }

    /**
     * 팔로우 관계에 따른 피드 조회
     * 팔로우 관계인 경우->전체공개, 팔로우 공개 게시물 조회
     * 팔로우 관계가 아닌 경우->전체공개 게시물만 조회
     * @param myUserId
     * @param yourUserId
     * @param isMe
     * @return
     */
    public List<FeedDto> findByUserId(Long myUserId, Long yourUserId, Boolean isMe){
        List<Feed> feeds = new ArrayList<>();
        if(isMe){
            feeds = feedRepository.findByUserId(myUserId);
        }else{
            //팔로우 관계인지 조회
            Follow follow = followRepository.findFollowStatus(myUserId, yourUserId);
            //팔로우 관계 아님->전체공개 게시물만
            if(follow==null)
                feeds = feedRepositoryCustom.searchByUserId(yourUserId, false);
            //전체공개+팔로우공개 게시물
            else{
                feeds = feedRepositoryCustom.searchByUserId(yourUserId, true);
            }
        }
        System.out.println("feeds: "+feeds.size());
        List<FeedDto> result = feeds.stream().map(f->new FeedDto(f)).collect(Collectors.toList());
        return result;
    }

    /**
     * 회원의 메인피드 조회(회원이 팔로우한 사람들의 최신 게시물)
     * @param lastFeedId
     * @param size
     * @param userId
     * @return
     */
    public List<FeedResDto> findFeedPagesByFollowing(Long lastFeedId, int size, Long userId){
        User user = userRepository.findByUserSeq(userId);
        System.out.println(user.getUserSeq());
        List<User> followers = findFollowersWithLoggedInMember(userId);    // 사용자가 팔로우하고 있는 사람들을 가져온다.
        Page<Feed> feeds = fetchPages(lastFeedId, size, followers); // followers의 게시물들을 페이지네이션해서 가져온다.
        List<FeedResDto> result = new ArrayList<>();
        for(Feed f :feeds){
            FeedLike feedLike = feedLikeRepository.findByFeedIdAndUserId(f.getFeedId(),user.getUserSeq());
            FeedResDto feedResDto = new FeedResDto(f, feedLike);
            result.add(feedResDto);
        }
        return result;
    }

    /**
     * 비회원의 메인피드 조회(최신 업로드 피드)
     * @param lastFeedId
     * @param size
     * @return
     */
    public Page<Feed> findFeedPagesByNonMember(Long lastFeedId, int size){
        PageRequest pageRequest = PageRequest.of(0, size); // 페이지네이션을 위한 PageRequest, 페이지는 0으로 고정한다.
        List<PublicScope> scope = new ArrayList<>();
        scope.add(PublicScope.PUBLIC);
        return feedRepository.findByFeedIdLessThanAndPublicScopeInOrderByFeedIdDesc(lastFeedId, scope, pageRequest); // JPA 쿼리 메소드
    }

    private List<User> findFollowersWithLoggedInMember(Long userId) {
        List<Follow> followings = followRepository.findFollowing(userId);
        List<User> allMembers = new ArrayList<>();

        for(Follow f:followings)
            allMembers.add(userRepository.findByUserSeq(f.getTo().getUserSeq()));

        return allMembers;
    }

    private Page<Feed> fetchPages(Long lastFeedId, int size, List<User> followers) {
        PageRequest pageRequest = PageRequest.of(0, size); // 페이지네이션을 위한 PageRequest, 페이지는 0으로 고정한다.
        List<PublicScope> scope = new ArrayList<>();
        scope.add(PublicScope.PRIVATE);
        return feedRepository.findByFeedIdLessThanAndPublicScopeNotInAndUserInOrderByFeedIdDesc(lastFeedId, scope, followers, pageRequest); // JPA 쿼리 메소드
    }

    public FeedResDto findByFeedId(Long userId, Long feedId){
        Feed feed= feedRepository.findByFeedId(feedId);
        FeedLike feedLike = feedLikeRepository.findByFeedIdAndUserId(feedId, userId);
        FeedResDto result = new FeedResDto(feed, feedLike);
        return result;
    }
    @Transactional
    public Feed saveFeed(FeedReqDto feedReqDto, MultipartFile [] files) throws IOException {
        User user = userRepository.findByUserSeq(feedReqDto.getUserId());
        //피드 저장
        Feed result = feedRepository.save(new Feed(feedReqDto,user));
        //피드 파일 저장
        saveFiles(result, files);
        //피드 해시태그 저장
        saveHashtags(result,feedReqDto.getSelectedHashTags());
        return result;
    }
    @Transactional
    public void saveFiles(Feed feed, MultipartFile [] files) throws IOException {
        for(MultipartFile file: files){
            String fileName = file.getOriginalFilename();
            String filePath = "C:/runTogether/uploads/feed/" + UUID.randomUUID()+fileName;
            Path path = Paths.get(filePath);
            Files.write(path, file.getBytes());

            FeedFile feedFile = new FeedFile(feed, fileName,filePath);
            feedFileRepository.save(feedFile);
        }
    }
    @Transactional
    public void saveHashtags(Feed feed, List<Long> hashtags){
        for(Long hashtagId: hashtags){
            Hashtag hashtag = hashtagRepository.findHashtagByHashtagId(hashtagId);
            SelectedHashtag shashtag = new SelectedHashtag(hashtag, HashtagType.FEED, null, feed, null);
            selectedHashtagRepository.save(shashtag);
        }
    }

    /**
     * 피드 업데이트는 피드의 내용, 해시태그가 수정 가능하다.(***추후 파일 수정도 가능하게 만들지 고려)
     * @param feed(FeedReqDto)
     * @param feedId
     * @return
     * @throws IOException
     */
    @Transactional
    public Feed updateFeed(FeedReqDto feed, Long feedId) throws IOException {
        //피드 가져오기
        Feed f = feedRepository.findByFeedId(feedId);
        //내용 수정
        f.setContent(feed.getContent());
        f.setPublicScope(feed.getPublicScope());

        //해시태그 수정
        List<Long> tags = feed.getSelectedHashTags();
        Collections.sort(tags);
        List<SelectedHashtag> selectedHashtags = selectedHashtagRepository.findByFeedIdOrderByHashtagIdAsc(feedId);    //DB에 저장된 해시태그

        //저장된 해시태그 개수 비교
        if(tags.size()!=selectedHashtags.size()){
            System.out.println("해시태그 개수 다름");
            //selectedhashtag 삭제 후 저장
            selectedHashtagRepository.deleteSelectedHashtagByFeedId(feedId);
            saveHashtags(f,feed.getSelectedHashTags());
        } else {
            //개수가 같으면 하나하나 비교
            for(int i =0;i<tags.size();i++){
                if(tags.get(i)!=selectedHashtags.get(i).getHashtag().getHashtagId()){
                    System.out.println("해시태그 다시 저장");
                    //selectedhashtag 삭제 후 저장
                    selectedHashtagRepository.deleteSelectedHashtagByFeedId(feedId);
                    saveHashtags(f,feed.getSelectedHashTags());
                    break;
                }
            }
        }
        f.setSelectedHashtags(selectedHashtagRepository.findByFeedIdOrderByHashtagIdAsc(feedId));
        Feed result = feedRepository.save(f);
        return result;
    }

    @Transactional
    public boolean deleteFeed(Long feedId, Long userId){
        if(userId==feedRepository.findByFeedId(feedId).getUser().getUserSeq()) {
            feedRepository.deleteById(feedId);
            return true;
        }
        return false;
    }

    public List<SimpleFeedResDto> searchByHashtag(Long hashtagId, Long lastFeedId, int size){
        PageRequest pageRequest = PageRequest.of(0, size);
        //해시태그에 맞는 피드 아이디 리스트를 가져온다
        List<SelectedHashtag> selectedHashtags = selectedHashtagRepository.findByHashtag_HashtagIdAndFeedNotNull(hashtagId);
        System.out.println("feed 개수: "+selectedHashtags.size());
        List<Long> feedIds = selectedHashtags.stream().map(s->s.getFeed().getFeedId()).collect(Collectors.toList());
        List<PublicScope> scope = new ArrayList<>();
        scope.add(PublicScope.PUBLIC);
        Page<Feed> feeds = feedRepository.findByFeedIdLessThanAndFeedIdInAndPublicScopeInOrderByFeedIdDesc
                (lastFeedId,feedIds, scope, pageRequest);
        List<FeedDto> tmp = feeds.stream().map(f->new FeedDto(f)).collect(Collectors.toList());
        List<SimpleFeedResDto> result = tmp.stream().map(t->new SimpleFeedResDto(t)).collect(Collectors.toList());
        System.out.println("피드 개수: "+result.size());
        return result;
    }
    @Transactional
    public FeedLike saveFeedLiKe(Long feedId, Long userId){
        FeedLike feedLike = new FeedLike();
        Feed feed = feedRepository.findByFeedId(feedId);
        User user = userRepository.findByUserSeq(userId);
        feedLike.setFeed(feed);
        feedLike.setUser(user);
        return feedLikeRepository.save(feedLike);
    }

    @Transactional
    public void deleteFeedLike(Long feedLikeId){
        feedLikeRepository.deleteById(feedLikeId);
    }
}
