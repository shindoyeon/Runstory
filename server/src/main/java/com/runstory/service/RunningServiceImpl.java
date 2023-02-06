package com.runstory.service;

import com.runstory.api.request.RunningCrewReqDto;
import com.runstory.api.response.RunningMainResDto;
import com.runstory.domain.hashtag.HashtagType;
import com.runstory.domain.hashtag.dto.HashtagDto;
import com.runstory.domain.hashtag.dto.SelectedHashtagDto;
import com.runstory.domain.hashtag.entity.Hashtag;
import com.runstory.domain.hashtag.entity.SelectedHashtag;
import com.runstory.domain.running.*;
import com.runstory.api.response.RunningDetailSumDto;
import com.runstory.domain.running.dto.RunningBoardCommentDto;
import com.runstory.domain.running.dto.RunningDto;
import com.runstory.domain.running.dto.RunningUserDto;
import com.runstory.domain.user.entity.User;
import com.runstory.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Field;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class RunningServiceImpl implements RunningService {

    private final RunningRepository runningrepository;
    private final RunningDetailRepository runningDetailRepository;
    private final HashtagRepository hashtagRepository;
    private final SelectedHashtagRepository selectedHashtagRepository;
    private final UserRepository userRepository;
    private final RunningCommentRepository runningCommentRepository;
    private final RunningUserRepository runningUserRepository;
    private final RunningDibsRepository runningDibsRepository;

    @Override
    @Transactional
    public Long createRunningCrew(RunningCrewReqDto runningCrewReqDto, Long userSeq){// User user 현재 유저를 들고와야한다.
        // 유저 전체의 데이터를 들고온다.
        User user = userRepository.findByUserSeq(userSeq);
        Running running = new Running(runningCrewReqDto, user);
        runningrepository.save(running);
        RunningDetail runningDetail = new RunningDetail(runningCrewReqDto);
        runningDetailRepository.save(runningDetail);
        // RunningHashTag
        for (Long hashtagId : runningCrewReqDto.getHastag()){
            // HashTag 관련 Repository 필요
            Hashtag hashtag = hashtagRepository.findHashtagByHashtagId(hashtagId);
            SelectedHashtag selectedHashtag = SelectedHashtag.builder()
                    .hashtagType(HashtagType.RUNNING)
                    .running(running)
                    .hashtag(hashtag)
                    .build();
            selectedHashtagRepository.save(selectedHashtag);
        }
        return running.getRunningId();
    }


    @Override
    public List<HashMap<String, List<RunningMainResDto>>> selectRunningCrew(float longitude, float latitude, Long userSeq){
        List<Running> runninglist = runningrepository.findByIsFinished(false); // 데이터 전체를 들고온다.
        List<HashMap<String, List<RunningMainResDto>>> result = new ArrayList<>();
//        LocalDate seoulNow = LocalDate.now(ZoneId.of("Asia/Seoul")); // 현재 서울의 시간을 보여준다.
//        for (Running running: runninglist){
//            int year = running.getStartTime().getYear();
//            int day = running.getStartTime().getDayOfYear();
//            if (Math.abs(running.getStartLatitude() - latitude) < 0.01 && Math.abs(running.getStartLongitude() - longitude) < 0.01){
//                RunningMainResDto runningMainResDto = new RunningMainResDto(running);
//                result.add(runningMainResDto);
//            }else if (day == seoulNow.getDayOfYear() && year == seoulNow.getYear()){
//                RunningMainResDto runningMainResDto = new RunningMainResDto(running);
//                result.add(runningMainResDto);
//            }
        // User에 따른 해쉬태그 들고오기 (HashTag에 따른 추가적인 공부사항 정의)
        User user = userRepository.findByUserSeq(userSeq);
        List<SelectedHashtag> userSelectedHashtags = selectedHashtagRepository.findAllByUser(user);
        for (SelectedHashtag selectedHashtag : userSelectedHashtags){
            Hashtag hashtag = hashtagRepository.findHashtagByHashtagId(selectedHashtag.getHashtag().getHashtagId());
            List<SelectedHashtag> selectedHashtags = selectedHashtagRepository.findAllByHashtag(hashtag);
            HashMap<String, List<RunningMainResDto>> hash = new HashMap<>();
            List<RunningMainResDto> runningMainResDtos = new ArrayList<>();
            for (SelectedHashtag selectedHashtag1 : selectedHashtags){
                if (selectedHashtag1.getRunning() != null){
                    RunningMainResDto runningMainResDto = new RunningMainResDto(selectedHashtag1.getRunning());
                    runningMainResDtos.add(runningMainResDto);
                }
            }
            hash.put(hashtag.getHashtagName(), runningMainResDtos);
            result.add(hash); // result값 안에 넣는다.
        }
        return result;
    }
    
    // DetailPage 들고오기
    @Override
    public RunningDetailSumDto findRunningDetail(Long id, Long userseq){
        Running running = runningrepository.getById(id);
        RunningDetail runningDetail = runningDetailRepository.getById(id);
        RunningDetailSumDto runningDetailSumDto = new RunningDetailSumDto(running, runningDetail, userseq);
        return runningDetailSumDto;
    }

    // DetailPage 삭제하기
    @Override
    @Transactional
    public Long deleteRunningCrew(Long id){
        Running running = runningrepository.getById(id);
        RunningDetail runningDetail = runningDetailRepository.getById(id);
        runningrepository.deleteById(id);
        runningDetailRepository.deleteById(id);
        return id;
    }

    // DetailPage 수정하기
    @Override
    @Transactional
    public Long updateRunningCrew(RunningCrewReqDto newRunningCrewReqDto){
        Running running = runningrepository.getById(newRunningCrewReqDto.getId()); // 값읋 들고온다.
        RunningDetail runningDetail = runningDetailRepository.getById(newRunningCrewReqDto.getId());
        running.RunningUpdate(newRunningCrewReqDto);
        runningrepository.save(running);
        runningDetail.runningDetailUpdate(newRunningCrewReqDto);
        runningDetailRepository.save(runningDetail);
        // 해쉬태그를 변경
        List<SelectedHashtag> selectedHashtags = selectedHashtagRepository.findAllByRunning(running);
        for (SelectedHashtag selectedHashtag : selectedHashtags){

            selectedHashtagRepository.deleteById(selectedHashtag.getSelectedHashtagId());
        }

        for (Long hashtagId : newRunningCrewReqDto.getHastag()){
            Hashtag hashtag = hashtagRepository.findHashtagByHashtagId(hashtagId);
            SelectedHashtag selectedHashtag = SelectedHashtag.builder()
                    .hashtagType(HashtagType.RUNNING)
                    .running(running)
                    .hashtag(hashtag)
                    .build();
            selectedHashtagRepository.save(selectedHashtag);
        }


//        for (SelectedHashtag selectedHashtag : selectedHashtags){
//            boolean isHash = false;
//            for (Long hashtagId : newRunningCrewReqDto.getHastag()){
//                if (selectedHashtag.getSelectedHashtagId().equals(hashtagId)){
//                    isHash = true;
//                    break;
//                }
//            }
//            if (!isHash){
//                selectedHashtagRepository.deleteById(selectedHashtag.getSelectedHashtagId());
//            }
//        }
        return newRunningCrewReqDto.getId();
    }

    // Reservation
    @Override
    @Transactional
    public Long reservationRunningCrew(Long runningid, Long userseq){ // 예약하기
        Running running = runningrepository.getById(runningid);
        User user = userRepository.findByUserSeq(userseq);
        RunningUser oldRunningUser = runningUserRepository.findByRunningAndUser(running, user); // User가 이미 있는지를 확인한다.
        if (oldRunningUser == null){
            RunningUser runningUser = new RunningUser(running, user);
            runningUserRepository.save(runningUser);
            return userseq;
        }else{
            return -1L;
        }
    }

    @Override
    @Transactional
    public Long deleteRunningReservation(Long runningid, Long userSeq){
        Running running = runningrepository.getById(runningid);
        User user = userRepository.findByUserSeq(userSeq);
        RunningUser oldRunningUser = runningUserRepository.findByRunningAndUser(running, user);
        if (oldRunningUser == null){
            return -1L;
        }else{ // 만약 있으면
            runningUserRepository.deleteById(oldRunningUser.getId());
            return userSeq;
        }
    }


    //Dibs
    @Override
    @Transactional
    public Long createDibsRunningCrew(Long runningid, Long userseq){ // 예약하기
        Running running = runningrepository.getById(runningid);
        User user = userRepository.findByUserSeq(userseq);
        RunningDibs oldRunningUser = runningDibsRepository.findByRunningAndUser(running, user); // User가 이미 있는지를 확인한다.
        if (oldRunningUser == null){
            RunningDibs runningDibs = new RunningDibs(running, user);
            runningDibsRepository.save(runningDibs);
            return userseq;
        }else{
            return -1L;
        }
    }

    @Override
    @Transactional
    public Long deleteDibsRunningCrew(Long runningid, Long userSeq){
        Running running = runningrepository.getById(runningid);
        User user = userRepository.findByUserSeq(userSeq);
        RunningDibs previousDibsUser = runningDibsRepository.findByRunningAndUser(running, user);
        if (previousDibsUser == null){
            return -1L;
        }else{ // 만약 있으면
            runningDibsRepository.deleteById(previousDibsUser.getId());
            return userSeq;
        }
    }

    // Comment
    @Override
    @Transactional
    public Long createRunningComment(RunningBoardCommentDto runningBoardCommentDto, Long userseq, Long runninid){
        Running running = runningrepository.getById(runninid);
        User user = userRepository.findByUserSeq(userseq);
        RunningBoardComment runningBoardComment = new RunningBoardComment(runningBoardCommentDto, user, running);
        runningCommentRepository.save(runningBoardComment);
        // 단톡방에 추가하기!
        return userseq;
    }

    @Override
    @Transactional
    public Long deleteRunningComment(Long commentid){
        runningCommentRepository.deleteById(commentid);
        return commentid;
    }

    // MyPage
    @Override
    public List<HashMap<String, List<RunningMainResDto>>> myRunningfunction(Long userseq){
        User user = userRepository.findByUserSeq(userseq); // user 들고 온다.
        List<HashMap<String, List<RunningMainResDto>>> result = new ArrayList<>();
        List<String> names = Arrays.asList("mycrew", "joincrew", "dibscrew", "pastcrew");
        for (String name : names){
            HashMap<String, List<RunningMainResDto>> hashMap = new HashMap<>();
            List<RunningMainResDto> runningMainResDtos = new ArrayList<>();
            List<Running> runnings = new ArrayList<>();
            switch (name){
                case "mycrew":
                    runnings = runningrepository.findAllByIsFinishedAndUser(false, user);
                    break;
                case "joincrew":
                    List<RunningUser> runningUsers = runningUserRepository.findAllByUser(user); // 참가되어있는 경우
                    for (RunningUser runningUser :runningUsers){
                        runnings.add(runningUser.getRunning());
                    }
                    break;

                case "dibcrew":
                    List<RunningDibs> runningDibs = runningDibsRepository.findAllByUser(user);
                    for (RunningDibs runningDib : runningDibs){
                        runnings.add(runningDib.getRunning());
                    }
                    break;

                case "pastcrew":
                    runnings = runningrepository.findAllByIsFinishedAndUser(true, user);
                    break;
            }

            for (Running running : runnings){
                RunningMainResDto runningMainResDto = new RunningMainResDto(running);
                runningMainResDtos.add(runningMainResDto);
            }
            hashMap.put(name, runningMainResDtos);
            result.add(hashMap);
        }
        return result;
    }
}
